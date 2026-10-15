import { describe, expect, it } from "vitest"
import { Str } from "../src/string"

const context = describe

describe("String", () => {
  context("clean()", () => {
    context("when the string has surrounding whitespace", () => {
      it("should trim leading and trailing whitespace", () => {
        expect(Str.clean("  hello  ")).toBe("hello")
      })
    })

    context("when the string has repeated whitespace", () => {
      it("should collapse repeated spaces into one", () => {
        expect(Str.clean("  hello   world  ")).toBe("hello world")
      })

      it("should collapse newlines and tabs into a single space", () => {
        expect(Str.clean("line1\n\n  line2\tline3")).toBe("line1 line2 line3")
      })
    })

    context("when the string is whitespace only", () => {
      it("should return an empty string", () => {
        expect(Str.clean(" \n\t ")).toBe("")
      })
    })
  })

  context("truncate()", () => {
    context("when the string fits within max", () => {
      it("should return the string unchanged", () => {
        expect(Str.truncate("Hi", 10)).toBe("Hi")
        expect(Str.truncate("Hello", 5)).toBe("Hello")
      })
    })

    context("when the string is longer than max", () => {
      it("should cut the string and include the default suffix in the length", () => {
        const result = Str.truncate("Long sentence here", 10)

        expect(result).toBe("Long sent…")
        expect(result).toHaveLength(10)
      })

      it("should trim trailing whitespace before adding the suffix", () => {
        expect(Str.truncate("Hello world", 7)).toBe("Hello…")
      })
    })

    context("when a custom suffix is given", () => {
      it("should use the custom suffix", () => {
        expect(Str.truncate("Hello world", 8, "...")).toBe("Hello...")
      })
    })

    context("when max is not larger than the suffix", () => {
      it("should return a shortened suffix", () => {
        expect(Str.truncate("Hello world", 1)).toBe("…")
        expect(Str.truncate("Hello world", 2, "...")).toBe("..")
      })

      it("should return an empty string when max is 0", () => {
        expect(Str.truncate("Hello world", 0)).toBe("")
      })
    })
  })

  context("capitalize()", () => {
    context("when given a lowercase string", () => {
      it("should uppercase the first letter", () => {
        expect(Str.capitalize("hello world")).toBe("Hello world")
      })
    })

    context("when lowerRest is not set", () => {
      it("should keep the rest as is", () => {
        expect(Str.capitalize("hELLO")).toBe("HELLO")
      })
    })

    context("when lowerRest is true", () => {
      it("should lowercase the rest", () => {
        expect(Str.capitalize("hELLO", true)).toBe("Hello")
      })
    })

    context("when given an empty string", () => {
      it("should return an empty string", () => {
        expect(Str.capitalize("")).toBe("")
      })
    })
  })

  context("reverse()", () => {
    context("when given a simple string", () => {
      it("should reverse the characters", () => {
        expect(Str.reverse("abc")).toBe("cba")
      })
    })

    context("when the string contains emoji", () => {
      it("should not break the emoji", () => {
        expect(Str.reverse("a😀b")).toBe("b😀a")
      })
    })

    context("when given an empty string", () => {
      it("should return an empty string", () => {
        expect(Str.reverse("")).toBe("")
      })
    })
  })

  context("toCamelCase()", () => {
    context("when words are separated by spaces", () => {
      it("should join them in camelCase", () => {
        expect(Str.toCamelCase("hello world")).toBe("helloWorld")
      })
    })

    context("when separators are mixed", () => {
      it("should handle snake_case and kebab-case together", () => {
        expect(Str.toCamelCase("user_first-name")).toBe("userFirstName")
      })
    })

    context("when given PascalCase", () => {
      it("should lowercase the first letter", () => {
        expect(Str.toCamelCase("HelloWorld")).toBe("helloWorld")
      })
    })

    context("when given an empty string", () => {
      it("should return an empty string", () => {
        expect(Str.toCamelCase("")).toBe("")
      })
    })
  })

  context("toPascalCase()", () => {
    context("when words are separated by spaces", () => {
      it("should join them in PascalCase", () => {
        expect(Str.toPascalCase("hello world")).toBe("HelloWorld")
      })
    })

    context("when given snake_case", () => {
      it("should convert to PascalCase", () => {
        expect(Str.toPascalCase("user_id")).toBe("UserId")
      })
    })

    context("when given camelCase", () => {
      it("should uppercase the first letter", () => {
        expect(Str.toPascalCase("helloWorld")).toBe("HelloWorld")
      })
    })
  })

  context("toSnakeCase()", () => {
    context("when given camelCase", () => {
      it("should split words with underscores", () => {
        expect(Str.toSnakeCase("helloWorld")).toBe("hello_world")
      })
    })

    context("when words are separated by spaces", () => {
      it("should lowercase and join with underscores", () => {
        expect(Str.toSnakeCase("Hello World")).toBe("hello_world")
      })
    })

    context("when given kebab-case", () => {
      it("should replace hyphens with underscores", () => {
        expect(Str.toSnakeCase("foo-bar-baz")).toBe("foo_bar_baz")
      })
    })
  })

  context("toKebabCase()", () => {
    context("when given camelCase", () => {
      it("should split words with hyphens", () => {
        expect(Str.toKebabCase("helloWorld")).toBe("hello-world")
      })
    })

    context("when given snake_case with capitals", () => {
      it("should lowercase and join with hyphens", () => {
        expect(Str.toKebabCase("Hello_World")).toBe("hello-world")
      })
    })

    context("when a digit is followed by an uppercase letter", () => {
      it("should split at that point", () => {
        expect(Str.toKebabCase("version2Beta")).toBe("version2-beta")
      })
    })
  })

  context("slugify()", () => {
    context("when the string has accents and punctuation", () => {
      it("should strip them", () => {
        expect(Str.slugify("Héllo Wörld!")).toBe("hello-world")
      })
    })

    context("when the string has surrounding whitespace", () => {
      it("should trim it", () => {
        expect(Str.slugify("  My First Post  ")).toBe("my-first-post")
      })
    })

    context("when separators are repeated", () => {
      it("should collapse them into one hyphen", () => {
        expect(Str.slugify("a --- b")).toBe("a-b")
      })
    })
  })

  context("isBlank()", () => {
    context("when given an empty string", () => {
      it("should return true", () => {
        expect(Str.isBlank("")).toBe(true)
      })
    })

    context("when given whitespace only", () => {
      it("should return true", () => {
        expect(Str.isBlank("  \n\t ")).toBe(true)
      })
    })

    context("when the string has content", () => {
      it("should return false", () => {
        expect(Str.isBlank(" a ")).toBe(false)
      })
    })
  })
})
