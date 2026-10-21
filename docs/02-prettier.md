# Step 02 — Code formatting with Prettier

## Goal

Format all code the same way automatically and keep imports sorted in a fixed order.

## Commands

```bash
yarn add -D prettier @trivago/prettier-plugin-sort-imports
yarn format        # runs: prettier --write .
```

## What was done

- **`prettier`** and **`@trivago/prettier-plugin-sort-imports`** installed as dev dependencies (`-D`), because they are only needed while writing code, not when the server runs.
- **`.prettierrc`** — formatting rules:
  - tabs, no semicolons, single quotes, no trailing commas
  - `"plugins"` — Prettier 3 does **not** load plugins automatically; the plugin must be listed here, otherwise `importOrder` is silently ignored.
  - `"importOrder"` — imports are grouped in this order, with an empty line between groups (`importOrderSeparation`):
    1. `<THIRD_PARTY_MODULES>` — packages from `node_modules` (`express`, `dotenv`, …)
    2. files whose path contains `/routes/`
    3. files whose path contains `/middleware/`
    4. parent-folder imports `../`
    5. same-folder imports `./`
- **`.prettierignore`** — files Prettier must not touch (lockfile, `node_modules`, and markdown docs, which we format by hand).
- **`"format"` script** in `package.json`.

## Notes

- `<THIRD_PARTY_MODULES>` must be written with the normal `<` character. A look-alike character (for example `‹`) makes the plugin treat it as a plain regex and the grouping breaks.
- In VS Code, install the *Prettier* extension and enable **Format on Save** so this runs on every save.
