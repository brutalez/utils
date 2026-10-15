export namespace Obj {
  export type Change = { from: unknown; to: unknown }

  const isPlain = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date)

  /**
   * Safely read a nested value by path. Returns `fallback` when any step is
   * missing or the result is undefined.
   *
   * @example
   * Obj.getPath({ a: { b: [{ c: 1 }] } }, 'a.b[0].c')   // 1
   * Obj.getPath({ a: { b: 1 } }, ['a', 'b'])            // 1
   * Obj.getPath({}, 'a.b.c', 'n/a')                     // 'n/a'
   */
  export const getPath = <T = unknown>(
    source: unknown,
    path: string | readonly (string | number)[],
    fallback?: T,
  ): T | undefined => {
    const keys =
      typeof path === "string"
        ? path
            .replace(/\[(\w+)\]/g, ".$1")
            .split(".")
            .filter(Boolean)
        : path
    let current: unknown = source
    for (const key of keys) {
      if (current === null || current === undefined) return fallback
      current = (current as Record<PropertyKey, unknown>)[key]
    }
    return current === undefined ? fallback : (current as T)
  }

  /**
   * Keep only the listed keys.
   *
   * @example
   * Obj.pick({ id: 1, name: 'A', password: 'x' }, ['id', 'name'])   // { id: 1, name: 'A' }
   */
  export const pick = <T extends object, K extends keyof T>(
    source: T,
    keys: readonly K[],
  ): Pick<T, K> => {
    const result = {} as Pick<T, K>
    for (const key of keys) {
      if (key in source) result[key] = source[key]
    }
    return result
  }

  /**
   * Remove the listed keys. Returns a new object.
   *
   * @example
   * Obj.omit({ id: 1, name: 'A', password: 'x' }, ['password'])   // { id: 1, name: 'A' }
   */
  export const omit = <T extends object, K extends keyof T>(
    source: T,
    keys: readonly K[],
  ): Omit<T, K> => {
    const drop = new Set<PropertyKey>(keys)
    return Object.fromEntries(
      Object.entries(source).filter(([key]) => !drop.has(key)),
    ) as Omit<T, K>
  }

  /**
   * Deep equality for primitives, arrays, plain objects and Dates.
   * Does not handle circular references.
   *
   * @example
   * Obj.isEqual({ a: [1, 2] }, { a: [1, 2] })   // true
   * Obj.isEqual({ a: 1 }, { a: 2 })             // false
   * Obj.isEqual(NaN, NaN)                       // true
   */
  export const isEqual = (a: unknown, b: unknown): boolean => {
    if (a === b || (a !== a && b !== b)) return true
    if (a instanceof Date && b instanceof Date)
      return a.getTime() === b.getTime()
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((v, i) => isEqual(v, b[i]))
    }
    if (isPlain(a) && isPlain(b)) {
      const keysA = Object.keys(a)
      return (
        keysA.length === Object.keys(b).length &&
        keysA.every(
          (k) =>
            Object.prototype.hasOwnProperty.call(b, k) && isEqual(a[k], b[k]),
        )
      )
    }
    return false
  }

  /**
   * Deep difference between two objects. Returns changed paths with the old
   * and new value (undefined when the key was added or removed).
   *
   * @example
   * Obj.diff({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })
   * // { 'b.c': { from: 2, to: 3 } }
   *
   * Obj.diff({ a: 1 }, { a: 1, b: 2 })
   * // { b: { from: undefined, to: 2 } }
   */
  export const diff = (
    a: object,
    b: object,
    prefix = "",
  ): Record<string, Change> => {
    const left = a as Record<string, unknown>
    const right = b as Record<string, unknown>
    const result: Record<string, Change> = {}
    for (const key of new Set([...Object.keys(left), ...Object.keys(right)])) {
      const path = prefix ? `${prefix}.${key}` : key
      const from = left[key]
      const to = right[key]
      if (isPlain(from) && isPlain(to)) {
        Object.assign(result, diff(from, to, path))
      } else if (!isEqual(from, to)) {
        result[path] = { from, to }
      }
    }
    return result
  }
}
