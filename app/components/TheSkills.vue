<template>
  <section id="skills" aria-labelledby="skills-title" class="py-24 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-6">
      <p class="font-mono text-sm text-gray-500 dark:text-gray-500 text-center mb-2">// skills</p>
      <h2 id="skills-title" class="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="group in groups" :key="group.label" class="flex flex-col sm:flex-row sm:items-baseline gap-2">
          <span class="font-mono text-sm text-gray-500 dark:text-gray-400 sm:w-32 shrink-0">{{ group.label }}:</span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in group.items"
              :key="tech"
              class="font-mono text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded"
            >[{{ tech }}]</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Grouped tech stack sourced from the CV projects, plus the tooling the same
// work implies (PHP/REST/Git/CI-CD/etc.). Kept out of the mobile dock nav.
const groups = [
  { label: 'backend', items: ['Laravel', 'PHP', 'MySQL', 'Redis', 'REST APIs', 'SOLID / MVC'] },
  { label: 'frontend', items: ['Vue.js', 'Nuxt', 'Blade', 'Tailwind CSS', 'JavaScript'] },
  { label: 'infra & tools', items: ['AWS EC2', 'AWS S3', 'CI/CD', 'DNS / SSL', 'Git', 'Azure AD', 'Twilio', 'Power Automate'] },
]
</script>
