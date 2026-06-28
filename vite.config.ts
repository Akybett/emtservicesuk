// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use Lovable's default Nitro preset (Cloudflare) so the published Lovable
// site renders correctly. If deploying to Netlify/Vercel elsewhere, override
// the preset in that environment's build config — not here.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
