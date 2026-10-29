const CACHE = 'traza-co2-v1'
const BASICOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png']

self.addEventListener('install', e => {
  e.waitUntil(Promise.allSettled(BASICOS.map(u => caches.open(CACHE).then(c => c.add(u)))))
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit ||
      fetch(e.request).then(res => {
        const copia = res.clone()
        caches.open(CACHE).then(c => c.put(e.request, copia))
        return res
      }).catch(() => caches.match('./index.html'))
    )
  )
})
