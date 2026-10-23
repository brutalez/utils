import { describe, expect, it } from "vitest"
import { Phone } from "../src/phone"

const context = describe

describe("Phone", () => {
  context("COUNTRY_CODES", () => {
    context("when reading the list", () => {
      it("should have a unique id for every country", () => {
        const ids = Phone.COUNTRY_CODES.map((c) => c.id)

        expect(new Set(ids).size).toBe(ids.length)
      })

      it("should write every dial code as a plus and digits", () => {
        for (const country of Phone.COUNTRY_CODES) {
          expect(country.code).toMatch(/^\+\d+$/)
        }
      })

      it("should have a name and a flag for every country", () => {
        for (const country of Phone.COUNTRY_CODES) {
          expect(country.name).not.toBe("")
          expect(country.flag).not.toBe("")
        }
      })
    })

    context("when looking up a country", () => {
      it("should have Indonesia with +62", () => {
        expect(Phone.COUNTRY_CODES.find((c) => c.id === "ID")).toMatchObject({
          code: "+62",
          name: "Indonesia",
        })
      })
    })

    context("when countries share a dial code", () => {
      it("should allow the same code for different ids", () => {
        const us = Phone.COUNTRY_CODES.find((c) => c.id === "US")
        const ca = Phone.COUNTRY_CODES.find((c) => c.id === "CA")

        expect(us?.code).toBe("+1")
        expect(ca?.code).toBe("+1")
      })
    })
  })

  context("DIAL_CODES", () => {
    context("when reading the map", () => {
      it("should only have digits without a plus", () => {
        for (const dial of Object.values(Phone.DIAL_CODES)) {
          expect(dial).toMatch(/^\d+$/)
        }
      })
    })

    context("when looking up a country", () => {
      it("should return the dial code", () => {
        expect(Phone.DIAL_CODES.ID).toBe("62")
        expect(Phone.DIAL_CODES.GB).toBe("44")
        expect(Phone.DIAL_CODES.JP).toBe("81")
      })
    })

    context("when countries share a dial code", () => {
      it("should return the same value", () => {
        expect(Phone.DIAL_CODES.US).toBe("1")
        expect(Phone.DIAL_CODES.CA).toBe("1")
        expect(Phone.DIAL_CODES.GB).toBe(Phone.DIAL_CODES.GG)
      })
    })
  })

  context("groupDigits()", () => {
    context("when a pattern matches the length", () => {
      it("should split the digits into groups", () => {
        expect(Phone.groupDigits("5551234567", "US")).toBe("555 123 4567")
        expect(Phone.groupDigits("5551234", "US")).toBe("555 1234")
      })

      it("should use the pattern of the given country", () => {
        expect(Phone.groupDigits("81234567890", "ID")).toBe("812 3456 7890")
        expect(Phone.groupDigits("8123456789", "ID")).toBe("812 345 6789")
        expect(Phone.groupDigits("812345678", "ID")).toBe("812 345 678")
      })
    })

    context("when more than one pattern has the same length", () => {
      it("should use the first one", () => {
        expect(Phone.groupDigits("2079460958", "GB")).toBe("20 7946 0958")
      })
    })

    context("when a separator is given", () => {
      it("should join the groups with it", () => {
        expect(Phone.groupDigits("5551234567", "US", "-")).toBe("555-123-4567")
        expect(Phone.groupDigits("5551234567", "US", "")).toBe("5551234567")
      })
    })

    context("when the country has no patterns", () => {
      it("should return the digits as they are", () => {
        expect(Phone.groupDigits("123456", "AC")).toBe("123456")
      })
    })

    context("when no pattern matches the length", () => {
      it("should return the digits as they are", () => {
        expect(Phone.groupDigits("12345678", "US")).toBe("12345678")
        expect(Phone.groupDigits("1", "ID")).toBe("1")
      })
    })

    context("when the digits are empty", () => {
      it("should return an empty string", () => {
        expect(Phone.groupDigits("", "US")).toBe("")
      })
    })
  })

  context("normalizePhone()", () => {
    context("when the input has formatting", () => {
      it("should keep digits only", () => {
        expect(Phone.normalizePhone("(555) 123-4567")).toBe("5551234567")
        expect(Phone.normalizePhone("812 3456 7890")).toBe("81234567890")
      })
    })

    context("when the input starts with a zero", () => {
      it("should remove the leading zero", () => {
        expect(Phone.normalizePhone("0812-3456-7890")).toBe("81234567890")
      })

      it("should remove only one zero", () => {
        expect(Phone.normalizePhone("00812")).toBe("0812")
      })

      it("should return an empty string for a single zero", () => {
        expect(Phone.normalizePhone("0")).toBe("")
      })
    })

    context("when the input starts with a plus and a dial code", () => {
      it("should keep the dial code digits", () => {
        expect(Phone.normalizePhone("+62 812 3456 7890")).toBe("6281234567890")
      })
    })

    context("when the input has no digits", () => {
      it("should return an empty string", () => {
        expect(Phone.normalizePhone("")).toBe("")
        expect(Phone.normalizePhone("abc")).toBe("")
      })
    })
  })

  context("formatPhone()", () => {
    context("when no country is given", () => {
      it("should use Indonesia", () => {
        expect(Phone.formatPhone("81234567890")).toBe("812-3456-7890")
      })
    })

    context("when a country is given", () => {
      it("should group the digits with dashes", () => {
        expect(Phone.formatPhone("5551234567", "US")).toBe("555-123-4567")
        expect(Phone.formatPhone("2079460958", "GB")).toBe("20-7946-0958")
      })
    })

    context("when the input has formatting", () => {
      it("should ignore everything except digits", () => {
        expect(Phone.formatPhone("(555) 123-4567", "US")).toBe("555-123-4567")
        expect(Phone.formatPhone("812 3456 7890")).toBe("812-3456-7890")
      })
    })

    context("when no pattern matches the length", () => {
      it("should return the digits without dashes", () => {
        expect(Phone.formatPhone("081234567890")).toBe("081234567890")
        expect(Phone.formatPhone("123", "US")).toBe("123")
      })
    })

    context("when the input has no digits", () => {
      it("should return an empty string", () => {
        expect(Phone.formatPhone("")).toBe("")
        expect(Phone.formatPhone("abc")).toBe("")
      })
    })

    context("when used with normalizePhone()", () => {
      it("should format a local number with a leading zero", () => {
        expect(Phone.formatPhone(Phone.normalizePhone("0812-3456-7890"))).toBe(
          "812-3456-7890",
        )
      })
    })
  })

  context("mask()", () => {
    context("when using the defaults", () => {
      it("should show the last four digits for Indonesia", () => {
        expect(Phone.mask("81234567890")).toBe("***-****-7890")
      })
    })

    context("when a country is given", () => {
      it("should group the masked number with that country's pattern", () => {
        expect(Phone.mask("5551234567", "US")).toBe("***-***-4567")
      })
    })

    context("when the input has formatting", () => {
      it("should ignore everything except digits", () => {
        expect(Phone.mask("(555) 123-4567", "US")).toBe("***-***-4567")
      })
    })

    context("when visibleCount is given", () => {
      it("should show that many digits at the end", () => {
        expect(Phone.mask("5551234567", "US", 2)).toBe("***-***-**67")
        expect(Phone.mask("81234567890", "ID", 6)).toBe("***-**56-7890")
      })
    })

    context("when visibleCount is zero", () => {
      it("should hide every digit", () => {
        expect(Phone.mask("81234567890", "ID", 0)).toBe("***-****-****")
      })
    })

    context("when visibleCount is negative", () => {
      it("should hide every digit", () => {
        expect(Phone.mask("81234567890", "ID", -3)).toBe("***-****-****")
      })
    })

    context("when visibleCount is larger than the number", () => {
      it("should show every digit", () => {
        expect(Phone.mask("81234567890", "ID", 99)).toBe("812-3456-7890")
      })
    })

    context("when no pattern matches the length", () => {
      it("should return the masked digits without dashes", () => {
        expect(Phone.mask("081234567890")).toBe("********7890")
      })
    })

    context("when the input is empty", () => {
      it("should return an empty string", () => {
        expect(Phone.mask("")).toBe("")
      })
    })
  })
})
