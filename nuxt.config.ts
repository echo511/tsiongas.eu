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
      dir: "../../assets",
    },
  },
  image: {
    dir: "assets",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
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
