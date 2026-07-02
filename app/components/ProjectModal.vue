<template>
  <BaseModal :open="open" labelledby="project-modal-title" @close="$emit('close')">
    <template v-if="project">
      <!-- Header -->
      <p class="font-mono text-sm text-gray-500 dark:text-gray-500 mb-2">$ cat {{ slug }}/README.md</p>
      <h3 id="project-modal-title" class="text-2xl font-bold font-mono mb-1 pr-20">{{ project.title }}</h3>
      <p class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ project.role }}</p>
      <p class="font-mono text-xs text-gray-500 dark:text-gray-500 mb-6">{{ project.period }}</p>

      <!-- Purpose -->
      <section v-if="project.purpose" class="mb-8">
        <p class="font-mono text-sm text-gray-500 dark:text-gray-500 mb-2">// purpose</p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ project.purpose }}</p>
      </section>

      <!-- Stack breakdown -->
      <section v-if="stackGroups.length" class="mb-8">
        <p class="font-mono text-sm text-gray-500 dark:text-gray-500 mb-3">// stack</p>
        <div class="space-y-3">
          <div v-for="group in stackGroups" :key="group.label" class="flex flex-col sm:flex-row sm:items-center gap-2">
            <span class="font-mono text-xs text-gray-500 dark:text-gray-400 sm:w-24 shrink-0">{{ group.label }}:</span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in group.items"
                :key="tech"
                class="font-mono text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded"
              >[{{ tech }}]</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Key features -->
      <section v-if="project.features?.length" class="mb-8">
        <p class="font-mono text-sm text-gray-500 dark:text-gray-500 mb-3">// features</p>
        <ul class="space-y-2">
          <li
            v-for="feature in project.features"
            :key="feature"
            class="text-gray-700 dark:text-gray-300 flex gap-2"
          >
            <span class="font-mono text-gray-500 dark:text-gray-500 shrink-0">&gt;</span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </section>

      <!-- Links -->
      <section v-if="hasLinks" class="flex flex-wrap gap-3">
        <BaseButton
          v-if="project.links?.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-2"
        >live_demo ↗</BaseButton>
        <BaseButton
          v-if="project.links?.source"
          :href="project.links.source"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          class="px-6 py-2"
        >source ↗</BaseButton>
      </section>
    </template>
  </BaseModal>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, default: null },
  open: { type: Boolean, default: false },
})

defineEmits(['close'])

// URL-ish slug for the terminal-style header, e.g. "nokta-crm".
const slug = computed(() =>
  (props.project?.title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
)

// Turn the stack object ({ backend: [...], frontend: [...] }) into an ordered,
// non-empty list of { label, items } for rendering.
const STACK_ORDER = ['backend', 'frontend', 'infra']
const stackGroups = computed(() => {
  const stack = props.project?.stack
  if (!stack) return []
  return STACK_ORDER.filter((key) => stack[key]?.length).map((key) => ({
    label: key,
    items: stack[key],
  }))
})

const hasLinks = computed(
  () => Boolean(props.project?.links?.live || props.project?.links?.source)
)
</script>
