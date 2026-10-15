import { describe, expect, it } from "vitest"
import { Obj } from "../src/object"

const context = describe

describe("Object", () => {
  context("getPath()", () => {
    context("when the path is a string", () => {
      it("should read a nested value", () => {
        expect(Obj.getPath({ a: { b: [{ c: 1 }] } }, "a.b[0].c")).toBe(1)
      })
    })

    context("when the path is an array", () => {
      it("should read a nested value", () => {
        expect(Obj.getPath({ a: { b: 1 } }, ["a", "b"])).toBe(1)
        expect(Obj.getPath({ a: [10, 20] }, ["a", 1])).toBe(20)
      })
    })

    context("when a step in the path is missing", () => {
      it("should return the fallback", () => {
        expect(Obj.getPath({}, "a.b.c", "n/a")).toBe("n/a")
      })

      it("should return undefined without a fallback", () => {
        expect(Obj.getPath({}, "a.b")).toBeUndefined()
      })
    })

    context("when the value is undefined", () => {
      it("should return the fallback", () => {
        expect(Obj.getPath({ a: undefined }, "a", "n/a")).toBe("n/a")
      })
    })

    context("when the source is null or undefined", () => {
      it("should return the fallback", () => {
        expect(Obj.getPath(null, "a", "x")).toBe("x")
        expect(Obj.getPath(undefined, "a", "x")).toBe("x")
      })
    })

    context("when the value is falsy but defined", () => {
      it("should return the value", () => {
        expect(Obj.getPath({ a: 0 }, "a", 5)).toBe(0)
        expect(Obj.getPath({ a: null }, "a", "x")).toBeNull()
      })
    })
  })

  context("pick()", () => {
    context("when the keys exist", () => {
      it("should keep only the listed keys", () => {
        expect(
          Obj.pick({ id: 1, name: "A", password: "x" }, ["id", "name"]),
        ).toEqual({ id: 1, name: "A" })
      })
    })

    context("when a key does not exist", () => {
      it("should skip it", () => {
        const source: { a?: number; b?: number } = { a: 1 }

        expect(Obj.pick(source, ["a", "b"])).toEqual({ a: 1 })
      })
    })

    context("when no keys are given", () => {
      it("should return an empty object", () => {
        expect(Obj.pick({ a: 1 }, [])).toEqual({})
      })
    })
  })

  context("omit()", () => {
    context("when the keys exist", () => {
      it("should remove the listed keys", () => {
        expect(
          Obj.omit({ id: 1, name: "A", password: "x" }, ["password"]),
        ).toEqual({ id: 1, name: "A" })
      })
    })

    context("when omitting keys", () => {
      it("should return a new object and keep the source unchanged", () => {
        const source = { id: 1, password: "x" }

        const result = Obj.omit(source, ["password"])

        expect(result).not.toBe(source)
        expect(source).toEqual({ id: 1, password: "x" })
      })
    })

    context("when no keys are given", () => {
      it("should return a copy", () => {
        expect(Obj.omit({ a: 1 }, [])).toEqual({ a: 1 })
      })
    })
  })

  context("isEqual()", () => {
    context("when given primitives", () => {
      it("should compare them by value", () => {
        expect(Obj.isEqual(1, 1)).toBe(true)
        expect(Obj.isEqual("a", "b")).toBe(false)
        expect(Obj.isEqual(1, "1")).toBe(false)
      })

      it("should treat NaN as equal to NaN", () => {
        expect(Obj.isEqual(NaN, NaN)).toBe(true)
      })
    })

    context("when given nested objects and arrays", () => {
      it("should compare them deeply", () => {
        expect(Obj.isEqual({ a: [1, 2] }, { a: [1, 2] })).toBe(true)
        expect(Obj.isEqual({ a: 1 }, { a: 2 })).toBe(false)
        expect(Obj.isEqual([1, 2], [1, 2, 3])).toBe(false)
      })

      it("should ignore key order", () => {
        expect(Obj.isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
      })
    })

    context("when given dates", () => {
      it("should compare them by time", () => {
        expect(Obj.isEqual(new Date(0), new Date(0))).toBe(true)
        expect(Obj.isEqual(new Date(0), new Date(1))).toBe(false)
        expect(Obj.isEqual(new Date(0), 0)).toBe(false)
      })
    })

    context("when a key is missing on one side", () => {
      it("should not treat it as equal to undefined", () => {
        expect(Obj.isEqual({ a: undefined }, { b: undefined })).toBe(false)
      })
    })

    context("when comparing different kinds of values", () => {
      it("should not treat an array as equal to an object", () => {
        expect(Obj.isEqual([], {})).toBe(false)
      })

      it("should handle null", () => {
        expect(Obj.isEqual(null, null)).toBe(true)
        expect(Obj.isEqual(null, {})).toBe(false)
      })
    })
  })

  context("diff()", () => {
    context("when a nested value changed", () => {
      it("should return the changed path with old and new value", () => {
        expect(Obj.diff({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })).toEqual({
          "b.c": { from: 2, to: 3 },
        })
      })
    })

    context("when a key was added", () => {
      it("should report the old value as undefined", () => {
        expect(Obj.diff({ a: 1 }, { a: 1, b: 2 })).toEqual({
          b: { from: undefined, to: 2 },
        })
      })
    })

    context("when a key was removed", () => {
      it("should report the new value as undefined", () => {
        expect(Obj.diff({ a: 1, b: 2 }, { a: 1 })).toEqual({
          b: { from: 2, to: undefined },
        })
      })
    })

    context("when nothing changed", () => {
      it("should return an empty object", () => {
        expect(
          Obj.diff({ a: 1, b: { c: [1] } }, { a: 1, b: { c: [1] } }),
        ).toEqual({})
      })
    })

    context("when an array changed", () => {
      it("should treat the array as a whole value", () => {
        expect(Obj.diff({ a: [1] }, { a: [2] })).toEqual({
          a: { from: [1], to: [2] },
        })
      })
    })

    context("when an object was replaced by a primitive", () => {
      it("should report the whole change on that key", () => {
        expect(Obj.diff({ a: { b: 1 } }, { a: 2 })).toEqual({
          a: { from: { b: 1 }, to: 2 },
        })
      })
    })

    context("when the values are dates", () => {
      it("should compare them by value", () => {
        expect(Obj.diff({ d: new Date(0) }, { d: new Date(0) })).toEqual({})
        expect(Obj.diff({ d: new Date(0) }, { d: new Date(1) })).toEqual({
          d: { from: new Date(0), to: new Date(1) },
        })
      })
    })

    context("when a prefix is given", () => {
      it("should prepend it to the paths", () => {
        expect(Obj.diff({ a: 1 }, { a: 2 }, "root")).toEqual({
          "root.a": { from: 1, to: 2 },
        })
      })
    })
  })
})
