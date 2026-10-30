# Vercel deployment

The production website is hosted in Harshith's existing Vercel team, `harshith2810s-projects`, project `harshitha-dev`. The application source remains in this repository.

## Release

Use Node 22 and the committed npm lockfile. Vercel runs `npm ci --legacy-peer-deps` followed by `npm run build`. Both repositories contain an older pnpm lockfile; the explicit install command selects the npm lockfile.

```sh
vercel link --yes --project harshitha-dev --scope harshith2810s-projects
vercel deploy --prod --scope harshith2810s-projects
```

Run these commands from the repository root using an authenticated Vercel CLI. Production deployment is explicit. Confirm the CLI reports READY and check the public routes after release.

## Domains

- Stable production URL: https://harshitha-dev.vercel.app
- Intended custom domain: https://harshitha.dev
- `www.harshitha.dev` redirects to the apex domain with HTTP 308.
- DNS is being migrated from Azure to Vercel nameservers. Registrar delegation and domain verification must be complete before the custom domain is considered restored.
- Preserve existing mail and unrelated subdomain records when moving DNS.

## Git integration

Automatic Git deployment is not configured. The CLI production route above was verified on 30 October 2026. The Vercel GitHub integration does not currently have access to this repository. Git pushes alone do not release the site.
