// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      linkActiveClass: "bg-secondary/90",
    },
  },
  imports: {
    dirs: ["composables/**"],
  },
  modules: ["@nuxt/test-utils/module"],
});
