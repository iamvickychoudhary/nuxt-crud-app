// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  
  {
  devtools: { enabled: false },
  plugins: ['~/plugins/vee-validate.ts'],
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  
})