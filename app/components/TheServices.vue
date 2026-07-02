<template>
  <section id="services" aria-labelledby="services-title" class="py-24 bg-white dark:bg-black">
    <div class="container mx-auto px-6">
      <p class="font-mono text-sm text-gray-500 dark:text-gray-500 text-center mb-2">// services</p>
      <h2 id="services-title" class="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '>_',
    title: 'Full-Stack Product Delivery',
    description: 'End-to-end ownership from database design to API to deployment — I take features from idea to production and keep them running.',
  },
  {
    icon: '{ }',
    title: 'Backend & API Architecture',
    description: 'Laravel APIs built on SOLID principles with scalable, well-modeled schemas that hold up as the product and team grow.',
  },
  {
    icon: '#!',
    title: 'Cloud & Infrastructure',
    description: 'AWS EC2/S3, CI/CD pipelines, DNS/SSL, and backups — production infrastructure set up, secured, and maintained.',
  },
]
</script>
