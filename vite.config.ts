// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Prerender every page so the build outputs static HTML for Nginx.
// Inside the Lovable preview/build, the `nitro` preset override is ignored
// (Lovable forces Cloudflare), so the live preview keeps working unchanged.
// When YOU run `npm run build` on your own machine, the `static` preset
// produces a plain folder of HTML/CSS/JS suitable for Nginx.
const prerenderPages = [
  { path: "/" },
  { path: "/guides" },
  { path: "/guides/event-medical-cover-requirements" },
  { path: "/privacy" },
  { path: "/terms" },
  { path: "/cookies" },
  { path: "/accessibility" },
];

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: prerenderPages,
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "static",
  },
});
