import { ref } from 'vue'

// Light-first, persisted, system-aware theme. Module-scoped state so every
// component shares a single source of truth.
const isDark = ref(false)

export const useTheme = () => {
  const applyTheme = (dark) => {
    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => applyTheme(!isDark.value)

  // Sync reactive state with the class the no-flash head script already applied.
  const initTheme = () => {
    isDark.value = document.documentElement.classList.contains('dark')
  }

  return { isDark, toggleTheme, initTheme }
}
