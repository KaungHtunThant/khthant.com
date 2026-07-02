<template>
  <button
    @click="scrollNext"
    :aria-label="isLastSection ? 'Scroll to top' : 'Scroll to next section'"
    class="fixed bottom-6 right-6 z-40 w-10 h-10 hidden md:flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white rounded transition-colors duration-300 cursor-pointer"
  >
    <span
      class="text-base leading-none transition-transform duration-300"
      :class="isLastSection ? 'rotate-180' : 'rotate-0'"
    >↓</span>
  </button>
</template>

<script setup>
const { isLastSection, scrollNext } = useScrollSpy()
</script>
