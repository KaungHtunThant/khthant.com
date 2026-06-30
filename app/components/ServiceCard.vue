<template>
  <div class="p-8 rounded border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition">
    <div class="font-mono text-2xl mb-4">{{ service.icon }}</div>
    <h3 class="text-xl font-bold mb-3 font-mono">{{ service.title }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  service: { type: Object, required: true },
})
</script>
