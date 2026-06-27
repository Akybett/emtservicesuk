// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel build target. The Lovable preview/build ignores the `nitro` preset
// override (it forces Cloudflare internally), so the sandbox preview keeps
// working unchanged. When Vercel runs `npm run build`, the `vercel` preset
// produces the proper SSR output Vercel expects.
//
// Prerendering is intentionally disabled: on Vercel, TanStack Start runs as
// SSR functions, so static prerender isn't required, and enabling it caused
// the Lovable sandbox build (Cloudflare preset) to crash during the
// prerender step.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
