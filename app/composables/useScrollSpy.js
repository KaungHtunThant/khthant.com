import { ref, computed, onMounted, onUnmounted } from 'vue'

// Tracks which section is currently in view and drives the floating
// scroll-next / scroll-to-top button.
export const useScrollSpy = () => {
  const { navLinks, scrollToSection } = useSiteNavigation()

  const currentSectionIndex = ref(0)
  const isLastSection = computed(
    () => currentSectionIndex.value === navLinks.length - 1
  )

  const updateCurrentSection = () => {
    const mid = window.scrollY + window.innerHeight / 2
    let closest = 0
    let closestDist = Infinity
    navLinks.forEach((link, i) => {
      const el = document.getElementById(link.id)
      if (el) {
        const dist = Math.abs(el.offsetTop + el.offsetHeight / 2 - mid)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      }
    })
    currentSectionIndex.value = closest
  }

  const scrollNext = () => {
    const target = isLastSection.value
      ? navLinks[0].id
      : navLinks[currentSectionIndex.value + 1].id
    scrollToSection(target)
  }

  onMounted(() => {
    window.addEventListener('scroll', updateCurrentSection, { passive: true })
    updateCurrentSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateCurrentSection)
  })

  return { currentSectionIndex, isLastSection, scrollNext }
}
