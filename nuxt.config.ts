// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  devServer: {
    port: 4011,
  },
});
