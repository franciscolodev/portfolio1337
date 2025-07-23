// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://franciscolodev.com',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'Content-Security-Policy': "default-src 'self'; img-src *; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      }
    }
  }
});

