// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/fonts.css'],
  routeRules: {
    // Static HTML for the single page; /api/* stays a runtime function.
    '/': { prerender: true },
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    // Images keep their filenames when swapped, so revalidate weekly instead of
    // immutable. Nitro route rules can't glob on extension, so list them.
    '/me-cv-grey-scale.webp': { headers: { 'cache-control': 'public, max-age=604800, stale-while-revalidate=86400' } },
    '/me-cv-grey-scale-224.webp': { headers: { 'cache-control': 'public, max-age=604800, stale-while-revalidate=86400' } },
    '/portrait.webp': { headers: { 'cache-control': 'public, max-age=604800, stale-while-revalidate=86400' } },
    '/favicons/**': { headers: { 'cache-control': 'public, max-age=604800' } },
  },
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
