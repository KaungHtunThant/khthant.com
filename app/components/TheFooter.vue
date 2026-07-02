<template>
  <footer class="bg-black dark:bg-gray-950 text-white pt-12 pb-32 md:py-12 border-t border-gray-800">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-mono font-bold mb-4"><span class="text-gray-400">~/</span>K_</h3>
          <p class="text-gray-400 mb-4">Full Stack Developer — a bridge between messy requirements and clean, scalable code.</p>
          <p class="text-gray-400 font-mono text-sm">email: <a href="mailto:kaunghtunthant@gmail.com" class="text-white hover:underline">kaunghtunthant@gmail.com</a></p>
          <p class="text-gray-400 font-mono text-sm mt-1 mb-4">phone: <a href="tel:+971555762591" class="text-white hover:underline">+971 55 576 2591</a></p>
          <SocialLinks variant="footer" />
        </div>
        <div>
          <h3 class="text-lg font-mono font-bold mb-4">quick_links</h3>
          <nav aria-label="Footer">
            <ul class="space-y-2 font-mono text-sm">
              <li v-for="link in navLinks" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  @click.prevent="scrollToSection(link.id)"
                  class="text-gray-400 hover:text-white transition cursor-pointer"
                >{{ link.label }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-mono text-sm">
        <p>&copy; {{ year }} Kaung Htun Thant. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { navLinks, scrollToSection } = useSiteNavigation()

// Baked at prerender via useState so server and client agree (no hydration
// mismatch); refreshes to the current year on each deploy.
const year = useState('copyright-year', () => new Date().getFullYear())
</script>
