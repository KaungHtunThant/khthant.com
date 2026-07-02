<template>
  <section id="hero" aria-labelledby="hero-title" class="pt-20 min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div class="container mx-auto px-6 text-center">
      <BaseImage
        src="/me-cv-grey-scale.webp"
        srcset="/me-cv-grey-scale-224.webp 224w, /me-cv-grey-scale.webp 448w"
        sizes="224px"
        alt="Portrait of Kaung Htun Thant, Full Stack Developer"
        icon="user"
        loading="eager"
        fetchpriority="high"
        class="w-56 h-56 rounded-full mx-auto mb-8 border-2 border-black dark:border-white"
        img-class="object-cover object-top"
      />
      <p class="font-mono text-sm text-gray-500 dark:text-gray-400 mb-4">$ whoami</p>
      <h1 id="hero-title" class="text-[clamp(1.6rem,5.5vw,4.5rem)] font-bold mb-4 tracking-tight whitespace-nowrap">
        Kaung Htun Thant<span class="font-mono text-gray-400 dark:text-gray-600 animate-blink">_</span>
      </h1>
      <p class="font-mono text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10">Full Stack Developer</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <BaseButton class="px-8 py-3" @click="scrollToSection('contact')">get_in_touch()</BaseButton>
        <BaseButton
          variant="outline"
          href="/Kaung-Htun-Thant-CV.pdf"
          download
          class="px-8 py-3"
        >download_cv()</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const { scrollToSection } = useSiteNavigation()
</script>
