# Astro auth with Supabase
Template done using Astro and Tailwind that uses Supabase as an auth provider.

To use this template you can just clone this repo and then:


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Folder structure
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.astro
│   │   └── icons/
│   │       └── SupabaseIcon.astro
│   │       └── AstroIcon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── middelware/
│   │   └── middelware.ts
│   └── pages/
│       └── index.astro
│       └── 404.astro
│       └── register.astro
│       └── signin.astro
│       └── signout.astro
│       └── api/auth/
│           └── register.ts
│           └── signin.ts
│           └── signout.ts
└── package.json
```

