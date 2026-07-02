<template>
  <div class="flex flex-wrap gap-3" :class="variant === 'footer' ? 'justify-start' : 'justify-center'">
    <a
      v-for="s in socials"
      :key="s.key"
      :href="s.href"
      :target="s.external ? '_blank' : undefined"
      :rel="s.external ? 'noopener noreferrer' : undefined"
      :aria-label="s.aria"
      @click="trackEvent(s.event)"
      class="font-mono text-sm px-4 py-2 rounded border transition"
      :class="variant === 'footer'
        ? 'border-gray-700 text-gray-400 hover:text-white hover:border-white'
        : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white'"
    >[ {{ s.label }} ]</a>
  </div>
</template>

<script setup>
defineProps({
  // 'hero' adapts to light/dark; 'footer' sits on the black footer background.
  variant: { type: String, default: 'hero' },
})

const { trackEvent } = useAnalytics()

// Profile URLs sourced from the CV in public/.
const socials = [
  { key: 'github', label: 'github', href: 'https://github.com/KaungHtunThant', event: 'github_click', aria: 'GitHub profile', external: true },
  { key: 'linkedin', label: 'linkedin', href: 'https://www.linkedin.com/in/khthant', event: 'linkedin_click', aria: 'LinkedIn profile', external: true },
  { key: 'email', label: 'email', href: 'mailto:kaunghtunthant@gmail.com', event: 'mailto_click', aria: 'Email Kaung Htun Thant', external: false },
]
</script>
