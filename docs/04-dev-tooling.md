# Step 04 — Dev tooling: nodemon and morgan

## Goal

Restart the server automatically on every file change and log each HTTP request while developing.

## Commands

```bash
yarn add -D nodemon morgan
yarn dev
```

Make a request and watch the log line appear in the server terminal:

```bash
curl http://localhost:5000/
# server terminal: GET / 200 2.104 ms - 28
```

## What was done

- **`nodemon`** — watches the project files and restarts `node` when you save. Added the `"dev"` script: `nodemon ./server.js`.
- **`morgan`** — HTTP request logger middleware. The `'dev'` format prints short, colored lines: method, URL, status, time.
- **`server.js`** — morgan is loaded only when `NODE_ENV=development`:

  ```js
  if (process.env.NODE_ENV === 'development') {
  	const { default: morgan } = await import('morgan')
  	app.use(morgan('dev'))
  }
  ```

  - `await import('morgan')` is a **dynamic import**: the package is loaded only if this line runs. Because morgan is a dev dependency, a production install (`yarn install --production`) does not have it, and a top-level `import morgan from 'morgan'` would crash the server there.
  - Dynamic import returns a promise, which is why `main()` is an `async` function.
  - `{ default: morgan }` — the module's default export.

## Scripts so far

| Command | What it does |
|---------|--------------|
| `yarn dev` | start with auto-restart (development) |
| `yarn start` | start once (production) |
| `yarn format` | format all files with Prettier |
