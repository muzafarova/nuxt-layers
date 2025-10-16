// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt-layers/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configure development server port
  devServer: {
    port: 3002,
  },
});
