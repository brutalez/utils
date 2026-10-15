export namespace Arr {
  /**
   * Split into groups of `size`. The last group may be smaller.
   * Throws a RangeError when `size` is not a positive integer.
   *
   * @example
   * Arr.chunk([1, 2, 3, 4, 5], 2)   // [[1, 2], [3, 4], [5]]
   * Arr.chunk([], 3)                // []
   */
  export const chunk = <T>(array: readonly T[], size: number): T[][] => {
    if (!Number.isInteger(size) || size < 1) {
      throw new RangeError("Arr.chunk: size must be a positive integer")
    }
    const result: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  /**
   * Group items by the key returned from `key`.
   *
   * @example
   * Arr.groupBy([1, 2, 3, 4, 5], (n) => (n % 2 ? 'odd' : 'even'))
   * // { odd: [1, 3, 5], even: [2, 4] }
   *
   * Arr.groupBy([{ role: 'admin', name: 'A' }, { role: 'user', name: 'B' }], (u) => u.role)
   * // { admin: [{ role: 'admin', name: 'A' }], user: [{ role: 'user', name: 'B' }] }
   */
  export const groupBy = <T, K extends PropertyKey>(
    array: readonly T[],
    key: (item: T, index: number) => K,
  ): Record<K, T[]> => {
    // no prototype, so keys like "constructor" are safe
    const result = Object.create(null) as Record<K, T[]>
    array.forEach((item, index) => {
      const k = key(item, index)
      if (!result[k]) result[k] = []
      result[k].push(item)
    })
    return result
  }

  /**
   * Split into [matching, notMatching], keeping the original order.
   *
   * @example
   * Arr.partition([1, 2, 3, 4, 5], (n) => n > 2)   // [[3, 4, 5], [1, 2]]
   */
  export const partition = <T>(
    array: readonly T[],
    predicate: (item: T, index: number) => boolean,
  ): [T[], T[]] => {
    const pass: T[] = []
    const fail: T[] = []
    array.forEach((item, index) => {
      ;(predicate(item, index) ? pass : fail).push(item)
    })
    return [pass, fail]
  }

  /**
   * Remove duplicates by a derived key. The first item wins.
   *
   * @example
   * Arr.uniqueBy([{ id: 1, n: 'a' }, { id: 1, n: 'b' }, { id: 2, n: 'c' }], (u) => u.id)
   * // [{ id: 1, n: 'a' }, { id: 2, n: 'c' }]
   *
   * Arr.uniqueBy(['a', 'A', 'b'], (s) => s.toLowerCase())   // ['a', 'b']
   */
  export const uniqueBy = <T>(
    array: readonly T[],
    key: (item: T) => unknown,
  ): T[] => {
    const seen = new Set<unknown>()
    return array.filter((item) => {
      const k = key(item)
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
  }

  /**
   * Return a shuffled copy (Fisher-Yates). The original array is not changed.
   *
   * @example
   * Arr.shuffle([1, 2, 3, 4])   // e.g. [3, 1, 4, 2]
   */
  export const shuffle = <T>(array: readonly T[]): T[] => {
    const result = array.slice()
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = result[i] as T
      result[i] = result[j] as T
      result[j] = tmp
    }
    return result
  }
}
