const openbtn = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");
const mobileViewNav = document.querySelector(".mobile-view");

closebtn.addEventListener("click", () => {
  mobileViewNav.classList.add("hide");
  openbtn.classList.remove("hide");
  closebtn.classList.add("hide");
});

openbtn.addEventListener("click", () => {
  mobileViewNav.classList.remove("hide");
  openbtn.classList.add("hide");
  closebtn.classList.remove("hide");
});
let currentIndex = 0;
const cardWidth = 500; 
const visibleCards = 3;
const totalCards = document.querySelectorAll(".testimonial-card").length;

function updateTestimonials() {
  const offset = -currentIndex * cardWidth;
  container.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateTestimonials();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateTestimonials();
  }
});


updateTestimonials();
