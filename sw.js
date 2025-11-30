const CACHE_NAME = 'pomosnik-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/equation-solver.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  console.log('🚀 SW устанавливается');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});const CACHE_NAME = 'pomosnik-offline-v1';
const urlsToCache = [
  '/',
  '/index.html', 
  '/style.css',
  '/script.js',
  '/manifest.json',
  // Добавь сюда пути к картинкам ГДЗ когда они появятся
];

// Установка - кешируем файлы
self.addEventListener('install', event => {
  console.log('SW installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Активация - чистим старые кеши
self.addEventListener('activate', event => {
  console.log('SW activated');
});

// Перехватываем запросы
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
