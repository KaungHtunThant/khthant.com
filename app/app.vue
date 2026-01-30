<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-indigo-600">KH Thant</h1>
          <ul class="flex space-x-6">
            <li><a href="#hero" @click.prevent="scrollToSection('hero')" class="hover:text-indigo-600 transition cursor-pointer">Home</a></li>
            <li><a href="#about" @click.prevent="scrollToSection('about')" class="hover:text-indigo-600 transition cursor-pointer">About</a></li>
            <li><a href="#services" @click.prevent="scrollToSection('services')" class="hover:text-indigo-600 transition cursor-pointer">Services</a></li>
            <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="hover:text-indigo-600 transition cursor-pointer">Projects</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:text-indigo-600 transition cursor-pointer">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div class="container mx-auto px-6 text-center text-white">
        <img src="/portrait.svg" alt="Portrait" class="w-64 h-64 rounded-full mx-auto mb-8 shadow-2xl border-8 border-white">
        <h1 class="text-5xl font-bold mb-4">Kaung Htun Thant</h1>
        <p class="text-2xl mb-8">Full Stack Developer</p>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer inline-block">Get In Touch</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Hello! I'm Kaung Htun Thant, a passionate full-stack developer with expertise in building modern web applications. 
            I love creating elegant solutions to complex problems and am always eager to learn new technologies.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            With a strong foundation in both frontend and backend development, I specialize in creating responsive, 
            user-friendly applications that deliver exceptional user experiences. I'm dedicated to writing clean, 
            maintainable code and following best practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4 text-indigo-600">🎨</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Web Design</h3>
            <p class="text-gray-600">Creating beautiful, responsive designs that engage users and deliver great experiences across all devices.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4 text-indigo-600">💻</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Web Development</h3>
            <p class="text-gray-600">Building robust, scalable web applications using modern frameworks and technologies like Vue.js, Nuxt, and Node.js.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4 text-indigo-600">🚀</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Performance Optimization</h3>
            <p class="text-gray-600">Optimizing applications for speed and efficiency, ensuring fast load times and smooth user interactions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <span class="text-white text-6xl">📱</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">E-Commerce Platform</h3>
              <p class="text-gray-600 mb-4">A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span class="text-white text-6xl">📊</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Analytics Dashboard</h3>
              <p class="text-gray-600 mb-4">Real-time analytics dashboard with interactive charts and data visualization capabilities.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Nuxt.js</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Express</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <span class="text-white text-6xl">🎯</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Task Management App</h3>
              <p class="text-gray-600 mb-4">A collaborative task management application with real-time updates and team collaboration features.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Vue 3</span>
                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
              <span class="text-white text-6xl">✍️</span>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Blog Platform</h3>
              <p class="text-gray-600 mb-4">A modern blogging platform with markdown support, SEO optimization, and content management system.</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Nuxt.js</span>
                <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Strapi</span>
                <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-lg">
            <div v-if="submitStatus === 'success'" class="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
            <div v-if="submitStatus === 'error'" class="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              Sorry, there was an error sending your message. Please email me directly at kaunghtunthant@gmail.com
            </div>
            <div class="mb-6">
              <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Name"
              >
            </div>
            <div class="mb-6">
              <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="your@email.com"
              >
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Kaung Htun Thant</h3>
            <p class="text-gray-400 mb-4">Full Stack Developer passionate about creating amazing web experiences.</p>
            <p class="text-gray-400">Email: <a href="mailto:kaunghtunthant@gmail.com" class="text-indigo-400 hover:text-indigo-300">kaunghtunthant@gmail.com</a></p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#hero" @click.prevent="scrollToSection('hero')" class="text-gray-400 hover:text-white transition cursor-pointer">Home</a></li>
              <li><a href="#about" @click.prevent="scrollToSection('about')" class="text-gray-400 hover:text-white transition cursor-pointer">About</a></li>
              <li><a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-400 hover:text-white transition cursor-pointer">Services</a></li>
              <li><a href="#projects" @click.prevent="scrollToSection('projects')" class="text-gray-400 hover:text-white transition cursor-pointer">Projects</a></li>
              <li><a href="#contact" @click.prevent="scrollToSection('contact')" class="text-gray-400 hover:text-white transition cursor-pointer">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Kaung Htun Thant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // navbar height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
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
