// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    config: {
      content: [
        "./pages/**/*.tsx",
        "./components/**/*.tsx",
      ],
    },
  },
  runtimeConfig: {
    ipx: {
      dir: "../../assets",
    },
  },
  image: {
    dir: "assets",
  },
});
