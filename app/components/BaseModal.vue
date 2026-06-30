<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="labelledby"
        @keydown.esc="$emit('close')"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="$emit('close')"
        ></div>

        <!-- Panel -->
        <div
          ref="panel"
          class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-gray-100 shadow-xl"
        >
          <button
            ref="closeButton"
            type="button"
            aria-label="Close dialog"
            class="absolute top-4 right-4 z-10 font-mono text-xs border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded hover:border-black dark:hover:border-white transition cursor-pointer bg-white dark:bg-black"
            @click="$emit('close')"
          >
            [ esc ]
          </button>
          <div class="p-8">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  // id of the element labelling the dialog, for aria-labelledby.
  labelledby: { type: String, default: undefined },
})

defineEmits(['close'])

const panel = ref(null)
const closeButton = ref(null)

// Remember what was focused before opening, to restore it on close.
let previouslyFocused = null

const lockBodyScroll = (locked) => {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocused = document.activeElement
      lockBodyScroll(true)
      await nextTick()
      closeButton.value?.focus()
    } else {
      lockBodyScroll(false)
      previouslyFocused?.focus?.()
      previouslyFocused = null
    }
  }
)

// Safety net: never leave the page scroll locked if unmounted while open.
onUnmounted(() => lockBodyScroll(false))
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.96) translateY(8px);
}
</style>
