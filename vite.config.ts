import { defineConfig } from "vite";
import { sveltepress } from "@sveltepress/vite";
import { defaultTheme } from "@sveltepress/theme-default";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [{ title: "Docs", to: "/docs/" }],
        sidebar: {
          "/docs/": [
            {
              title: "Introduction",
              collapsible: true,
              items: [
                {
                  title: "What is sveltepress",
                  to: "/docs/introduction/",
                },
                {
                  title: "Quick start",
                  to: "/docs/quick-start/",
                },
              ],
            },
          ],
        },
        github: "https://github.com/commune-os",
        logo: "/hero.png",
      }),
      siteConfig: {
        title: "Commune",
        description:
          "A cozy community platform built for world-wide web togetherness.",
      },
    }),
  ],
});

export default config;
