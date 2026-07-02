<template>
  <button
    type="button"
    @click="$emit('select')"
    class="group w-full text-left rounded border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black hover:border-black dark:hover:border-white focus:outline-none focus-visible:border-black dark:focus-visible:border-white transition cursor-pointer"
  >
    <div class="h-40 bg-black dark:bg-white flex items-center justify-center">
      <span class="font-mono text-4xl text-white dark:text-black">{{ number }}</span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-1 font-mono">{{ project.title }}</h3>
      <p class="font-mono text-xs text-gray-500 dark:text-gray-400 mb-1">{{ project.role }}</p>
      <p class="font-mono text-xs text-gray-500 dark:text-gray-500 mb-4">{{ project.period }}</p>
      <p v-if="project.description" class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="font-mono text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded"
        >[{{ tag }}]</span>
      </div>
      <p class="font-mono text-xs text-gray-500 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition">
        view_details()
      </p>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true },
})

defineEmits(['select'])

// Zero-padded ordinal shown on the card cover, e.g. "01".
const number = computed(() => String(props.index + 1).padStart(2, '0'))
</script>
