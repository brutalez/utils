export namespace Str {
  /**
   * Split any string (camelCase, snake_case, kebab-case, spaces) into words.
   * Internal helper, not exported.
   *
   * @example
   * words('helloWorld_foo-bar baz') // ['hello', 'World', 'foo', 'bar', 'baz']
   */
  const words = (value: string): string[] =>
    value
      .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, "$1 $2")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
      .split(" ")
      .filter(Boolean)

  /**
   * Trim and collapse repeated whitespace into a single space.
   *
   * @example
   * Str.clean('  hello   world  ')   // 'hello world'
   * Str.clean('line1\n\n  line2')    // 'line1 line2'
   */
  export const clean = (value: string): string =>
    value.replace(/\s+/g, " ").trim()

  /**
   * Cut to `max` characters (suffix included).
   *
   * @example
   * Str.truncate('Long sentence here', 10)   // 'Long sent…'
   * Str.truncate('Hello world', 8, '...')    // 'Hello...'
   * Str.truncate('Hi', 10)                   // 'Hi'
   */
  export const truncate = (
    value: string,
    max: number,
    suffix = "…",
  ): string => {
    if (value.length <= max) return value
    if (max <= suffix.length) return suffix.slice(0, Math.max(0, max))
    return value.slice(0, max - suffix.length).trimEnd() + suffix
  }

  /**
   * Uppercase the first letter. Pass `lowerRest` to lowercase the remainder.
   *
   * @example
   * Str.capitalize('hello world')     // 'Hello world'
   * Str.capitalize('hELLO', true)     // 'Hello'
   */
  export const capitalize = (value: string, lowerRest = false): string => {
    if (!value) return value
    const rest = value.slice(1)
    return (
      value.charAt(0).toUpperCase() + (lowerRest ? rest.toLowerCase() : rest)
    )
  }

  /**
   * Reverse by code point, so emoji are not broken.
   *
   * @example
   * Str.reverse('abc')      // 'cba'
   * Str.reverse('a😀b')     // 'b😀a'
   */
  export const reverse = (value: string): string =>
    Array.from(value).reverse().join("")

  /**
   * Convert to camelCase.
   *
   * @example
   * Str.toCamelCase('hello world')       // 'helloWorld'
   * Str.toCamelCase('user_first-name')   // 'userFirstName'
   * Str.toCamelCase('HelloWorld')        // 'helloWorld'
   */
  export const toCamelCase = (value: string): string =>
    words(value)
      .map((w, i) => (i === 0 ? w.toLowerCase() : capitalize(w, true)))
      .join("")

  /**
   * Convert to PascalCase.
   *
   * @example
   * Str.toPascalCase('hello world')   // 'HelloWorld'
   * Str.toPascalCase('user_id')       // 'UserId'
   */
  export const toPascalCase = (value: string): string =>
    words(value)
      .map((w) => capitalize(w, true))
      .join("")

  /**
   * Convert to snake_case.
   *
   * @example
   * Str.toSnakeCase('helloWorld')    // 'hello_world'
   * Str.toSnakeCase('Hello World')   // 'hello_world'
   */
  export const toSnakeCase = (value: string): string =>
    words(value)
      .map((w) => w.toLowerCase())
      .join("_")

  /**
   * Convert to kebab-case.
   *
   * @example
   * Str.toKebabCase('helloWorld')    // 'hello-world'
   * Str.toKebabCase('Hello_World')   // 'hello-world'
   */
  export const toKebabCase = (value: string): string =>
    words(value)
      .map((w) => w.toLowerCase())
      .join("-")

  /**
   * URL-friendly slug. Strips accents and punctuation.
   *
   * @example
   * Str.slugify('Héllo Wörld!')        // 'hello-world'
   * Str.slugify('  My First Post  ')   // 'my-first-post'
   */
  export const slugify = (value: string): string =>
    toKebabCase(value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

  /**
   * True for empty or whitespace-only strings.
   *
   * @example
   * Str.isBlank('')          // true
   * Str.isBlank('  \n\t ')   // true
   * Str.isBlank(' a ')       // false
   */
  export const isBlank = (value: string): boolean => value.trim().length === 0
}
