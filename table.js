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
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const conteudos = document.querySelectorAll('.conteudo_tb');

let active = 0;
const total = conteudos.length;
let timer;

function update(direction){
    document.querySelector('.conteudo_tb.active').classList.remove('active');
     //Responsável pela animação de ir para o próximo
    if (direction>0) {
        active += 1;

        if (active == total){
            active = 0;
        }
    //Responsável pela animação de ir para o anterior
    }else if (direction < 0) {
        active -= 1;
        
        if(active <0 ){
            active = total -1
            //Truque para chegar no último item da lista
        }
    }
    //Adicionar a classe Active para poder aparecer o proximo ou anterior
    conteudos[active].classList.add('active');



}
/*
clearInterval(timer);
 timer = setInterval(() => {
    update(1)
}, 5000);
*/
prevButton.addEventListener('click', () =>{
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})