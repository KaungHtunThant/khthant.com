<template>
  <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-mono font-bold tracking-tight">
            <span class="text-gray-400 dark:text-gray-600">~/</span>kh_thant
          </h1>
          <div class="flex items-center space-x-6">
            <ul class="hidden md:flex space-x-6 text-sm font-mono text-gray-500 dark:text-gray-400">
              <li><a href="#hero" @click.prevent="scrollToSection('hero')" class="hover:text-black dark:hover:text-white transition cursor-pointer">home</a></li>
              <li><a href="#about" @click.prevent="scrollToSection('about')" class="hover:text-black dark:hover:text-white transition cursor-pointer">about</a></li>
              <li><a href="#services" @click.prevent="scrollToSection('services')" class="hover:text-black dark:hover:text-white transition cursor-pointer">services</a></li>
              <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="hover:text-black dark:hover:text-white transition cursor-pointer">projects</a></li>
              <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:text-black dark:hover:text-white transition cursor-pointer">contact</a></li>
            </ul>
            <button
              @click="toggleTheme"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              class="font-mono text-xs border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded hover:border-black dark:hover:border-white transition cursor-pointer"
            >
              {{ isDark ? '[ light ]' : '[ dark ]' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-20 min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div class="container mx-auto px-6 text-center">
        <img src="/portrait.svg" alt="Portrait of Kaung Htun Thant, Full Stack Developer" class="w-56 h-56 rounded-full mx-auto mb-8 grayscale border-2 border-black dark:border-white">
        <p class="font-mono text-sm text-gray-500 dark:text-gray-400 mb-4">$ whoami</p>
        <h1 class="text-[clamp(1.6rem,5.5vw,4.5rem)] font-bold mb-4 tracking-tight whitespace-nowrap">
          Kaung Htun Thant<span class="font-mono text-gray-400 dark:text-gray-600 animate-blink">_</span>
        </h1>
        <p class="font-mono text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10">Full Stack Developer</p>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="font-mono text-sm bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded hover:opacity-80 transition cursor-pointer inline-block">get_in_touch()</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-6">
        <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// about</p>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hello! I'm Kaung Htun Thant, a passionate full-stack developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and am always eager to learn new technologies.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With a strong foundation in both frontend and backend development, I specialize in creating responsive,
            user-friendly applications that deliver exceptional user experiences. I'm dedicated to writing clean,
            maintainable code and following best practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-white dark:bg-black">
      <div class="container mx-auto px-6">
        <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// services</p>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-8 rounded border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition">
            <div class="font-mono text-2xl mb-4">&lt;/&gt;</div>
            <h3 class="text-xl font-bold mb-3 font-mono">Web Design</h3>
            <p class="text-gray-600 dark:text-gray-400">Creating beautiful, responsive designs that engage users and deliver great experiences across all devices.</p>
          </div>
          <div class="p-8 rounded border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition">
            <div class="font-mono text-2xl mb-4">{ }</div>
            <h3 class="text-xl font-bold mb-3 font-mono">Web Development</h3>
            <p class="text-gray-600 dark:text-gray-400">Building robust, scalable web applications using modern frameworks and technologies like Vue.js, Nuxt, and Node.js.</p>
          </div>
          <div class="p-8 rounded border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition">
            <div class="font-mono text-2xl mb-4">^</div>
            <h3 class="text-xl font-bold mb-3 font-mono">Performance Optimization</h3>
            <p class="text-gray-600 dark:text-gray-400">Optimizing applications for speed and efficiency, ensuring fast load times and smooth user interactions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-6">
        <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// projects</p>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="rounded border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black hover:border-black dark:hover:border-white transition"
          >
            <div class="h-40 bg-black dark:bg-white flex items-center justify-center">
              <span class="font-mono text-4xl text-white dark:text-black">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1 font-mono">{{ project.title }}</h3>
              <p class="font-mono text-xs text-gray-500 dark:text-gray-400 mb-1">{{ project.role }}</p>
              <p class="font-mono text-xs text-gray-400 dark:text-gray-600 mb-4">{{ project.period }}</p>
              <p v-if="project.description" class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="font-mono text-xs border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded"
                >[{{ tag }}]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-white dark:bg-black">
      <div class="container mx-auto px-6">
        <p class="font-mono text-sm text-gray-400 dark:text-gray-600 text-center mb-2">// contact</p>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="handleSubmit" class="p-8 rounded border border-gray-200 dark:border-gray-800">
            <div v-if="submitStatus === 'success'" class="mb-6 p-4 border border-black dark:border-white font-mono text-sm rounded">
              &gt; Message sent successfully.
            </div>
            <div v-if="submitStatus === 'error'" class="mb-6 p-4 border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 font-mono text-sm rounded">
              ! Error sending message. Email me directly at kaunghtunthant@gmail.com
            </div>
            <div class="mb-6">
              <label for="name" class="block font-mono text-sm text-gray-500 dark:text-gray-400 mb-2">name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-black dark:focus:border-white transition"
                placeholder="Your Name"
              >
            </div>
            <div class="mb-6">
              <label for="email" class="block font-mono text-sm text-gray-500 dark:text-gray-400 mb-2">email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-black dark:focus:border-white transition"
                placeholder="your@email.com"
              >
            </div>
            <div class="mb-6">
              <label for="message" class="block font-mono text-sm text-gray-500 dark:text-gray-400 mb-2">message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-black dark:focus:border-white transition"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full font-mono text-sm bg-black dark:bg-white text-white dark:text-black py-3 rounded hover:opacity-80 transition disabled:opacity-40"
            >
              {{ isSubmitting ? 'sending...' : 'send_message()' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black dark:bg-gray-950 text-white py-12 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-mono font-bold mb-4"><span class="text-gray-600">~/</span>kh_thant</h3>
            <p class="text-gray-400 mb-4">Full Stack Developer passionate about creating amazing web experiences.</p>
            <p class="text-gray-400 font-mono text-sm">email: <a href="mailto:kaunghtunthant@gmail.com" class="text-white hover:underline">kaunghtunthant@gmail.com</a></p>
            <p class="text-gray-400 font-mono text-sm mt-1">phone: <a href="tel:+971555762591" class="text-white hover:underline">+971 55 576 2591</a></p>
          </div>
          <div>
            <h3 class="text-lg font-mono font-bold mb-4">quick_links</h3>
            <ul class="space-y-2 font-mono text-sm">
              <li><a href="#hero" @click.prevent="scrollToSection('hero')" class="text-gray-400 hover:text-white transition cursor-pointer">home</a></li>
              <li><a href="#about" @click.prevent="scrollToSection('about')" class="text-gray-400 hover:text-white transition cursor-pointer">about</a></li>
              <li><a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-400 hover:text-white transition cursor-pointer">services</a></li>
              <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="text-gray-400 hover:text-white transition cursor-pointer">projects</a></li>
              <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="text-gray-400 hover:text-white transition cursor-pointer">contact</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 font-mono text-sm">
          <p>&copy; 2026 Kaung Htun Thant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const NAVBAR_HEIGHT = 80 // Height offset for fixed navbar

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const projects = [
  {
    title: 'Nokta CRM',
    description: '',
    role: 'Full Stack @ Nokta Clinic',
    period: '2024 – Present',
    tags: ['Laravel', 'Vue.js']
  },
  {
    title: 'iDiamond.ae',
    description: '',
    role: 'Part-time Backend Developer @ iDiamond',
    period: '2024 – 2025',
    tags: ['Laravel']
  },
  {
    title: 'Silver Sea Expo Event Management System',
    description: '',
    role: 'Full Stack @ Power Global Co. Ltd.',
    period: '2023 – 2024',
    tags: ['Laravel']
  },
  {
    title: 'KBTC School Management System',
    description: '',
    role: 'Full Stack @ KBTC Group of Companies',
    period: '2022 – 2023',
    tags: ['Laravel']
  }
]

// Theme toggle — light-first, persisted, system-aware.
const isDark = ref(false)

const applyTheme = (dark) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
  applyTheme(!isDark.value)
}

onMounted(() => {
  // Sync ref with the class already applied by the no-flash head script.
  isDark.value = document.documentElement.classList.contains('dark')
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    submitStatus.value = 'success'
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
