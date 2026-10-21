# Step 03 — Express server

## Goal

Start a minimal Express server that reads its settings from a `.env` file and answers on `GET /`.

## Commands

```bash
yarn add express dotenv colors
cp .env.example .env
yarn start
```

Test it from another terminal:

```bash
curl http://localhost:5000/
# {"message":"API is running"}
```

## What was done

- **Dependencies** (`yarn add`, no `-D`) — all three are needed when the server runs, so they go in `dependencies`, not `devDependencies`:
  - `express` — the web framework
  - `dotenv` — loads variables from `.env` into `process.env`
  - `colors` — adds `.red`, `.green`, `.bold` … to strings for colored console output
- **`server.js`**
  - `import 'dotenv/config'` — the ES-module way to load `.env`. The old `require('dotenv').config()` does **not** work with `"type": "module"` (`require is not defined`).
  - Checks that `PORT` exists and stops with a red error if it does not.
  - `express.json()` — parses JSON request bodies into `req.body`.
  - `GET /` — a simple health check route.
  - `app.listen(PORT, () => …)` — the second argument is a **callback** that runs once the server is listening. Passing `console.log(...)` directly would run it immediately and give `listen` `undefined`.
- **`.env.example`** — committed template of the variables; the real `.env` is git-ignored.
- **`"start"` script** in `package.json`.

## Notes

- Inside the template string we use the local `PORT` constant. Writing `${PORT}` without defining it throws `ReferenceError: PORT is not defined`.
