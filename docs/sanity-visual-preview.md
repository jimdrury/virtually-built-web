# Sanity visual preview setup

Episode pages support Sanity Presentation Tool, draft mode, live preview, and visual editing. Complete these one-time steps before preview will work.

## 1. Create a Viewer API token

1. Open [Sanity Manage](https://www.sanity.io/manage) for project `5yq8ouej`
2. Go to **API** → **Tokens**
3. Create a token with **Viewer** permissions

## 2. Configure Next.js environment variables

Add to `virtually-built/.env.local` and your Vercel project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=5yq8ouej
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=<your-viewer-token>
```

`SANITY_API_READ_TOKEN` must stay server-only. Do not prefix it with `NEXT_PUBLIC_`.

Optional:

```env
NEXT_PUBLIC_SANITY_STUDIO_URL=https://virtually-built.sanity.studio
```

## 3. Add CORS origins

From the `studio-virtually-built` directory:

```bash
npx sanity cors add http://localhost:3333 --credentials
npx sanity cors add https://virtually-built.sanity.studio --credentials
npx sanity cors add https://<your-production-domain> --credentials
```

## 4. Configure hosted Studio preview URL

For preview inside deployed Studio (`https://virtually-built.sanity.studio`), set:

```env
SANITY_STUDIO_PREVIEW_ORIGIN=https://<your-production-domain>
```

Local development defaults to `http://localhost:3000`.

## 5. Run both apps locally

```bash
# Terminal 1 — Next.js
cd virtually-built && pnpm dev

# Terminal 2 — Studio
cd studio-virtually-built && pnpm dev
```

Open Studio at `http://localhost:3333`, switch to **Presentation**, and select an episode.

## Verify

- `/episodes` lists episodes from Sanity
- `/watch/[slug]` renders episode detail and show notes
- `/episodes/latest` redirects to the newest episode
- Presentation iframe loads the episode page
- Editing title or show notes updates the preview live
- Click-to-edit overlays jump to the matching Studio field

## Troubleshooting

### Images not loading (Next.js 16)

Next.js 16 blocks its image optimization proxy when upstream hostnames resolve to private IPs. Sanity images use `next-sanity/image`, which loads directly from `cdn.sanity.io` and bypasses that proxy. If you add new Sanity image usage, use the shared `SanityImage` component in `src/components/sanity-image.tsx`.
