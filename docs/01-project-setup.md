# Step 01 — Project setup

## Goal

Create an empty Node.js project that uses ES modules (`import`/`export`) and is tracked by git.

## Commands

```bash
mkdir learn-workout-course
cd learn-workout-course
git init
yarn init -y
```

## What was done

- **`package.json`** created with `yarn init -y`, then edited by hand:
  - `"type": "module"` — lets us use `import`/`export` instead of `require()`. Without it, Node treats `.js` files as CommonJS.
  - `"main": "server.js"` — the entry file of the app (created in step 03).
- **`.gitignore`** — keeps secrets (`.env`) and installed packages (`node_modules/`) out of git.

## Notes

- We use **yarn** for the whole course. Do not mix it with `npm install`, otherwise you get both `yarn.lock` and `package-lock.json` and the two can disagree about versions.
- Never commit `.env`. Later we add `.env.example` so others know which variables are needed.

## Result

```
.
├── .gitignore
├── docs/
│   └── 01-project-setup.md
└── package.json
```
