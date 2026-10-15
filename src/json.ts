export namespace Json {
  /**
   * Parse JSON without throwing. Returns `fallback` (or undefined) on bad input.
   *
   * @example
   * Json.safeParse('{"a":1}')                  // { a: 1 }
   * Json.safeParse('not json')                 // undefined
   * Json.safeParse<number[]>('oops', [])       // []
   */
  export function safeParse<T = unknown>(text: string): T | undefined
  export function safeParse<T>(text: string, fallback: T): T
  export function safeParse<T>(text: string, fallback?: T): T | undefined {
    try {
      return JSON.parse(text) as T
    } catch {
      return fallback
    }
  }

  /**
   * Stringify without throwing. Circular references become "[Circular]",
   * BigInt becomes a string, and `fallback` is returned when nothing works.
   *
   * @example
   * Json.safeStringify({ a: 1 })              // '{"a":1}'
   * Json.safeStringify({ a: 1 }, 2)           // pretty printed, 2 spaces
   * Json.safeStringify({ big: 10n })          // '{"big":"10"}'
   * Json.safeStringify(undefined, 0, 'null')  // 'null'
   *
   * const loop: any = {}
   * loop.self = loop
   * Json.safeStringify(loop)                  // '{"self":"[Circular]"}'
   */
  export const safeStringify = (
    value: unknown,
    space = 0,
    fallback = "",
  ): string => {
    const ancestors: unknown[] = []
    try {
      const text = JSON.stringify(
        value,
        function (this: unknown, _key: string, val: unknown) {
          if (typeof val === "bigint") return val.toString()
          if (typeof val !== "object" || val === null) return val
          while (
            ancestors.length > 0 &&
            ancestors[ancestors.length - 1] !== this
          ) {
            ancestors.pop()
          }
          if (ancestors.includes(val)) return "[Circular]"
          ancestors.push(val)
          return val
        },
        space,
      )
      return text ?? fallback
    } catch {
      return fallback
    }
  }
}
