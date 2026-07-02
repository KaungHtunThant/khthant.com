// GA4 loaded lazily on the visitor's first interaction to keep analytics out of
// the initial load. trackEvent() ensures the script is loading and queues the
// event on dataLayer — gtag replays the queue once it loads, so events fired on
// that first interaction (e.g. a click) aren't lost.
const GA_ID = 'G-5E1JN7GFFB'

let loaded = false

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || []
}

// Native gtag shim: pushes the raw arguments object onto dataLayer.
function gtag() {
  window.dataLayer.push(arguments)
}

export function loadAnalytics() {
  if (loaded) return
  loaded = true
  ensureDataLayer()
  gtag('js', new Date())
  gtag('config', GA_ID)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

export function useAnalytics() {
  function trackEvent(name, params = {}) {
    ensureDataLayer()
    // A tracked interaction is itself a "first interaction", so make sure the
    // config command is queued/loading before the event.
    loadAnalytics()
    gtag('event', name, params)
  }

  return { loadAnalytics, trackEvent }
}
