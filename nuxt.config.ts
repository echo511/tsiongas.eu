// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
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
});
