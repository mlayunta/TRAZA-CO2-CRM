// Service Worker TRAZA//CO2 · v2
// Correcciones: red-first en navegación, sin fallback a index.html en recursos,
// caché purgada al subir versión y protección frente a respuestas de error.
const CACHE = 'traza-co2-v2'
const BASICOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png']

self.addEventListener('install', e => {
e.waitUntil(
  caches.open(CACHE)
    .then(c => c.addAll(BASICOS))
    .catch(() => {}) // si falta un icono, no bloquear la instalación
    .then(() => self.skipWaiting())
)
})

self.addEventListener('activate', e => {
e.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
)
})

self.addEventListener('fetch', e => {
const req = e.request
if (req.method !== 'GET') return

// Navegaciones: SIEMPRE la última versión publicada (red primero),
// y la caché solo como respaldo si no hay internet.
if (req.mode === 'navigate') {
  e.respondWith(
    fetch(req)
      .then(res => {
        const copia = res.clone()
        caches.open(CACHE).then(c => c.put('./index.html', copia))
        return res
      })
      .catch(() => caches.match('./index.html'))
  )
  return
}

// Recursos (CDN y propios): caché primero, pero SIN devolver el index.html
// cuando falla una petición (eso era lo que rompía los módulos ESM).
e.respondWith(
  caches.match(req).then(hit =>
    hit ||
    fetch(req).then(res => {
      if (res.ok) {
        const copia = res.clone()
        caches.open(CACHE).then(c => c.put(req, copia))
      }
      return res
    })
  )
)
})