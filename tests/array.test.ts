import { afterEach, describe, expect, it, vi } from "vitest"
import { Arr } from "../src/array"

const context = describe

describe("Array", () => {
  context("chunk()", () => {
    context("when the array divides evenly", () => {
      it("should split into groups of the given size", () => {
        expect(Arr.chunk([1, 2, 3, 4], 2)).toEqual([
          [1, 2],
          [3, 4],
        ])
      })
    })

    context("when the array does not divide evenly", () => {
      it("should keep a smaller last group", () => {
        expect(Arr.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
      })
    })

    context("when size is larger than the array", () => {
      it("should return one group", () => {
        expect(Arr.chunk([1, 2], 5)).toEqual([[1, 2]])
      })
    })

    context("when the array is empty", () => {
      it("should return an empty array", () => {
        expect(Arr.chunk([], 3)).toEqual([])
      })
    })

    context("when size is not a positive integer", () => {
      it("should throw a RangeError", () => {
        expect(() => Arr.chunk([1], 0)).toThrow(RangeError)
        expect(() => Arr.chunk([1], -1)).toThrow(RangeError)
        expect(() => Arr.chunk([1], 1.5)).toThrow(RangeError)
        expect(() => Arr.chunk([1], NaN)).toThrow(RangeError)
      })
    })

    context("when chunking an array", () => {
      it("should not change the original array", () => {
        const input = [1, 2, 3]

        Arr.chunk(input, 2)

        expect(input).toEqual([1, 2, 3])
      })
    })
  })

  context("groupBy()", () => {
    context("when grouping by a computed key", () => {
      it("should group items by the returned key", () => {
        const result = Arr.groupBy([1, 2, 3, 4, 5], (n) =>
          n % 2 ? "odd" : "even",
        )

        expect({ ...result }).toEqual({ odd: [1, 3, 5], even: [2, 4] })
      })
    })

    context("when grouping objects by a property", () => {
      it("should group the objects under each value", () => {
        const admin = { role: "admin", name: "A" }
        const user = { role: "user", name: "B" }

        const result = Arr.groupBy([admin, user], (u) => u.role)

        expect({ ...result }).toEqual({ admin: [admin], user: [user] })
      })
    })

    context("when the key function uses the index", () => {
      it("should pass the index as the second argument", () => {
        const result = Arr.groupBy(["a", "b", "c", "d"], (_, i) => i % 2)

        expect({ ...result }).toEqual({ 0: ["a", "c"], 1: ["b", "d"] })
      })
    })

    context("when the key is a built-in property name", () => {
      it("should treat it as a normal key", () => {
        const result = Arr.groupBy(["a", "b"], () => "constructor")

        expect(result["constructor"]).toEqual(["a", "b"])
      })
    })

    context("when the array is empty", () => {
      it("should return an empty object", () => {
        expect({ ...Arr.groupBy([], () => "x") }).toEqual({})
      })
    })
  })

  context("partition()", () => {
    context("when some items match", () => {
      it("should split into matching and not matching", () => {
        expect(Arr.partition([1, 2, 3, 4, 5], (n) => n > 2)).toEqual([
          [3, 4, 5],
          [1, 2],
        ])
      })

      it("should keep the original order", () => {
        const [even, odd] = Arr.partition([5, 2, 3, 4, 1], (n) => n % 2 === 0)

        expect(even).toEqual([2, 4])
        expect(odd).toEqual([5, 3, 1])
      })
    })

    context("when the predicate uses the index", () => {
      it("should pass the index as the second argument", () => {
        const [first, rest] = Arr.partition(["a", "b", "c"], (_, i) => i === 0)

        expect(first).toEqual(["a"])
        expect(rest).toEqual(["b", "c"])
      })
    })

    context("when the array is empty", () => {
      it("should return two empty arrays", () => {
        expect(Arr.partition([], () => true)).toEqual([[], []])
      })
    })
  })

  context("uniqueBy()", () => {
    context("when items share a derived key", () => {
      it("should keep the first item", () => {
        expect(
          Arr.uniqueBy(
            [
              { id: 1, n: "a" },
              { id: 1, n: "b" },
              { id: 2, n: "c" },
            ],
            (u) => u.id,
          ),
        ).toEqual([
          { id: 1, n: "a" },
          { id: 2, n: "c" },
        ])
      })

      it("should work with a transformed key", () => {
        expect(Arr.uniqueBy(["a", "A", "b"], (s) => s.toLowerCase())).toEqual([
          "a",
          "b",
        ])
      })
    })

    context("when the array is empty", () => {
      it("should return an empty array", () => {
        expect(Arr.uniqueBy([], (x) => x)).toEqual([])
      })
    })

    context("when removing duplicates", () => {
      it("should not change the original array", () => {
        const input = [1, 1, 2]

        Arr.uniqueBy(input, (n) => n)

        expect(input).toEqual([1, 1, 2])
      })
    })
  })

  context("shuffle()", () => {
    afterEach(() => {
      vi.restoreAllMocks()
    })

    context("when shuffling an array", () => {
      it("should return a new array with the same items", () => {
        const input = [1, 2, 3, 4, 5]

        const result = Arr.shuffle(input)

        expect(result).not.toBe(input)
        expect([...result].sort()).toEqual([1, 2, 3, 4, 5])
      })

      it("should not change the original array", () => {
        const input = [1, 2, 3, 4]

        Arr.shuffle(input)

        expect(input).toEqual([1, 2, 3, 4])
      })
    })

    context("when Math.random is fixed", () => {
      it("should follow Fisher-Yates", () => {
        vi.spyOn(Math, "random").mockReturnValue(0)

        expect(Arr.shuffle([1, 2, 3, 4])).toEqual([2, 3, 4, 1])
      })
    })

    context("when the array has fewer than two items", () => {
      it("should return the same items", () => {
        expect(Arr.shuffle([])).toEqual([])
        expect(Arr.shuffle([1])).toEqual([1])
      })
    })
  })
})
