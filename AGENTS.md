# Base44 sandbox notes

## What this project is

Static single-page portfolio (React 18 + Vite 7 + React Router 7). No backend, no
database, no external services, and no environment variables are read by the
application code — so the sandbox needs no credentials at all.

## Running it in the sandbox

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- One service (`web`) on the plain `node:22` runtime, running the **Vite dev server**
  straight from the bind-mounted clone, so edits are live. Nothing is prebuilt.
- Dependencies are installed on container startup (`npm ci`) into the `node_modules`
  named volume; the npm cache lives in the `npm_cache` volume to speed up restarts.
  Re-run `up -d` after changing `package.json` / `package-lock.json`.
- Host port **3000** maps to Vite's 5173 (the preview entry point).

## Quirks worth knowing

- **Host allowlist:** Vite 7 returns `403 Blocked request. This host … is not allowed.`
  for unknown Host headers. The proxy sends `Host: <port>-<sandbox id>.e2b.app`, and the
  platform supplies `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=.e2b.app`; compose passes it
  bare into the service, which Vite appends to `server.allowedHosts`. This is why no
  `vite.config.js` change was needed. Do not hardcode a resolved host anywhere.
- Note that `Host: 3000-e2b.app` (no sandbox-id segment) is *not* covered by the
  `.e2b.app` wildcard and legitimately 403s — that is expected, not a bug. Test with a
  host shaped like `3000-<anything>.e2b.app`.
- `BASE44_PREVIEW_MODE` is passed through to the service but the app does not branch on
  it; behaviour is identical with the flag unset.
- `/projects/:slug` and unknown paths are client-side routes; Vite's dev server serves
  the SPA fallback, so deep links work without extra rewrites. `vercel.json` only
  matters for Vercel deploys.

## Verifying it works

- `curl -sf http://localhost:3000/` → 200 with `/@vite/client` in the HTML (proves the
  live dev server, not a prebuilt bundle).
- `docker compose -f docker-compose.base44.yml ps` → `web` healthy (its healthcheck
  fetches the dev server root over HTTP).
- There is no test suite and no lint script in this repo; scripts are `dev`, `build`,
  `preview`. `npm run build` is the only cheap correctness check available.

## Deployment

Not configured for this repo beyond `vercel.json` (project rewrites) and the previous
public site on Vercel. The sandbox preview is a development environment, not a deploy.
