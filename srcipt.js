const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// console.log(slider);
let currentIndex = 0;
let autoSlideInterval;

function updataSlider() {
  const sliderWidth = slider.children[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

function nextSlide() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updataSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex++;
  } else {
    currentIndex = slider.children.length - 1;
  }
  updataSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();
