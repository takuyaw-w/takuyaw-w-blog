import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import admonitions from "remark-github-beta-blockquote-admonitions";
import partytown from "@astrojs/partytown";

// https://astro.build/config
// eslint-disable-next-line no-undef
const { PUBLIC_SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
export default defineConfig({
  site: PUBLIC_SITE,
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon({
      include: {
        mdi: ["*"],
        twemoji: ["*"],
      },
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [admonitions],
    rehypePlugins: [],
  },
});
