# ronaldmusa.com

Real, working Next.js site — not a mockup. Built to the Apple-density spec:
system font stack, tight spacing, black/white/grey only, compact header and
identity block, immersive lightbox viewer for portfolio pieces.

## What's real vs. placeholder right now

**Real and working:**
- Every layout, spacing, and typography decision from the spec
- The actual R logo (your real file, copied into `/public`)
- Header, identity block, portfolio grid, lightbox viewer with keyboard
  nav (←/→/Esc), services line, contact, footer
- Instagram (`@ro9ld`) and Email links, both wired correctly
- Full SEO metadata, Open Graph tags, favicon from your real logo
- `prefers-reduced-motion` respected, keyboard focus states, semantic HTML

**Placeholder, needs your input before this goes live:**
- The 9 portfolio tiles are empty grey boxes labeled "Add your work" — I
  don't have your actual photos/videos in this session, and I'm not going
  to invent fake portfolio pieces to fill the grid
- No partners are shown yet (empty by design — add real ones, never fake logos)
- Analytics is wired to safely do nothing until you add a Plausible domain
- CMS (Sanity) and video hosting (Mux) aren't connected yet — see below

## Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Connecting your real content

Right now portfolio items live in `lib/portfolio-data.ts` as a plain
TypeScript array — this was deliberate, so you can see the site fully
working with real data before deciding whether to set up Sanity at all.

**Fastest path (no CMS):** replace the placeholder entries in
`lib/portfolio-data.ts` with real images (drop files in `/public` and
reference them), rebuild, done. Fine for a first launch.

**Recommended path (matches the original spec, easiest long-term):** connect
Sanity so you can add/reorder/hide work from a phone without touching code.
That's a larger step — happy to wire it up when you're ready to create the
Sanity project (it's free to start, sanity.io).

**Video:** the viewer is built to swap in Mux playback with minimal
changes — currently it just shows the placeholder box for both photo and
video items. Real video needs a Mux account.

**Analytics:** add your Plausible domain in `app/layout.tsx` (a script tag)
once you've created a Plausible account — `lib/analytics.ts` will start
firing events automatically, no other code changes needed.

## Deploying (you already own the domain)

1. Push this folder to a GitHub repo
2. Import it at vercel.com — it's a standard Next.js app, Vercel detects
   everything automatically
3. In Vercel's project settings, add `ronaldmusa.com` as a custom domain
4. Vercel will show you the DNS records to add (an A record for the apex
   domain, a CNAME for `www`) — add those wherever your domain's DNS is
   managed
5. HTTPS is automatic once DNS propagates

That's the whole path from here to live.
