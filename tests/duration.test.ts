import { describe, expect, it } from "vitest"
import { Dur } from "../src/duration"

const context = describe

describe("Duration", () => {
  context("formatDuration()", () => {
    context("when given a typical duration", () => {
      it("should format hours, minutes and seconds", () => {
        expect(Dur.formatDuration(3725000)).toBe("1h 2m 5s")
      })

      it("should format milliseconds", () => {
        expect(Dur.formatDuration(1500)).toBe("1s 500ms")
      })

      it("should format all units", () => {
        expect(Dur.formatDuration(90061001)).toBe("1d 1h 1m 1s 1ms")
      })
    })

    context("when some units are zero", () => {
      it("should skip them", () => {
        expect(Dur.formatDuration(3_600_000 + 5_000)).toBe("1h 5s")
      })
    })

    context("when maxUnits is given", () => {
      it("should keep only the biggest units", () => {
        expect(Dur.formatDuration(3725000, 2)).toBe("1h 2m")
      })
    })

    context("when the value is zero", () => {
      it("should return 0ms", () => {
        expect(Dur.formatDuration(0)).toBe("0ms")
      })
    })

    context("when the value is negative", () => {
      it("should add a minus sign", () => {
        expect(Dur.formatDuration(-60000)).toBe("-1m")
      })
    })

    context("when the value has a fractional part", () => {
      it("should round to the nearest millisecond", () => {
        expect(Dur.formatDuration(1.4)).toBe("1ms")
      })
    })

    context("when the value is NaN or Infinity", () => {
      it("should return an empty string", () => {
        expect(Dur.formatDuration(NaN)).toBe("")
        expect(Dur.formatDuration(Infinity)).toBe("")
        expect(Dur.formatDuration(-Infinity)).toBe("")
      })
    })
  })

  context("parseDuration()", () => {
    context("when given several units", () => {
      it("should add them together", () => {
        expect(Dur.parseDuration("1h 30m")).toBe(5_400_000)
      })

      it("should parse units without spaces", () => {
        expect(Dur.parseDuration("2d4h")).toBe(187_200_000)
      })
    })

    context("when given a single unit", () => {
      it("should parse seconds and milliseconds", () => {
        expect(Dur.parseDuration("90s")).toBe(90_000)
        expect(Dur.parseDuration("500ms")).toBe(500)
      })
    })

    context("when given a decimal", () => {
      it("should convert it to milliseconds", () => {
        expect(Dur.parseDuration("1.5h")).toBe(5_400_000)
      })
    })

    context("when the text has uppercase letters or extra whitespace", () => {
      it("should ignore case and surrounding whitespace", () => {
        expect(Dur.parseDuration("  1H 30M ")).toBe(5_400_000)
      })
    })

    context("when the text is not understood", () => {
      it("should return undefined", () => {
        expect(Dur.parseDuration("abc")).toBeUndefined()
        expect(Dur.parseDuration("1h foo")).toBeUndefined()
      })
    })

    context("when a number has no unit", () => {
      it("should return undefined", () => {
        expect(Dur.parseDuration("30")).toBeUndefined()
      })
    })

    context("when the text is empty or blank", () => {
      it("should return undefined", () => {
        expect(Dur.parseDuration("")).toBeUndefined()
        expect(Dur.parseDuration("   ")).toBeUndefined()
      })
    })

    context("when used with formatDuration output", () => {
      it("should round trip", () => {
        expect(Dur.parseDuration(Dur.formatDuration(3725000))).toBe(3725000)
      })
    })
  })
})
