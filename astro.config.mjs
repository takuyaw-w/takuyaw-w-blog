import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import admonitions from "remark-github-beta-blockquote-admonitions";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
