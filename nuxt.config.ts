import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js'
      },
      css: ['balm-ui/dist/balm-ui.css'],
      ssr: false // for NOW
})
