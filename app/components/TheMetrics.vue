<template>
  <section aria-labelledby="metrics-title" class="py-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-6">
      <h2 id="metrics-title" class="sr-only">Track record</h2>
      <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
        <div v-for="m in metrics" :key="m.label">
          <p class="text-3xl md:text-4xl font-bold font-mono">{{ m.value }}</p>
          <p class="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">{{ m.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Portfolio-wide numbers, all backed by the project data / About copy.
// Add more tiles here as they come in (the grid columns adjust in the class above).
const metrics = [
  { value: '7+', label: 'years shipping' },
  { value: '4', label: 'production platforms' },
  { value: '3', label: 'countries deployed' },
]
</script>
