<template>
  <section id="services" class="py-24 bg-white dark:bg-black">
    <div class="container mx-auto px-6">
      <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// services</p>
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
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
    icon: '</>',
    title: 'Web Design',
    description: 'Creating beautiful, responsive designs that engage users and deliver great experiences across all devices.',
  },
  {
    icon: '{ }',
    title: 'Web Development',
    description: 'Building robust, scalable web applications using modern frameworks and technologies like Vue.js, Nuxt, and Node.js.',
  },
  {
    icon: '^',
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and efficiency, ensuring fast load times and smooth user interactions.',
  },
]
</script>
