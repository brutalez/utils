# @brutalez/toolkit

A small, typed, zero-dependency collection of everyday TypeScript utilities, grouped into short namespaces that are easy to discover and easy to import.

```ts
import { Str, Arr, Dur } from "@brutalez/toolkit"

Str.slugify("Héllo Wörld!") // "hello-world"
Arr.chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
Dur.formatDuration(3725000) // "1h 2m 5s"
```

## Features

- One namespace per topic: type `Str.` and your editor lists every string helper
- Seven modules covering strings, numbers, arrays, dates, objects, JSON, and durations
- Fully typed, with generics that keep your item and key types intact
- Safe helpers that return a fallback instead of throwing
- JSDoc with a runnable `@example` on every function, visible on hover in your editor
- No dependencies and no code generation
- Import everything from the root, or a single module through a subpath

## Installation

```bash
pnpm add @brutalez/toolkit
```

The library is written in TypeScript and targets modern runtimes (ES2020 or later).

## Getting Started

### Import a single module

```ts
import { Str } from "@brutalez/toolkit/string"

Str.clean("  hello   world  ") // "hello world"
Str.toCamelCase("user_first-name") // "userFirstName"
Str.truncate("Long sentence here", 10) // "Long sent…"
```

### Import from the root

```ts
import { Str, Num, Arr, Dt, Obj, Json, Dur } from "@brutalez/toolkit"
```

### Use several modules together

```ts
import { Arr, Num, Obj } from "@brutalez/toolkit"

const orders = [
  { id: 1, status: "paid", total: 120.5 },
  { id: 2, status: "pending", total: 80 },
  { id: 3, status: "paid", total: 45.25 },
]

const byStatus = Arr.groupBy(orders, (order) => order.status)
const revenue = Num.roundTo(
  Num.sum(byStatus.paid.map((order) => order.total)),
  2,
)
// 165.75

const publicOrders = orders.map((order) => Obj.omit(order, ["total"]))
```

## Modules

| Namespace | Import path                  | Functions                                                                                                                       |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Str`     | `@brutalez/toolkit/string`   | `clean`, `truncate`, `capitalize`, `reverse`, `toCamelCase`, `toPascalCase`, `toSnakeCase`, `toKebabCase`, `slugify`, `isBlank` |
| `Num`     | `@brutalez/toolkit/number`   | `clamp`, `inRange`, `roundTo`, `formatDigits`, `sum`                                                                            |
| `Arr`     | `@brutalez/toolkit/array`    | `chunk`, `groupBy`, `partition`, `uniqueBy`, `shuffle`                                                                          |
| `Dt`      | `@brutalez/toolkit/date`     | `isWithinRange`, `isSameDay`, `overlaps`, `addDays`                                                                             |
| `Obj`     | `@brutalez/toolkit/object`   | `getPath`, `pick`, `omit`, `isEqual`, `diff`                                                                                    |
| `Json`    | `@brutalez/toolkit/json`     | `safeParse`, `safeStringify`                                                                                                    |
| `Dur`     | `@brutalez/toolkit/duration` | `formatDuration`, `parseDuration`                                                                                               |

## API Reference

### `Str`

| Function                        | Description                                               | Example                                    |
| ------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| `clean(value)`                  | Trims and collapses repeated whitespace                   | `"  a   b "` → `"a b"`                     |
| `truncate(value, max, suffix?)` | Cuts to `max` characters, suffix included (default `"…"`) | `("Hello world", 8, "...")` → `"Hello..."` |
| `capitalize(value, lowerRest?)` | Uppercases the first letter                               | `"hello"` → `"Hello"`                      |
| `reverse(value)`                | Reverses by code point, so emoji stay intact              | `"a😀b"` → `"b😀a"`                        |
| `toCamelCase(value)`            | Converts to camelCase                                     | `"hello world"` → `"helloWorld"`           |
| `toPascalCase(value)`           | Converts to PascalCase                                    | `"user_id"` → `"UserId"`                   |
| `toSnakeCase(value)`            | Converts to snake_case                                    | `"helloWorld"` → `"hello_world"`           |
| `toKebabCase(value)`            | Converts to kebab-case                                    | `"helloWorld"` → `"hello-world"`           |
| `slugify(value)`                | URL-friendly slug, accents and punctuation removed        | `"Héllo Wörld!"` → `"hello-world"`         |
| `isBlank(value)`                | `true` for empty or whitespace-only strings               | `"  \n"` → `true`                          |

The case converters accept any input style (`helloWorld`, `hello_world`, `hello-world`, `hello world`).

### `Num`

| Function                      | Description                                      | Example                |
| ----------------------------- | ------------------------------------------------ | ---------------------- |
| `clamp(value, min, max)`      | Keeps a number between `min` and `max`           | `(15, 0, 10)` → `10`   |
| `inRange(value, min, max)`    | `true` when within the range, both ends included | `(10, 1, 10)` → `true` |
| `roundTo(value, decimals?)`   | Rounds to a number of decimals (default `0`)     | `(1.005, 2)` → `1.01`  |
| `formatDigits(value, digits)` | Pads the integer part with leading zeros         | `(7, 3)` → `"007"`     |
| `sum(values)`                 | Adds up all numbers, `0` for an empty array      | `([1, 2, 3])` → `6`    |

`roundTo` rounds halves away from zero and handles floating point cases such as `1.005`. Wrap `sum` with `roundTo` when you need to hide float noise like `0.1 + 0.2`.

### `Arr`

| Function                      | Description                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| `chunk(array, size)`          | Splits into groups of `size`. Throws a `RangeError` if `size` is not a positive integer |
| `groupBy(array, key)`         | Groups items by the key returned from `key(item, index)`                                |
| `partition(array, predicate)` | Returns `[matching, notMatching]`, keeping the original order                           |
| `uniqueBy(array, key)`        | Removes duplicates by a derived key, first item wins                                    |
| `shuffle(array)`              | Returns a shuffled copy (Fisher-Yates), original is untouched                           |

```ts
Arr.partition([1, 2, 3, 4, 5], (n) => n > 2) // [[3, 4, 5], [1, 2]]
Arr.uniqueBy(["a", "A", "b"], (s) => s.toLowerCase()) // ["a", "b"]
```

None of the array helpers mutate their input.

### `Dt`

Dates can be passed as a `Date`, a timestamp, or a date string (`Dt.DateInput`).

| Function                          | Description                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| `isWithinRange(date, start, end)` | `true` when `date` is between `start` and `end`, both included |
| `isSameDay(a, b)`                 | `true` when both fall on the same calendar day (local time)    |
| `overlaps(a, b)`                  | `true` when two `{ start, end }` ranges overlap                |
| `addDays(date, days)`             | Returns a new `Date` moved by `days`, negative goes back       |

```ts
Dt.overlaps(
  { start: "2026-10-01", end: "2026-10-10" },
  { start: "2026-10-05", end: "2026-10-15" },
) // true

