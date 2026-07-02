<template>
  <button
    type="button"
    @click="$emit('select')"
    class="group w-full text-left rounded border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black hover:border-black dark:hover:border-white focus:outline-none focus-visible:border-black dark:focus-visible:border-white transition cursor-pointer"
  >
    <div class="h-40 relative overflow-hidden bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <!-- Real screenshot when a project has one; drop `cover: '/path.webp'`
           into the project data and it renders here automatically. -->
      <BaseImage
        v-if="project.cover"
        :src="project.cover"
        :alt="`${project.title} preview`"
        class="h-full w-full"
        img-class="object-cover object-top"
      />
      <!-- Terminal-motif placeholder until a screenshot exists. Decorative:
           the title lives in the card body below. -->
      <div v-else class="absolute inset-0 p-4 flex flex-col justify-between font-mono" aria-hidden="true">
        <p class="text-xs text-gray-500 dark:text-gray-500">$ cat {{ slug }}/README.md</p>
        <span class="self-end text-6xl font-bold leading-none text-gray-200 dark:text-gray-800">{{ number }}</span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-1 font-mono">{{ project.title }}</h3>
      <p v-if="project.role" class="font-mono text-xs text-gray-500 dark:text-gray-400 mb-1">{{ project.role }}</p>
      <p v-if="project.period" class="font-mono text-xs text-gray-500 dark:text-gray-500 mb-4">{{ project.period }}</p>
      <p v-if="project.description" class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
      <div v-if="project.tags?.length" class="flex flex-wrap gap-2 mb-4">
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

// URL-ish slug for the terminal-style cover prompt, e.g. "nokta-crm-emr".
const slug = computed(() =>
  (props.project?.title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
)
</script>
