export namespace Dur {
  const SIZE = {
    d: 86_400_000,
    h: 3_600_000,
    m: 60_000,
    s: 1_000,
    ms: 1,
  } as const
  type Unit = keyof typeof SIZE
  const ORDER = Object.entries(SIZE) as [Unit, number][]

  /**
   * Format milliseconds as a short readable string. Use `maxUnits` to keep
   * only the biggest units. Returns '' for NaN or Infinity.
   *
   * @example
   * Dur.formatDuration(3725000)        // '1h 2m 5s'
   * Dur.formatDuration(3725000, 2)     // '1h 2m'
   * Dur.formatDuration(1500)           // '1s 500ms'
   * Dur.formatDuration(90061001)       // '1d 1h 1m 1s 1ms'
   * Dur.formatDuration(0)              // '0ms'
   * Dur.formatDuration(-60000)         // '-1m'
   */
  export const formatDuration = (ms: number, maxUnits = Infinity): string => {
    if (!Number.isFinite(ms)) return ""
    let rest = Math.round(Math.abs(ms))
    const parts: string[] = []
    for (const [label, size] of ORDER) {
      if (rest >= size) {
        const count = Math.floor(rest / size)
        rest -= count * size
        parts.push(`${count}${label}`)
      }
    }
    if (parts.length === 0) return "0ms"
    return (ms < 0 ? "-" : "") + parts.slice(0, maxUnits).join(" ")
  }

  /**
   * Parse text like "1h 30m" into milliseconds. Units: d, h, m, s, ms.
   * Decimals are allowed. Returns undefined when the text is not understood.
   *
   * @example
   * Dur.parseDuration('1h 30m')    // 5400000
   * Dur.parseDuration('1.5h')      // 5400000
   * Dur.parseDuration('90s')       // 90000
   * Dur.parseDuration('2d4h')      // 187200000
   * Dur.parseDuration('500ms')     // 500
   * Dur.parseDuration('abc')       // undefined
   */
  export const parseDuration = (text: string): number | undefined => {
    const input = text.trim().toLowerCase()
    if (!input) return undefined
    const pattern = /(\d+(?:\.\d+)?)\s*(ms|d|h|m|s)/g
    let total = 0
    for (const match of input.matchAll(pattern)) {
      total += parseFloat(match[1] as string) * SIZE[match[2] as Unit]
    }
    const leftover = input.replace(pattern, "").replace(/\s+/g, "")
    return leftover === "" ? Math.round(total) : undefined
  }
}
