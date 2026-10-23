// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Money {
  export interface Currency {
    /** unique id, same as the ISO 4217 code */
    id: string
    /** ISO 4217 code, e.g. "USD" */
    code: string
    symbol: string
    name: string
    flag: string
    /** number of fraction digits allowed */
    decimals: number
  }

  export const CURRENCIES: Currency[] = [
    {
      id: "USD",
      code: "USD",
      symbol: "$",
      name: "US Dollar",
      flag: "🇺🇸",
      decimals: 2,
    },
    {
      id: "EUR",
      code: "EUR",
      symbol: "€",
      name: "Euro",
      flag: "🇪🇺",
      decimals: 2,
    },
    {
      id: "GBP",
      code: "GBP",
      symbol: "£",
      name: "British Pound",
      flag: "🇬🇧",
      decimals: 2,
    },
    {
      id: "IDR",
      code: "IDR",
      symbol: "Rp",
      name: "Indonesian Rupiah",
      flag: "🇮🇩",
      decimals: 0,
    },
    {
      id: "JPY",
      code: "JPY",
      symbol: "¥",
      name: "Japanese Yen",
      flag: "🇯🇵",
      decimals: 0,
    },
    {
      id: "SGD",
      code: "SGD",
      symbol: "S$",
      name: "Singapore Dollar",
      flag: "🇸🇬",
      decimals: 2,
    },
    {
      id: "MYR",
      code: "MYR",
      symbol: "RM",
      name: "Malaysian Ringgit",
      flag: "🇲🇾",
      decimals: 2,
    },
    {
      id: "AUD",
      code: "AUD",
      symbol: "A$",
      name: "Australian Dollar",
      flag: "🇦🇺",
      decimals: 2,
    },
    {
      id: "CAD",
      code: "CAD",
      symbol: "C$",
      name: "Canadian Dollar",
      flag: "🇨🇦",
      decimals: 2,
    },
    {
      id: "CNY",
      code: "CNY",
      symbol: "¥",
      name: "Chinese Yuan",
      flag: "🇨🇳",
      decimals: 2,
    },
    {
      id: "INR",
      code: "INR",
      symbol: "₹",
      name: "Indian Rupee",
      flag: "🇮🇳",
      decimals: 2,
    },
    {
      id: "KRW",
      code: "KRW",
      symbol: "₩",
      name: "South Korean Won",
      flag: "🇰🇷",
      decimals: 0,
    },
  ]

  export type CurrencyCode = Currency

  export type Code = Currency["code"]

  export const findCurrency = (id: string): Currency | undefined =>
    CURRENCIES.find((currency) => currency.id === id)

  /**
   * Strip everything except digits and a single decimal point,
   * and cap the fraction digits. Returns a plain numeric string ("1234.5").
   */
  export const normalizeMoney = (raw: string, decimals = 2): string => {
    const cleaned = raw.replace(/[^\d.]/g, "")
    const [integer = "", ...rest] = cleaned.split(".")

    if (decimals <= 0 || rest.length === 0) {
      return integer.replace(/^0+(?=\d)/, "")
    }

    const fraction = rest.join("").slice(0, decimals)
    return `${integer.replace(/^0+(?=\d)/, "") || "0"}.${fraction}`
  }

  /**
   * Add thousand separators to a normalized string ("1234.5" -> "1,234.5").
   * Keeps a trailing dot so the user can keep typing decimals.
   */
  export const formatMoney = (normalized: string, decimals = 2): string => {
    if (!normalized) return ""

    const [integer, fraction] = normalized.split(".")
    const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    if (decimals <= 0) return grouped
    if (normalized.includes(".")) return `${grouped}.${fraction ?? ""}`
    return grouped
  }
}
