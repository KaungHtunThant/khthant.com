<template>
  <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 font-mono text-sm rounded bg-black text-white dark:bg-white dark:text-black"
    >Skip to main content</a>
    <TheNavbar />
    <main id="main">
      <TheHero />
      <TheAbout />
      <TheMetrics />
      <TheSkills />
      <TheServices />
      <TheProjects />
      <TheContact />
    </main>
    <TheScrollButton />
    <TheMobileDock />
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { initTheme } = useTheme()
const { loadAnalytics } = useAnalytics()

// Load gtag.js on the visitor's first interaction (with a timed fallback so
// bounce visits are still counted) to keep analytics out of the initial load.
onMounted(() => {
  initTheme()
  const events = ['pointerdown', 'scroll', 'keydown']
  events.forEach((e) => window.addEventListener(e, loadAnalytics, { once: true, passive: true }))
  setTimeout(loadAnalytics, 5000)
})

useSeoMeta({
  title: 'Kaung Htun Thant — Full Stack Developer',
  description: 'Kaung Htun Thant is a Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  ogTitle: 'Kaung Htun Thant — Full Stack Developer',
  ogDescription: 'Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  ogImage: 'https://www.khthant.com/portrait.webp',
  ogImageAlt: 'Portrait of Kaung Htun Thant',
  ogUrl: 'https://www.khthant.com/',
  ogType: 'website',
  ogSiteName: 'Kaung Htun Thant',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kaung Htun Thant — Full Stack Developer',
  twitterDescription: 'Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  twitterImage: 'https://www.khthant.com/portrait.webp',
  robots: 'index, follow',
  'google-site-verification': '0fe_tw-sla7ze7g0V8Bw_aGg0V1G7qtmitf7Onc5eYk',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.khthant.com/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kaung Htun Thant',
        jobTitle: 'Full Stack Developer',
        email: 'mailto:kaunghtunthant@gmail.com',
        telephone: '+971555762591',
        url: 'https://www.khthant.com/',
        image: 'https://www.khthant.com/portrait.webp',
      }),
    },
  ],
})
</script>

<style>
html {
  scroll-behavior: smooth;
  /* Always reserve the scrollbar's space so opening the modal (which sets
     overflow:hidden) frees no width and nothing reflows — page or fixed navbar. */
  scrollbar-gutter: stable;
}
</style>
