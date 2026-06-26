# Deploying to Nginx (Static Build)

This project is configured to build a fully prerendered static site for Nginx.

## Build it

```bash
# Optional — bake live Google reviews into the HTML at build time.
# Without these, the site uses the bundled fallback reviews.
export GOOGLE_PLACE_ID="ChIJNX9J6nRZ344RZubXKNrTToE"
export GOOGLE_PLACES_API_KEY="your-key-here"

npm ci
npm run build
```

The `prebuild` step writes `src/data/google-reviews.json` (baked into the
prerendered HTML). The `build` step runs `vite build` with Nitro's `static`
preset and prerenders every route.

## Output

After `npm run build` the deployable static site lives in:

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