Dt.overlaps(
  { start: "2026-10-01", end: "2026-10-05" },
  { start: "2026-10-05", end: "2026-10-10" },
) // false, ranges that only touch do not overlap

Dt.addDays(new Date(2026, 0, 31), 1) // 2026-02-01
```

`addDays` handles month ends and daylight saving changes, and never mutates the input date.

### `Obj`

| Function                           | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| `getPath(source, path, fallback?)` | Safely reads a nested value using `"a.b[0].c"` or `["a", "b"]`     |
| `pick(source, keys)`               | Keeps only the listed keys                                         |
| `omit(source, keys)`               | Removes the listed keys, returns a new object                      |
| `isEqual(a, b)`                    | Deep equality for primitives, arrays, plain objects, and dates     |
| `diff(a, b)`                       | Deep difference, returns changed paths with `from` and `to` values |

```ts
Obj.getPath({ a: { b: [{ c: 1 }] } }, "a.b[0].c") // 1
Obj.getPath({}, "a.b.c", "n/a") // "n/a"

Obj.pick({ id: 1, name: "A", password: "x" }, ["id", "name"]) // { id: 1, name: "A" }
Obj.omit({ id: 1, name: "A", password: "x" }, ["password"]) // { id: 1, name: "A" }

Obj.diff({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })
// { "b.c": { from: 2, to: 3 } }
```

`isEqual` does not handle circular references. `pick` and `omit` keep full type information, so the result type only contains the keys you asked for.

### `Json`

| Function                                  | Description                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| `safeParse(text, fallback?)`              | Parses JSON without throwing, returns `fallback` (or `undefined`) on bad input |
| `safeStringify(value, space?, fallback?)` | Stringifies without throwing, returns `fallback` (default `""`) on failure     |

```ts
Json.safeParse('{"a":1}') // { a: 1 }
Json.safeParse("not json") // undefined
Json.safeParse<number[]>("oops", []) // []

Json.safeStringify({ big: 10n }) // '{"big":"10"}'

const loop: any = {}
loop.self = loop
Json.safeStringify(loop) // '{"self":"[Circular]"}'
```

`safeStringify` replaces circular references with `"[Circular]"` and converts `BigInt` values to strings.

### `Dur`

| Function                        | Description                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------- |
| `formatDuration(ms, maxUnits?)` | Formats milliseconds as a short string, returns `""` for `NaN` or `Infinity` |
| `parseDuration(text)`           | Parses text like `"1h 30m"` into milliseconds, `undefined` if not understood |

```ts
Dur.formatDuration(3725000) // "1h 2m 5s"
Dur.formatDuration(3725000, 2) // "1h 2m"
Dur.formatDuration(1500) // "1s 500ms"
Dur.formatDuration(-60000) // "-1m"

Dur.parseDuration("1h 30m") // 5400000
Dur.parseDuration("1.5h") // 5400000
Dur.parseDuration("2d4h") // 187200000
Dur.parseDuration("abc") // undefined
```

Supported units are `d`, `h`, `m`, `s`, and `ms`. Decimals are allowed when parsing.

## Why Namespaces

Each module is exposed as a namespace instead of a long list of loose function names.

- `Str.clean()` and `Arr.chunk()` read clearly and avoid name clashes between modules
- Autocomplete shows every helper for a topic as soon as you type the namespace
- The short names (`Str`, `Num`, `Arr`, `Dt`, `Obj`) do not shadow the JavaScript globals `String`, `Number`, `Array`, `Date`, and `Object`

## TypeScript Notes

The modules are built with TypeScript `namespace` declarations. Consumers of the published package are not affected, because the package ships compiled JavaScript with type declarations.

If you copy a source file directly into a project, make sure your tooling supports `namespace`. It does not work with `erasableSyntaxOnly`, with Node's built-in type stripping, or with Babel unless the namespace plugin is enabled.

## Development

Clone the repository and install dependencies.

```bash
git clone https://github.com/brutalez/toolkit.git
cd toolkit
pnpm install
```

Run the available scripts:

```bash
pnpm run build
pnpm test
pnpm run test:watch
pnpm run typecheck
pnpm run lint
pnpm run format:check
```

## Contributing

Contributions, bug reports, and suggestions are welcome. Please open an issue or pull request in the repository.

When adding a function, include a JSDoc comment with an `@example`, and add a test that covers the documented examples. Before submitting a pull request, run the tests and TypeScript checks.

[Alim Naufal](https://alimnfl.com)
