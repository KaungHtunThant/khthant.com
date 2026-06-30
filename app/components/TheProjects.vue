<template>
  <section id="projects" class="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-6">
      <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// projects</p>
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Nokta CRM',
    description: '',
    role: 'Full Stack @ Nokta Clinic',
    period: '2024 – Present',
    tags: ['Laravel', 'Vue.js'],
  },
  {
    title: 'iDiamond.ae',
    description: '',
    role: 'Part-time Backend Developer @ iDiamond',
    period: '2024 – 2025',
    tags: ['Laravel'],
  },
  {
    title: 'Silver Sea Expo Event Management System',
    description: '',
    role: 'Full Stack @ Power Global Co. Ltd.',
    period: '2023 – 2024',
    tags: ['Laravel'],
  },
  {
    title: 'KBTC School Management System',
    description: '',
    role: 'Full Stack @ KBTC Group of Companies',
    period: '2022 – 2023',
    tags: ['Laravel'],
  },
]
</script>
