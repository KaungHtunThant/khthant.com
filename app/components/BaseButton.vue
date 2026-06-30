<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disabled"
    class="font-mono text-sm rounded transition cursor-pointer disabled:opacity-40"
    :class="[variantClasses, block ? 'block w-full text-center py-3' : 'inline-block']"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  // Full-width block button vs. inline button.
  block: { type: Boolean, default: false },
  // 'primary' (filled) | 'outline' (bordered, transparent).
  variant: { type: String, default: 'primary' },
  // When set, the button renders as an <a> link.
  href: { type: String, default: '' },
})

const variantClasses = computed(() =>
  props.variant === 'outline'
    ? 'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white'
    : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-80'
)
</script>
