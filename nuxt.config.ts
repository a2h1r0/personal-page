// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],

  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: true, 
    }
  }
})
