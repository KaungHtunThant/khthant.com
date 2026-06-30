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

// Project details sourced from CV. `links` render only when a URL is present.
const projects = [
  {
    title: 'Nokta CRM + EMR',
    description: '',
    role: 'Senior Fullstack Developer @ Nokta Software Development',
    period: '2024 – Present',
    tags: ['Laravel', 'Vue.js', 'AWS'],
    purpose:
      'A custom CRM + EMR platform that replaced Bitrix and now serves ~60 simultaneous sales, admin, and clinic staff across the UAE and Turkey. Led end-to-end as project lead and business analyst — gathering requirements, prioritizing features, and shipping continuous updates under rapidly changing needs.',
    stack: {
      backend: ['Laravel', 'MySQL', 'Redis'],
      frontend: ['Vue.js'],
      infra: ['AWS EC2', 'AWS S3', 'Twilio', 'Meta & Snapchat Leads'],
    },
    features: [
      'Redesigned lead-flow and ownership model that eliminated lead duplication and sales/admin conflicts',
      'Architected and managed AWS infrastructure — EC2, security, DNS, SSL, and backups',
      'Integrated Twilio WhatsApp & voice, Meta Leads, Snapchat Leads, and landing-page pipelines to automate lead capture',
      'Mentored a junior developer and an intern, and established team coding standards',
    ],
    links: { live: '', source: '' },
  },
  {
    title: 'iDiamond E-commerce',
    description: '',
    role: 'Backend Developer (Freelance) @ iDiamond',
    period: '2024 – 2025',
    tags: ['Laravel', 'AWS S3'],
    purpose:
      'A custom e-commerce backend built around a clean, SOLID MVC architecture. Designed the database schema and API routes, and delivered a production-ready v1 under shifting requirements while keeping the codebase stable and scalable.',
    stack: {
      backend: ['Laravel', 'MySQL'],
      frontend: [],
      infra: ['AWS S3'],
    },
    features: [
      'Payment logic for 5 methods — Cash on Delivery, Apple Pay, Samsung Pay, Google Pay, and debit/credit cards',
      'AWS S3 integration for secure storage and delivery of product images and 3D model files',
      'Database schema, API routes, and MVC structure following SOLID principles',
      'Close collaboration with frontend developers and the team lead to align API design with UI/UX',
    ],
    links: { live: 'https://idiamond.ae', source: '' },
  },
  {
    title: 'Event Management System',
    description: '',
    role: 'Fullstack Developer @ Power Global Co., Ltd',
    period: '2023 – 2024',
    tags: ['Laravel', 'MySQL'],
    purpose:
      "Myanmar's first Event Management System, deployed at major expos including Build & Agri Expo 2024 and Myanmar Textile Expo 2024 — handling 10,000+ attendees per day across 3-day events.",
    stack: {
      backend: ['Laravel', 'MySQL'],
      frontend: ['Blade'],
      infra: [],
    },
    features: [
      'Online and onsite registration with instant visitor/VIP card printing and QR-coded entry passes',
      'QR verification supporting handheld scanners and mobile devices for fast, secure check-ins',
      'Live lottery system for on-stage visitor engagement, wired to real-time event data',
      'Visitor classification and data management (interests, industry, demographics) with import/export tools',
    ],
    links: { live: '', source: '' },
  },
  {
    title: 'School Management System',
    description: '',
    role: 'Fullstack Developer @ KBTC Group of Companies',
    period: '2021 – 2023',
    tags: ['Laravel', 'Azure AD'],
    purpose:
      "A complete School Management System built from scratch, onboarding 1,000+ new students per term across the group's schools and universities, with bulk XLSX/CSV import/export.",
    stack: {
      backend: ['Laravel', 'MySQL'],
      frontend: ['Blade'],
      infra: ['Microsoft Azure AD', 'Power Automate'],
    },
    features: [
      'Automated student ID card generation with QR codes for emergency details and verification',
      'Full Incident Management System for IT/Admin — ticket creation, assignment, escalation, resolution tracking, and reporting',
      'Microsoft Azure AD SSO with Teams notifications via Power Automate for real-time ticket updates',
      'Bulk XLSX/CSV import/export for fast onboarding and data migration',
    ],
    links: { live: '', source: '' },
  },
]
</script>
