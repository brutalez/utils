import { describe, expect, it } from "vitest"
import { Dt } from "../src/date"

const context = describe

describe("Date", () => {
  context("isWithinRange()", () => {
    context("when the date is inside the range", () => {
      it("should return true", () => {
        expect(Dt.isWithinRange("2026-10-15", "2026-10-01", "2026-10-31")).toBe(
          true,
        )
      })
    })

    context("when the date is on a boundary", () => {
      it("should include both ends", () => {
        expect(Dt.isWithinRange("2026-10-01", "2026-10-01", "2026-10-31")).toBe(
          true,
        )
        expect(Dt.isWithinRange("2026-10-31", "2026-10-01", "2026-10-31")).toBe(
          true,
        )
      })
    })

    context("when the date is outside the range", () => {
      it("should return false", () => {
        expect(
          Dt.isWithinRange(
            new Date(2026, 10, 1),
            new Date(2026, 9, 1),
            new Date(2026, 9, 31),
          ),
        ).toBe(false)
      })
    })

    context("when given timestamps", () => {
      it("should compare them as dates", () => {
        expect(Dt.isWithinRange(5, 1, 10)).toBe(true)
        expect(Dt.isWithinRange(11, 1, 10)).toBe(false)
      })
    })
  })

  context("isSameDay()", () => {
    context("when both dates are on the same day", () => {
      it("should return true even at different times", () => {
        expect(
          Dt.isSameDay(
            new Date(2026, 9, 15, 8, 0),
            new Date(2026, 9, 15, 20, 30),
          ),
        ).toBe(true)
      })
    })

    context("when the dates are on different days", () => {
      it("should return false", () => {
        expect(Dt.isSameDay(new Date(2026, 9, 15), new Date(2026, 9, 16))).toBe(
          false,
        )
      })
    })

    context("when the day number matches but month or year differs", () => {
      it("should return false", () => {
        expect(Dt.isSameDay(new Date(2026, 9, 15), new Date(2026, 8, 15))).toBe(
          false,
        )
        expect(Dt.isSameDay(new Date(2026, 9, 15), new Date(2025, 9, 15))).toBe(
          false,
        )
      })
    })
  })

  context("overlaps()", () => {
    context("when the ranges partly overlap", () => {
      it("should return true", () => {
        expect(
          Dt.overlaps(
            { start: "2026-10-01", end: "2026-10-10" },
            { start: "2026-10-05", end: "2026-10-15" },
          ),
        ).toBe(true)
      })
    })

    context("when one range contains the other", () => {
      it("should return true", () => {
        expect(
          Dt.overlaps(
            { start: "2026-10-01", end: "2026-10-31" },
            { start: "2026-10-05", end: "2026-10-10" },
          ),
        ).toBe(true)
      })
    })

    context("when the ranges only touch", () => {
      it("should return false", () => {
        expect(
          Dt.overlaps(
            { start: "2026-10-01", end: "2026-10-05" },
            { start: "2026-10-05", end: "2026-10-10" },
          ),
        ).toBe(false)
      })
    })

    context("when the ranges are apart", () => {
      it("should return false", () => {
        expect(
          Dt.overlaps(
            { start: "2026-10-01", end: "2026-10-02" },
            { start: "2026-10-10", end: "2026-10-12" },
          ),
        ).toBe(false)
      })
    })

    context("when the arguments are swapped", () => {
      it("should give the same result", () => {
        const a = { start: "2026-10-01", end: "2026-10-10" }
        const b = { start: "2026-10-05", end: "2026-10-15" }

        expect(Dt.overlaps(a, b)).toBe(Dt.overlaps(b, a))
      })
    })
  })

  context("addDays()", () => {
    context("when crossing a month end", () => {
      it("should move into the next month", () => {
        expect(Dt.addDays(new Date(2026, 0, 31), 1)).toEqual(
          new Date(2026, 1, 1),
        )
      })
    })

    context("when days is negative", () => {
      it("should go back in time", () => {
        expect(Dt.addDays(new Date(2026, 9, 15), -15)).toEqual(
          new Date(2026, 8, 30),
        )
      })
    })

    context("when crossing the end of February", () => {
      it("should respect leap years", () => {
        expect(Dt.addDays(new Date(2028, 1, 28), 1)).toEqual(
          new Date(2028, 1, 29),
        )
        expect(Dt.addDays(new Date(2026, 1, 28), 1)).toEqual(
          new Date(2026, 2, 1),
        )
      })
    })

    context("when given a Date", () => {
      it("should not change the input date", () => {
        const input = new Date(2026, 9, 15)

        Dt.addDays(input, 5)

        expect(input).toEqual(new Date(2026, 9, 15))
      })
    })

    context("when given a string or a timestamp", () => {
      it("should return the shifted date", () => {
        expect(Dt.addDays("2026-10-15T00:00:00", 1)).toEqual(
          new Date(2026, 9, 16),
        )
        expect(Dt.addDays(new Date(2026, 9, 15).getTime(), 1)).toEqual(
          new Date(2026, 9, 16),
        )
      })
    })
  })
})
