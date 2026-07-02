// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/fonts.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/inter-latin.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/jetbrains-mono-latin.woff2', crossorigin: '' },
      ],
      script: [
        {
          // No-flash theme init: apply stored/system theme before paint.
          innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          tagPosition: 'head',
        },
      ],
    },
  },
})
