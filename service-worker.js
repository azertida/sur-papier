// Sur papier — service worker
// À INCRÉMENTER À CHAQUE MISE À JOUR DE L'APPLICATION
const VERSION = 'surpapier-v4';

const FICHIERS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(FICHIERS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(
        noms.filter(n => n !== VERSION).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Réseau d'abord, cache en secours : l'application se met à jour dès
// qu'il y a du réseau, et reste utilisable sans.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(reponse => {
        const copie = reponse.clone();
        caches.open(VERSION).then(c => c.put(e.request, copie));
        return reponse;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
