import { describe, expect, it } from "vitest"
import { Num } from "../src/number"

const context = describe

describe("Number", () => {
  context("clamp()", () => {
    context("when the value is above the max", () => {
      it("should return the max", () => {
        expect(Num.clamp(15, 0, 10)).toBe(10)
      })
    })

    context("when the value is below the min", () => {
      it("should return the min", () => {
        expect(Num.clamp(-5, 0, 10)).toBe(0)
      })
    })

    context("when the value is inside the range", () => {
      it("should return the value", () => {
        expect(Num.clamp(7, 0, 10)).toBe(7)
      })
    })

    context("when the value is on a boundary", () => {
      it("should return the boundary unchanged", () => {
        expect(Num.clamp(0, 0, 10)).toBe(0)
        expect(Num.clamp(10, 0, 10)).toBe(10)
      })
    })
  })

  context("inRange()", () => {
    context("when the value is inside the range", () => {
      it("should return true", () => {
        expect(Num.inRange(5, 1, 10)).toBe(true)
      })
    })

    context("when the value is on a boundary", () => {
      it("should include both ends", () => {
        expect(Num.inRange(1, 1, 10)).toBe(true)
        expect(Num.inRange(10, 1, 10)).toBe(true)
      })
    })

    context("when the value is outside the range", () => {
      it("should return false", () => {
        expect(Num.inRange(0, 1, 10)).toBe(false)
        expect(Num.inRange(11, 1, 10)).toBe(false)
      })
    })
  })

  context("roundTo()", () => {
    context("when decimals are given", () => {
      it("should round to the given decimals", () => {
        expect(Num.roundTo(3.14159, 2)).toBe(3.14)
      })
    })

    context("when decimals are omitted", () => {
      it("should round to a whole number", () => {
        expect(Num.roundTo(1234.5678)).toBe(1235)
      })
    })

    context("when the value is a floating point edge case", () => {
      it("should round as expected", () => {
        expect(Num.roundTo(1.005, 2)).toBe(1.01)
      })
    })

    context("when the value is exactly half", () => {
      it("should round away from zero", () => {
        expect(Num.roundTo(1.5)).toBe(2)
        expect(Num.roundTo(-1.5)).toBe(-2)
      })
    })

    context("when a small negative value rounds to zero", () => {
      it("should not return negative zero", () => {
        expect(Object.is(Num.roundTo(-0.001, 2), 0)).toBe(true)
      })
    })
  })

  context("formatDigits()", () => {
    context("when the number is shorter than digits", () => {
      it("should pad with leading zeros", () => {
        expect(Num.formatDigits(7, 3)).toBe("007")
      })
    })

    context("when the number is longer than digits", () => {
      it("should not cut the number", () => {
        expect(Num.formatDigits(1234, 3)).toBe("1234")
      })
    })

    context("when the number is negative", () => {
      it("should keep the minus sign in front", () => {
        expect(Num.formatDigits(-5, 3)).toBe("-005")
      })
    })

    context("when the number has a decimal part", () => {
      it("should drop the decimal part", () => {
        expect(Num.formatDigits(3.9, 3)).toBe("003")
      })
    })
  })

  context("sum()", () => {
    context("when given a list of numbers", () => {
      it("should add them up", () => {
        expect(Num.sum([1, 2, 3])).toBe(6)
      })

      it("should handle negative numbers", () => {
        expect(Num.sum([5, -2, -3])).toBe(0)
      })
    })

    context("when given an empty array", () => {
      it("should return 0", () => {
        expect(Num.sum([])).toBe(0)
      })
    })

    context("when combined with roundTo", () => {
      it("should hide float noise", () => {
        expect(Num.roundTo(Num.sum([0.1, 0.2]), 2)).toBe(0.3)
      })
    })
  })
})
