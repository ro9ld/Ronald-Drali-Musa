# ronaldmusa.com

Real, working Next.js site — not a mockup. Built to the Apple-density spec:
system font stack, tight spacing, black/white/grey only, compact header and
identity block, immersive lightbox viewer for portfolio pieces.

## What's real vs. placeholder right now

**Real and working:**
- Every layout, spacing, and typography decision from the spec
- The actual R logo (your real file, copied into `/public`)
- Header, identity block, responsive portfolio grid, immersive viewer with
  photo stacking, keyboard nav (←/→/Esc/Space), content section, Trusted
  by, Work with me, footer
- Instagram and Email links, both wired correctly
- Full SEO metadata, Open Graph tags, favicon from your real logo,
  `robots.txt`, `sitemap.xml`
- `prefers-reduced-motion` respected, keyboard focus states, semantic HTML
- **A real admin system at `/admin`** — Sanity Studio, embedded directly in
  this app. Manage portfolio items (video/photo, photo stacks, ordering,
  visibility, featured), Trusted-by logos, and site copy (the ongoing-content
  section, your email, your Instagram handle, the footer copyright name) —
  all without touching code
- The site automatically uses whatever's in Sanity once it's connected, and
  safely falls back to placeholder content until then — it never breaks in
  between

**Still placeholder / not yet connected:**
- No real portfolio media exists yet, so the grid shows labeled placeholder
  tiles until you upload real work through `/admin`
- No partners exist yet — Trusted-by stays hidden until you add at least one
- Video playback is a plain file upload in Sanity for now — adaptive Mux
  streaming is a follow-up step once you have a Mux account (see below)
- Analytics is wired to safely do nothing until you add a Plausible domain

## Connecting the admin system (Sanity) — do this first

This is the one step that unlocks `/admin`. Takes about 5 minutes:

1. Go to **sanity.io**, sign up (free tier is genuinely enough for this site)
2. Create a new project — name it anything, e.g. "Ronald Musa"
3. Once created, find your **Project ID** on the project's dashboard/settings
   page — it's a short string like `abc123xy`
4. In this project's folder, copy `.env.example` to `.env.local`
5. Paste your Project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID` in that file
6. Restart the dev server (or redeploy on Vercel with the same env var added
   in Project Settings → Environment Variables)
7. Visit `/admin` on your site — log in with the same account you used on
   sanity.io — you're in

From there: add portfolio items under "Work," partners under "Trusted by,"
and edit your ongoing-content wording and contact details under "Site
Settings." Changes appear on the live site within about a minute (it
re-checks Sanity every 60 seconds — see `revalidate` in `app/page.tsx`).

**Sanity gives you, out of the box:** authentication, a real database,
image hosting with focal-point cropping, draft/publish separation, and full
version history on every document — you can see and restore any previous
edit. That covers version history, undo-equivalent, and persistence without
any additional service.

## Connecting video (Mux) — optional, do this when ready

Right now video items store a plain uploaded file in Sanity, which works
but isn't adaptive-streamed. For real production video delivery:

1. Go to **mux.com**, sign up
2. Create an API access token (Settings → API Access Tokens)
3. Tell me once you've done this and I'll wire the Mux upload + playback
   integration into the `portfolioItem` schema and the viewer — it's a
   contained change, not a rebuild

## Connecting analytics (Plausible) — optional

1. Go to **plausible.io**, sign up, add `ronaldmusa.com` as a site
2. Add the Plausible script tag to `app/layout.tsx` (one `<script>` line)
3. `lib/analytics.ts` starts firing events automatically — no other changes
   needed

## Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the site, `http://localhost:3000/admin`
for the Studio (once Sanity is connected).

## Deploying (you already own the domain)

1. Push this folder to a GitHub repo
2. Import it at vercel.com — it's a standard Next.js app, Vercel detects
   everything automatically
3. **Add `NEXT_PUBLIC_SANITY_PROJECT_ID` in Vercel's Project Settings →
   Environment Variables** (same value as your `.env.local`) — without this,
   the deployed site falls back to placeholder content, same as locally
4. In Vercel's project settings, add `ronaldmusa.com` as a custom domain
5. Vercel will show you the DNS records to add (an A record for the apex
   domain, a CNAME for `www`) — add those wherever your domain's DNS is
   managed
6. HTTPS is automatic once DNS propagates

That's the whole path from here to live.
