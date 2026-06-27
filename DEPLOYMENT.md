# Deployment

This project is currently configured for Netlify SSR via TanStack Start and Nitro.

## Netlify

The included `netlify.toml` sets the correct build command, publish directory,
Node version and Nitro preset.

Use these settings if Netlify asks for them manually:

```bash
Build command: npm run build
Publish directory: dist
Functions directory: leave blank
```

Do not publish `dist/client`, `.vercel/output`, `.output/public`, or the project
root. Publishing the wrong folder can produce a blank page because Netlify will
only serve static assets and will not use the generated TanStack Start server
function.

## Nginx static build note

This project was previously prepared for a fully prerendered static Nginx export,
but the active configuration now targets Netlify SSR. Re-enable a static preset
only if you are returning to an Nginx-only deployment with no server runtime.

## Build it

```bash
# Optional — bake live Google reviews into the HTML at build time.
# Without these, the site uses the bundled fallback reviews.
export GOOGLE_PLACE_ID="ChIJNX9J6nRZ344RZubXKNrTToE"
export GOOGLE_PLACES_API_KEY="your-key-here"

npm ci
npm run build
```

The `prebuild` step writes `src/data/google-reviews.json`, so review data is
baked into the build output rather than fetched by the browser at runtime.

## Output

For the old Nginx static setup, the deployable static site lived in:

```
.output/public/
```

Copy the contents of that folder into your Nginx web root (e.g. `/var/www/emt`).

## Nginx config snippet

```nginx
server {
    listen 80;
    server_name emtservices.uk;
    root /var/www/emt;
    index index.html;

    # Long-cache hashed assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Pretty URLs: try the file, then the .html, then 404
    location / {
        try_files $uri $uri.html $uri/index.html =404;
    }

    error_page 404 /404.html;
}
```

## Refreshing Google reviews

Re-run `npm run build` whenever you want fresh reviews — they are baked in
at build time, not fetched at request time. Schedule a nightly rebuild via
cron / CI if you want them kept current.

## Sitemap

`public/sitemap.xml` is a static file. Update it manually when you add new
routes.

## Notes

- Asset paths remain root-absolute (`/assets/...`) — required because the
  site has nested routes (`/guides/event-medical-cover-requirements`) where
  relative paths would 404.
- No Node.js runtime is required on the server; Nginx serves the files
  directly.
- The contact form posts to Web3Forms from the browser — no backend needed.
