# Step 06 — Prisma setup (version 4.8.1)

## Goal

Add Prisma, the ORM we use to talk to PostgreSQL, pinned to the same version as the video course.

## Commands

```bash
yarn add -D -E prisma@4.8.1
yarn add -E @prisma/client@4.8.1
yarn prisma init
```

Then edit `DATABASE_URL` in `.env` to match your local PostgreSQL (user, password, port, database name).

Create the database if it does not exist yet:

```bash
createdb -U postgres workout
```

## Why version 4.8.1?

The latest Prisma versions changed `prisma init` and the project layout (generated client in `app/generated/prisma`, AI-agent "skills" commands, a `postinstall` hook). That no longer matches the course. Pinning 4.8.1 keeps every command, file and error message identical to the video.

- `-E` (exact) saves `"4.8.1"` instead of `"^4.8.1"`, so yarn never upgrades it.
- `prisma` (the CLI) and `@prisma/client` (the library used in code) must **always be the same version**, otherwise `prisma generate` and the runtime can disagree.
- `prisma` is a dev dependency (only used from the terminal); `@prisma/client` is a normal dependency (imported by the server).

## What `prisma init` created

- **`prisma/schema.prisma`**
  - `generator client` — generates the JavaScript client into `node_modules/.prisma/client`.
  - `datasource db` — the database type (`postgresql`) and its connection string, read from the `DATABASE_URL` environment variable.
- **`DATABASE_URL`** in `.env` (we also added it to `.env.example`).

Connection string format:

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```

## Notes

- If you installed a newer Prisma by mistake: remove it with `yarn remove prisma @prisma/client`, delete the `prisma/` folder, any `app/generated/` folder and any `postinstall` script it added, then repeat the commands above.
- The schema has no models yet. Models and the first migration come in the next steps.
