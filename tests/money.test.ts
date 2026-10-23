import { describe, expect, it } from "vitest"
import { Money } from "../src/money"

const context = describe

describe("Money", () => {
  context("CURRENCIES", () => {
    context("when reading the list", () => {
      it("should have a unique id for every currency", () => {
        const ids = Money.CURRENCIES.map((c) => c.id)

        expect(new Set(ids).size).toBe(ids.length)
      })

      it("should use the ISO code as the id", () => {
        for (const currency of Money.CURRENCIES) {
          expect(currency.id).toBe(currency.code)
          expect(currency.code).toMatch(/^[A-Z]{3}$/)
        }
      })

      it("should only allow whole-number decimals", () => {
        for (const currency of Money.CURRENCIES) {
          expect(Number.isInteger(currency.decimals)).toBe(true)
          expect(currency.decimals).toBeGreaterThanOrEqual(0)
        }
      })
    })

    context("when the currency has no minor unit", () => {
      it("should use zero decimals for IDR, JPY and KRW", () => {
        for (const id of ["IDR", "JPY", "KRW"]) {
          expect(Money.findCurrency(id)?.decimals).toBe(0)
        }
      })
    })

    context("when the currency has a minor unit", () => {
      it("should use two decimals for USD", () => {
        expect(Money.findCurrency("USD")?.decimals).toBe(2)
      })
    })
  })

  context("findCurrency()", () => {
    context("when the id exists", () => {
      it("should return the currency", () => {
        expect(Money.findCurrency("IDR")).toMatchObject({
          code: "IDR",
          symbol: "Rp",
          name: "Indonesian Rupiah",
        })
      })
    })

    context("when the id does not exist", () => {
      it("should return undefined", () => {
        expect(Money.findCurrency("XXX")).toBeUndefined()
        expect(Money.findCurrency("")).toBeUndefined()
      })
    })

    context("when the id has a different case", () => {
      it("should not match", () => {
        expect(Money.findCurrency("usd")).toBeUndefined()
      })
    })
  })

  context("normalizeMoney()", () => {
    context("when the input is already plain", () => {
      it("should return it unchanged", () => {
        expect(Money.normalizeMoney("1234.5")).toBe("1234.5")
        expect(Money.normalizeMoney("1234")).toBe("1234")
      })
    })

    context("when the input has symbols and separators", () => {
      it("should strip everything except digits and the dot", () => {
        expect(Money.normalizeMoney("$1,234.56")).toBe("1234.56")
        expect(Money.normalizeMoney("Rp 1.000")).toBe("1.00")
        expect(Money.normalizeMoney("-5")).toBe("5")
      })
    })

    context("when the input has no digits", () => {
      it("should return an empty string", () => {
        expect(Money.normalizeMoney("")).toBe("")
        expect(Money.normalizeMoney("abc")).toBe("")
      })
    })

    context("when the input has more fraction digits than allowed", () => {
      it("should cut the extra digits without rounding", () => {
        expect(Money.normalizeMoney("1.239")).toBe("1.23")
        expect(Money.normalizeMoney("1.5", 0)).toBe("1")
        expect(Money.normalizeMoney("1.2345", 3)).toBe("1.234")
      })
    })

    context("when decimals is zero or negative", () => {
      it("should drop the fraction and the dot", () => {
        expect(Money.normalizeMoney("1234.56", 0)).toBe("1234")
        expect(Money.normalizeMoney("1234.", 0)).toBe("1234")
        expect(Money.normalizeMoney("1234.56", -1)).toBe("1234")
      })
    })

    context("when the input ends with a dot", () => {
      it("should keep the dot so the user can keep typing", () => {
        expect(Money.normalizeMoney("1234.")).toBe("1234.")
      })
    })

    context("when the input has more than one dot", () => {
      it("should join the parts after the first dot", () => {
        expect(Money.normalizeMoney("1.2.3")).toBe("1.23")
        expect(Money.normalizeMoney("1.2.3", 1)).toBe("1.2")
      })
    })

    context("when the input has leading zeros", () => {
      it("should remove them", () => {
        expect(Money.normalizeMoney("007")).toBe("7")
        expect(Money.normalizeMoney("007.5")).toBe("7.5")
      })

      it("should keep a single zero", () => {
        expect(Money.normalizeMoney("0")).toBe("0")
        expect(Money.normalizeMoney("000")).toBe("0")
        expect(Money.normalizeMoney("00.5")).toBe("0.5")
      })
    })

    context("when the integer part is missing", () => {
      it("should use zero", () => {
        expect(Money.normalizeMoney(".5")).toBe("0.5")
        expect(Money.normalizeMoney(".")).toBe("0.")
      })
    })
  })

  context("formatMoney()", () => {
    context("when the input is empty", () => {
      it("should return an empty string", () => {
        expect(Money.formatMoney("")).toBe("")
      })
    })

    context("when the integer is short", () => {
      it("should not add a separator", () => {
        expect(Money.formatMoney("0")).toBe("0")
        expect(Money.formatMoney("999")).toBe("999")
      })
    })

    context("when the integer is long", () => {
      it("should add a comma every three digits", () => {
        expect(Money.formatMoney("1000")).toBe("1,000")
        expect(Money.formatMoney("1234567")).toBe("1,234,567")
      })
    })

    context("when the input has a fraction", () => {
      it("should keep the fraction as it is", () => {
        expect(Money.formatMoney("1234.5")).toBe("1,234.5")
        expect(Money.formatMoney("1000000.00")).toBe("1,000,000.00")
        expect(Money.formatMoney("0.5")).toBe("0.5")
      })
    })

    context("when the input ends with a dot", () => {
      it("should keep the trailing dot", () => {
        expect(Money.formatMoney("1234.")).toBe("1,234.")
      })
    })

    context("when decimals is zero or negative", () => {
      it("should drop the fraction", () => {
        expect(Money.formatMoney("1234.56", 0)).toBe("1,234")
        expect(Money.formatMoney("1234.", 0)).toBe("1,234")
        expect(Money.formatMoney("1234.56", -1)).toBe("1,234")
      })
    })
  })

  context("normalizeMoney() with formatMoney()", () => {
    context("when formatting what the user typed", () => {
      it("should turn messy input into a clean display value", () => {
        const normalized = Money.normalizeMoney("$1234567.891")

        expect(Money.formatMoney(normalized)).toBe("1,234,567.89")
      })

      it("should respect the currency decimals", () => {
        const idr = Money.findCurrency("IDR")!
        const normalized = Money.normalizeMoney("1500000.75", idr.decimals)

        expect(Money.formatMoney(normalized, idr.decimals)).toBe("1,500,000")
      })

      it("should keep the trailing dot while typing", () => {
        const normalized = Money.normalizeMoney("12,345.")

        expect(Money.formatMoney(normalized)).toBe("12,345.")
      })
    })
  })
})
