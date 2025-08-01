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
  }
});

