import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  // Configure fonts for UI layer
  fonts: {
    families: [{ name: 'Inter', provider: 'google' }],
  },
  // Configure icons for UI layer
  icon: {
    serverBundle: 'local',
  },
  // Configure PrimeVue for UI layer with unstyled theme
  primevue: {
    components: {
      include: '*',
      prefix: 'Prime',
    },
    options: {
      theme: {
        // https://primevue.org/theming/styled/#definepreset
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{blue.50}',
              100: '{blue.100}',
              200: '{blue.200}',
              300: '{blue.300}',
              400: '{blue.400}',
              500: '{blue.500}',
              600: '{blue.600}',
              700: '{blue.700}',
              800: '{blue.800}',
              900: '{blue.900}',
              950: '{blue.950}',
            },
          },
        }),
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    },

    directives: {
      include: ['Tooltip'],
    },
  },
});
