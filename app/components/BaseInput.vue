<template>
  <div class="mb-6">
    <label :for="id" class="block font-mono text-sm text-gray-500 dark:text-gray-400 mb-2">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :value="modelValue"
      :required="required"
      :rows="rows"
      :placeholder="placeholder"
      class="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-black dark:focus:border-white transition"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <input
      v-else
      :id="id"
      :type="type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      class="w-full px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-black dark:focus:border-white transition"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, default: '' },
  // 'text' | 'email' | ... any native input type, or 'textarea'.
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  rows: { type: [String, Number], default: 5 },
})

defineEmits(['update:modelValue'])
</script>
