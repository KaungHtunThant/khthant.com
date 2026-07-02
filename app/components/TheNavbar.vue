<template>
  <nav aria-label="Primary" class="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <span class="text-xl font-mono font-bold tracking-tight">
          <span class="text-gray-500 dark:text-gray-500">~/</span>K_</span>
        <div class="flex items-center space-x-6">
          <ul class="hidden md:flex space-x-6 text-sm font-mono text-gray-500 dark:text-gray-400">
            <li v-for="link in navLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                @click.prevent="scrollToSection(link.id)"
                class="hover:text-black dark:hover:text-white transition cursor-pointer"
              >{{ link.label }}</a>
            </li>
          </ul>
          <button
            @click="toggleTheme"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="font-mono text-xs border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded hover:border-black dark:hover:border-white transition cursor-pointer"
          >
            {{ isDark ? '[ light ]' : '[ dark ]' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { navLinks, scrollToSection } = useSiteNavigation()
const { isDark, toggleTheme } = useTheme()
</script>
