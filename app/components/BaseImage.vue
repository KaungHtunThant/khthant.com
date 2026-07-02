<template>
  <div class="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
    <div
      v-if="!loaded"
      class="absolute inset-0 flex items-center justify-center animate-pulse"
      aria-hidden="true"
    >
      <svg
        class="w-1/3 h-1/3 text-gray-300 dark:text-gray-700"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          v-if="icon === 'user'"
          d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2.25c-4.28 0-7.75 2.6-7.75 5.81 0 .52.42.94.94.94h13.62c.52 0 .94-.42.94-.94 0-3.21-3.47-5.81-7.75-5.81Z"
        />
        <path
          v-else
          d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm11.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM4.75 17.25l4.5-6 3.5 4.5 2.25-2.75 4.25 4.25H4.75Z"
        />
      </svg>
    </div>
    <img
      ref="imgEl"
      :src="src"
      :alt="alt"
      :loading="loading"
      decoding="async"
      class="h-full w-full transition-opacity duration-500"
      :class="[imgClass, loaded ? 'opacity-100' : 'opacity-0']"
      @load="loaded = true"
      @error="loaded = true"
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  // Placeholder icon shown while loading: 'image' or 'user'
  icon: { type: String, default: 'image' },
  imgClass: { type: [String, Array, Object], default: '' },
  loading: { type: String, default: 'lazy' },
})

const imgEl = ref(null)
const loaded = ref(false)

// The load event can fire before hydration (e.g. cached images), so the
// listener would miss it — check the element's state once mounted.
onMounted(() => {
  if (imgEl.value?.complete) loaded.value = true
})
</script>
