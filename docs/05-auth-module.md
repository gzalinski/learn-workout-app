# Step 05 — Auth module: routes and controller

## Goal

Introduce the folder structure used for every feature of the app, starting with an `auth` module that exposes `POST /api/auth/login`.

## Commands

```bash
mkdir -p app/auth
yarn dev
```

Test the new endpoint:

```bash
curl -X POST http://localhost:5000/api/auth/login
# {"message":"User authenticated successfully"}
```

## What was done

Each feature lives in its own folder under `app/` and is split in two files:

```
app/
└── auth/
    ├── auth.controller.js   ← what happens for a request
    └── auth.routes.js       ← which URL + HTTP method calls which controller
```

- **`auth.controller.js`** — `authUser` handles the request. For now it only returns a fixed message; real login logic comes later. The comment block above it documents the endpoint (`@desc`, `@route`, `@access`).
- **`auth.routes.js`** — creates an `express.Router()` and maps `POST /login` to `authUser`. `router.route('/login')` lets us chain more methods on the same path later (`.get(...)`, `.put(...)`).
- **`server.js`** — mounts the router under a prefix:

  ```js
  app.use('/api/auth', authRoutes)
  ```

  so `/login` inside the router becomes `/api/auth/login`.

## Notes

- With ES modules, relative imports **must include the `.js` extension**: `'./auth.controller.js'`, not `'./auth.controller'`.
- Prettier's import sorting now separates the third-party `express` import from the local `./auth.controller.js` import with an empty line.
