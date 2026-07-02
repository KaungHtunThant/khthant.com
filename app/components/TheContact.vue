<template>
  <section id="contact" aria-labelledby="contact-title" class="py-24 bg-white dark:bg-black">
    <div class="container mx-auto px-6">
      <p class="font-mono text-sm text-gray-500 dark:text-gray-500 text-center mb-2">// contact</p>
      <h2 id="contact-title" class="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="p-8 rounded border border-gray-200 dark:border-gray-800">
          <div v-if="submitStatus === 'success'" class="mb-6 p-4 border border-black dark:border-white font-mono text-sm rounded">
            &gt; Message sent successfully.
          </div>
          <div v-if="submitStatus === 'error'" class="mb-6 p-4 border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 font-mono text-sm rounded">
            ! Error sending message. Email me directly at kaunghtunthant@gmail.com
          </div>
          <BaseInput id="name" label="name" v-model="form.name" required placeholder="Your Name" />
          <BaseInput id="email" label="email" type="email" v-model="form.email" required placeholder="your@email.com" />
          <BaseInput id="message" label="message" type="textarea" v-model="form.message" required :rows="5" placeholder="Your message..." />
          <BaseButton type="submit" block :disabled="isSubmitting">
            {{ isSubmitting ? 'sending...' : 'send_message()' }}
          </BaseButton>
          <p class="mt-4 text-center font-mono text-sm text-gray-500 dark:text-gray-400">
            or
            <a
              href="mailto:kaunghtunthant@gmail.com"
              class="text-black dark:text-white hover:underline"
              @click="trackEvent('mailto_click')"
            >email me directly →</a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const { trackEvent } = useAnalytics()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })

    submitStatus.value = 'success'
    trackEvent('form_submit')
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
