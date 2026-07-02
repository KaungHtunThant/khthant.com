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
      <component
        :is="icons[link.id]"
        :size="20"
        :stroke-width="currentSectionIndex === i ? 2.25 : 1.75"
      />
      <span class="text-[10px] leading-none">{{ link.label }}</span>
    </a>
  </nav>
</template>

<script setup>
import { Home, User, Wrench, FolderOpen, Mail } from '@lucide/vue'

const { navLinks, scrollToSection } = useSiteNavigation()
const { currentSectionIndex } = useScrollSpy()

const icons = {
  hero: Home,
  about: User,
  services: Wrench,
  projects: FolderOpen,
  contact: Mail,
}
</script>
