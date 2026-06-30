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
          @select="selectedProject = project"
        />
      </div>
    </div>

    <ProjectModal
      :project="selectedProject"
      :open="!!selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)

// Detailed `purpose` / `stack` / `features` below are drafts — edit to taste.
// `links` are only rendered when a real URL is present.
const projects = [
  {
    title: 'Nokta CRM',
    description: '',
    role: 'Full Stack @ Nokta Clinic',
    period: '2024 – Present',
    tags: ['Laravel', 'Vue.js'],
    purpose:
      'An internal CRM that runs day-to-day clinic operations — managing patient records, appointment scheduling, treatment plans, and billing in one place. It replaced fragmented spreadsheets and manual workflows with a single, role-based system for the front desk and medical staff.',
    stack: {
      backend: ['Laravel', 'MySQL', 'REST API'],
      frontend: ['Vue.js', 'Tailwind CSS'],
      infra: ['Docker'],
    },
    features: [
      'Patient records with full visit and treatment history',
      'Appointment booking and calendar management',
      'Role-based access for front desk, doctors, and admins',
      'Invoicing and payment tracking',
    ],
    links: { live: '', source: '' },
  },
  {
    title: 'iDiamond.ae',
    description: '',
    role: 'Part-time Backend Developer @ iDiamond',
    period: '2024 – 2025',
    tags: ['Laravel'],
    purpose:
      'Backend development for an e-commerce platform in the jewellery space — building and maintaining the APIs, catalog, and order-processing logic that power the storefront.',
    stack: {
      backend: ['Laravel', 'MySQL', 'REST API'],
      frontend: [],
      infra: [],
    },
    features: [
      'Product catalog and inventory management',
      'Order processing and checkout APIs',
      'Admin tooling for managing listings',
    ],
    links: { live: 'https://idiamond.ae', source: '' },
  },
  {
    title: 'Silver Sea Expo Event Management System',
    description: '',
    role: 'Full Stack @ Power Global Co. Ltd.',
    period: '2023 – 2024',
    tags: ['Laravel'],
    purpose:
      'An event management system for running large-scale expos — handling exhibitor registration, booth allocation, visitor management, and on-site coordination from a single dashboard.',
    stack: {
      backend: ['Laravel', 'MySQL'],
      frontend: ['Blade', 'Tailwind CSS'],
      infra: [],
    },
    features: [
      'Exhibitor and visitor registration',
      'Booth allocation and floor planning',
      'Badge generation and check-in',
      'Reporting and analytics for organizers',
    ],
    links: { live: '', source: '' },
  },
  {
    title: 'KBTC School Management System',
    description: '',
    role: 'Full Stack @ KBTC Group of Companies',
    period: '2022 – 2023',
    tags: ['Laravel'],
    purpose:
      'A school management system covering the full academic workflow — student enrollment, class and timetable management, attendance, grading, and fee collection for administrators, teachers, and parents.',
    stack: {
      backend: ['Laravel', 'MySQL'],
      frontend: ['Blade', 'Bootstrap'],
      infra: [],
    },
    features: [
      'Student enrollment and profile management',
      'Class, subject, and timetable scheduling',
      'Attendance tracking and grade management',
      'Fee collection and financial records',
    ],
    links: { live: '', source: '' },
  },
]
</script>
