<template>
  <nav
    aria-label="Section navigation"
    class="fixed z-50 md:hidden left-4 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-1 px-2 py-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur shadow-lg shadow-black/5 dark:shadow-black/40"
  >
    <a
      v-for="(link, i) in navLinks"
      :key="link.id"
      :href="`#${link.id}`"
      @click.prevent="scrollToSection(link.id)"
      :aria-label="link.label"
      :aria-current="currentSectionIndex === i ? 'page' : undefined"
      class="flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl font-mono transition-colors duration-300 cursor-pointer"
      :class="currentSectionIndex === i
        ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        :stroke-width="currentSectionIndex === i ? 2.25 : 1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path v-for="d in icons[link.id]" :key="d" :d="d" />
      </svg>
      <span class="text-[10px] leading-none">{{ link.label }}</span>
    </a>
  </nav>
</template>

<script setup>
const { navLinks, scrollToSection } = useSiteNavigation()
const { currentSectionIndex } = useScrollSpy()

// Inlined Lucide icon paths (home, user, wrench, folder-open, mail) so the
// @lucide/vue dependency isn't needed for these five icons.
const icons = {
  hero: [
    'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8',
    'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  ],
  about: [
    'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
    'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  ],
  services: [
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  ],
  projects: [
    'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
  ],
  contact: [
    'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  ],
}
</script>
