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

function sendMail() {




  // Fetching values inside the function
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  var params = {
    name: name,
    email: email,
    city: city,
    phone: phone,
    message: message,
  };

  const serviceID = "service_l02vxnp";
  const templateID = "template_b3qk2qr"; // Correct template ID here

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Clear input fields after success
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("city").value = "";
      document.getElementById("phone").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

// Adding event listener
const SentFormBtn = document.getElementById("SentFormBtn");

SentFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
});
