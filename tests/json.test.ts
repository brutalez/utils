import { describe, expect, it } from "vitest"
import { Json } from "../src/json"

const context = describe

describe("Json", () => {
  context("safeParse()", () => {
    context("when the text is valid JSON", () => {
      it("should return the parsed value", () => {
        expect(Json.safeParse('{"a":1}')).toEqual({ a: 1 })
      })

      it("should not use the fallback", () => {
        expect(Json.safeParse("[1,2]", [])).toEqual([1, 2])
      })

      it("should keep falsy parsed values", () => {
        expect(Json.safeParse("null", "fallback")).toBeNull()
        expect(Json.safeParse("0", 1)).toBe(0)
      })
    })

    context("when the text is invalid JSON", () => {
      it("should return undefined", () => {
        expect(Json.safeParse("not json")).toBeUndefined()
      })

      it("should return the fallback when one is given", () => {
        expect(Json.safeParse<number[]>("oops", [])).toEqual([])
      })
    })

    context("when the text is empty", () => {
      it("should return undefined", () => {
        expect(Json.safeParse("")).toBeUndefined()
      })
    })
  })

  context("safeStringify()", () => {
    context("when given a normal value", () => {
      it("should stringify it", () => {
        expect(Json.safeStringify({ a: 1 })).toBe('{"a":1}')
      })
    })

    context("when space is given", () => {
      it("should pretty print the output", () => {
        expect(Json.safeStringify({ a: 1 }, 2)).toBe('{\n  "a": 1\n}')
      })
    })

    context("when the value contains a BigInt", () => {
      it("should turn it into a string", () => {
        expect(Json.safeStringify({ big: 10n })).toBe('{"big":"10"}')
      })
    })

    context("when the value has a circular reference", () => {
      it("should replace it with [Circular]", () => {
        const loop: Record<string, unknown> = {}
        loop.self = loop

        expect(Json.safeStringify(loop)).toBe('{"self":"[Circular]"}')
      })

      it("should replace deeper circular references", () => {
        const parent: Record<string, unknown> = { name: "parent" }
        const child: Record<string, unknown> = { parent }
        parent.child = child

        expect(Json.safeStringify(parent)).toBe(
          '{"name":"parent","child":{"parent":"[Circular]"}}',
        )
      })
    })

    context("when the same object appears twice without a cycle", () => {
      it("should not mark it as circular", () => {
        const shared = { x: 1 }

        expect(Json.safeStringify({ a: shared, b: shared })).toBe(
          '{"a":{"x":1},"b":{"x":1}}',
        )
      })
    })

    context("when the value cannot be stringified", () => {
      it("should return the given fallback", () => {
        expect(Json.safeStringify(undefined, 0, "null")).toBe("null")
        expect(Json.safeStringify(() => 1, 0, "fn")).toBe("fn")
      })

      it("should return an empty string when no fallback is given", () => {
        expect(Json.safeStringify(undefined)).toBe("")
      })
    })

    context("when toJSON throws", () => {
      it("should return the fallback", () => {
        const value = {
          toJSON() {
            throw new Error("boom")
          },
        }

        expect(Json.safeStringify(value, 0, "failed")).toBe("failed")
      })
    })
  })
})
