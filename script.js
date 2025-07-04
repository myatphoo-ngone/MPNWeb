 const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;

// generate dots
items.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= items.length) currentIndex = 0;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - 1;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

//================= carousel script end  ================== 


