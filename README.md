# Olive & Ember

A wood fired Mediterranean kitchen and bar in Chicago's West Loop. Built with Next.js 16, React 19, Tailwind CSS 4 and shadcn/ui.

## Pages

- Home
- Menu
- Our Story
- Reservations
- Private Events
- Contact

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site needs no environment variables and no database.

## Production build

```bash
npm run build
npm start
```

## Deploy

The repo is ready for both platforms and needs no environment variables on either one.

### Netlify

1. Push this repo to GitHub.
2. In Netlify, choose "Add new site" then "Import an existing project" and pick the repo.
3. Netlify reads `netlify.toml`, so the build command and publish directory are already set. Click deploy.

### Vercel

1. Push this repo to GitHub.
2. In Vercel, choose "Add New Project" and import the repo.
3. Leave every setting at its default and click deploy. No environment variables are needed.

## Notes

- `npm run build:standalone` and `npm run start:standalone` produce a self contained server build, handy if you host on your own box.
- The Prisma files come from the starter template. The restaurant site never touches the database, so you can ignore them.
