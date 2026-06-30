<template>
  <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
    <TheNavbar />
    <TheHero />
    <TheAbout />
    <TheServices />
    <TheProjects />
    <TheContact />
    <TheScrollButton />
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
