import { describe, expect, it } from "vitest"
import * as lib from "../src"

const context = describe

describe("Index", () => {
  context("exports", () => {
    context("when importing the package entry", () => {
      it("should export every namespace", () => {
        expect(Object.keys(lib).sort()).toEqual(
          ["Arr", "Dt", "Dur", "Json", "Num", "Obj", "Str"].sort(),
        )
      })

      it("should expose working functions from each namespace", () => {
        expect(lib.Str.clean(" a  b ")).toBe("a b")
        expect(lib.Num.clamp(5, 0, 3)).toBe(3)
        expect(lib.Arr.chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])
        expect(
          lib.Dt.isSameDay(new Date(2026, 0, 1), new Date(2026, 0, 1)),
        ).toBe(true)
        expect(lib.Obj.pick({ a: 1, b: 2 }, ["a"])).toEqual({ a: 1 })
        expect(lib.Json.safeParse("{")).toBeUndefined()
        expect(lib.Dur.formatDuration(1000)).toBe("1s")
      })
    })
  })
})
