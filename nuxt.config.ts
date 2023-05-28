// https://nuxt.com/docs/api/configuration/nuxt-config

import { NuxtConfig } from "nuxt/schema";

let config: NuxtConfig & { sitemap: {} } = {
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
  tailwindcss: {
    config: {
      content: [
        "./pages/**/*.tsx",
        "./components/**/*.tsx",
        "./layouts/**/*.tsx",
      ],
      theme: {
        screens: {
          'tablet': '640px',
          'desktop': '1280px',
        },
      }
    },
  },
  runtimeConfig: {
    ipx: {
      dir: "../../public",
    },
  },
  image: {
    dir: "public",
  },
  sitemap: {
    trailingSlash: true,
  },
  robots: {
    configPath: "robots.config.ts"
  },
}

if (process.env.SITE_URL) {
  config.sitemap.siteUrl = process.env.SITE_URL;
}

export default defineNuxtConfig(config);
