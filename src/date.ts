export namespace Dt {
  export type DateInput = Date | number | string
  export type DateRange = { start: DateInput; end: DateInput }

  const toDate = (value: DateInput): Date =>
    value instanceof Date ? value : new Date(value)

  /**
   * True when `date` is between `start` and `end`, both ends included.
   *
   * @example
   * Dt.isWithinRange('2026-10-15', '2026-10-01', '2026-10-31')   // true
   * Dt.isWithinRange(new Date(2026, 10, 1), new Date(2026, 9, 1), new Date(2026, 9, 31))   // false
   */
  export const isWithinRange = (
    date: DateInput,
    start: DateInput,
    end: DateInput,
  ): boolean => {
    const t = toDate(date).getTime()
    return t >= toDate(start).getTime() && t <= toDate(end).getTime()
  }

  /**
   * True when both dates fall on the same calendar day (local time).
   *
   * @example
   * Dt.isSameDay(new Date(2026, 9, 15, 8, 0), new Date(2026, 9, 15, 20, 30))   // true
   * Dt.isSameDay(new Date(2026, 9, 15), new Date(2026, 9, 16))                 // false
   */
  export const isSameDay = (a: DateInput, b: DateInput): boolean => {
    const x = toDate(a)
    const y = toDate(b)
    return (
      x.getFullYear() === y.getFullYear() &&
      x.getMonth() === y.getMonth() &&
      x.getDate() === y.getDate()
    )
  }

  /**
   * True when two ranges overlap. Ranges that only touch (one ends exactly
   * when the other starts) do NOT overlap, which suits bookings.
   *
   * @example
   * Dt.overlaps(
   *   { start: '2026-10-01', end: '2026-10-10' },
   *   { start: '2026-10-05', end: '2026-10-15' },
   * )   // true
   *
   * Dt.overlaps(
   *   { start: '2026-10-01', end: '2026-10-05' },
   *   { start: '2026-10-05', end: '2026-10-10' },
   * )   // false (only touching)
   */
  export const overlaps = (a: DateRange, b: DateRange): boolean =>
    toDate(a.start).getTime() < toDate(b.end).getTime() &&
    toDate(b.start).getTime() < toDate(a.end).getTime()

  /**
   * Return a new Date moved by `days` (negative goes back). Month ends and
   * daylight saving changes are handled, and the input is not mutated.
   *
   * @example
   * Dt.addDays(new Date(2026, 0, 31), 1)    // 2026-02-01
   * Dt.addDays(new Date(2026, 9, 15), -15)  // 2026-09-30
   */
  export const addDays = (date: DateInput, days: number): Date => {
    const result = new Date(toDate(date))
    result.setDate(result.getDate() + days)
    return result
  }
}
