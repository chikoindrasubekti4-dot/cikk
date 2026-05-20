// script.js  
const images = document.querySelectorAll('.gallery img');  
const popup = document.getElementById('popup');  
const popupImg = popup.querySelector('img');  
const closeBtn = popup.querySelector('.close');  
let currentIndex = 0;  
  
// Buka popup saat gambar diklik  
images.forEach((img, idx) => {  
  img.addEventListener('click', () => {  
    popup.style.display = 'flex';  
    popupImg.src = img.src;  
    popupImg.alt = img.alt;  
    currentIndex = idx;  
  });  
});  
  
// Tutup popup saat tombol Close diklik  
closeBtn.addEventListener('click', () => {  
  popup.style.display = 'none';  
});  
  
// Tutup popup saat area luar gambar diklik  
popup.addEventListener('click', (e) => {  
  if (e.target === popup) popup.style.display = 'none';  
});  
  
// Swipe untuk navigasi gambar (sentuh)  
let startX = 0;  
popup.addEventListener('touchstart', e => {  
  startX = e.changedTouches[0].screenX;  
});  
popup.addEventListener('touchend', e => {  
  const endX = e.changedTouches[0].screenX;  
  if (startX - endX > 50) {  
    // geser kiri -> foto berikutnya  
    currentIndex = (currentIndex + 1) % images.length;  
  } else if (endX - startX > 50) {  
    // geser kanan -> foto sebelumnya  
    currentIndex = (currentIndex - 1 + images.length) % images.length;  
  }  
  popupImg.src = images[currentIndex].src;  
  popupImg.alt = images[currentIndex].alt;  
});
