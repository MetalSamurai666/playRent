// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  devtools: { enabled: false },
  ssr: false,
  modules: [
    'nuxt-icon',
    '@element-plus/nuxt',
    '@pinia/nuxt'
  ],
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/lib/colors.scss" as *; @use "~/assets/styles/lib/mixins.scss" as *;'
        }
      }
    }
  }
})
