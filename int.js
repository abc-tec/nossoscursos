const cacheName = 'meu-site-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js'
];

// Instala o service worker e guarda os arquivos no cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o cache mesmo se estiver sem internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Quando o ícone entra na tela, adiciona a classe de animação
                entry.target.classList.add('show-section');
            }
        });
    });

    // Seleciona todos os elementos com a classe hidden-icon para observar
    const hiddenElements = document.querySelectorAll('.hidden-section');
    hiddenElements.forEach((el) => observer.observe(el));