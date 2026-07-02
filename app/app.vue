<template>
  <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
    <TheNavbar />
    <TheHero />
    <TheAbout />
    <TheServices />
    <TheProjects />
    <TheContact />
    <TheScrollButton />
    <TheMobileDock />
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})

useSeoMeta({
  title: 'Kaung Htun Thant — Full Stack Developer',
  description: 'Kaung Htun Thant is a Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  ogTitle: 'Kaung Htun Thant — Full Stack Developer',
  ogDescription: 'Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  ogImage: 'https://www.khthant.com/portrait.jpg',
  ogImageAlt: 'Portrait of Kaung Htun Thant',
  ogUrl: 'https://www.khthant.com/',
  ogType: 'website',
  ogSiteName: 'Kaung Htun Thant',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kaung Htun Thant — Full Stack Developer',
  twitterDescription: 'Full Stack Developer with ~7 years building production web apps for startups in Myanmar and the UAE, specializing in the Laravel / Vue ecosystem and AWS infrastructure.',
  twitterImage: 'https://www.khthant.com/portrait.jpg',
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
        image: 'https://www.khthant.com/portrait.jpg',
      }),
    },
    // Google tag (gtag.js)
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-5E1JN7GFFB',
    },
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5E1JN7GFFB');`,
    },
  ],
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
