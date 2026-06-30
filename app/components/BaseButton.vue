<template>
  <button
    :type="type"
    :disabled="disabled"
    class="font-mono text-sm bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition disabled:opacity-40 cursor-pointer"
    :class="block ? 'w-full py-3' : 'inline-block'"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  // Full-width block button vs. inline button.
  block: { type: Boolean, default: false },
})
</script>
