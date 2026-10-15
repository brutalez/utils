export namespace Num {
  /**
   * Keep a number between `min` and `max` (expects min <= max).
   *
   * @example
   * Num.clamp(15, 0, 10)   // 10
   * Num.clamp(-5, 0, 10)   // 0
   * Num.clamp(7, 0, 10)    // 7
   */
  export const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max)

  /**
   * True when `value` is between `min` and `max`, both ends included.
   *
   * @example
   * Num.inRange(5, 1, 10)    // true
   * Num.inRange(10, 1, 10)   // true
   * Num.inRange(11, 1, 10)   // false
   */
  export const inRange = (value: number, min: number, max: number): boolean =>
    value >= min && value <= max

  /**
   * Round to a number of decimals (default 0). Half values round away from zero,
   * and floating point cases like 1.005 behave as expected.
   *
   * @example
   * Num.roundTo(3.14159, 2)   // 3.14
   * Num.roundTo(1.005, 2)     // 1.01
   * Num.roundTo(1234.5678)    // 1235
   * Num.roundTo(-1.5)         // -2
   */
  export const roundTo = (value: number, decimals = 0): number => {
    const factor = 10 ** decimals
    return (
      (Math.sign(value) *
        Math.round((Math.abs(value) + Number.EPSILON) * factor)) /
        factor +
      0
    )
  }

  /**
   * Pad the integer part with leading zeros up to `digits` digits.
   *
   * @example
   * Num.formatDigits(7, 3)      // '007'
   * Num.formatDigits(1234, 3)   // '1234'
   * Num.formatDigits(-5, 3)     // '-005'
   */
  export const formatDigits = (value: number, digits: number): string => {
    const padded = String(Math.abs(Math.trunc(value))).padStart(digits, "0")
    return (value < 0 ? "-" : "") + padded
  }

  /**
   * Add up all numbers. An empty array gives 0.
   * Wrap with `Num.roundTo` if you need to hide float noise (0.1 + 0.2).
   *
   * @example
   * Num.sum([1, 2, 3])   // 6
   * Num.sum([])          // 0
   */
  export const sum = (values: readonly number[]): number =>
    values.reduce((total, n) => total + n, 0)
}
