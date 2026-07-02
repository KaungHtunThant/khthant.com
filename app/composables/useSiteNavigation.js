// Shared navigation data + smooth in-page scrolling. Used by the navbar, hero,
// footer and scroll button so the section list lives in exactly one place.
const NAVBAR_HEIGHT = 80 // Offset for the fixed navbar.

const navLinks = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'services', label: 'services' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

export const useSiteNavigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return { navLinks, scrollToSection }
}
