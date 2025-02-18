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

document.getElementById("viewMoreBtn").addEventListener("click", function () {
  let hiddenServices = document.querySelectorAll(".hidden-services");

  hiddenServices.forEach((service) => {
    service.style.display = "flex"; // Show the hidden services
  });

  this.style.display = "none";
});

function sendMail(event) {
  event.preventDefault(); // Prevent form submission

  let full_name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("Email-id").value.trim();
  let phone = document.getElementById("Phone-No").value.trim();
  let city = document.getElementById("City").value.trim();
  let requirements = document.getElementById("Requirements").value.trim();

  if (
    [full_name, email, phone, city, requirements].some((field) => field === "")
  ) {
    alert("Please enter all the mandatory fields.");
    return; // Stop function execution
  }

  var params = { full_name, email, phone, city, requirements };

  const serviceID = "service_vold2ul";
  const templateID = "template_imi6jyh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch((err) => console.log(err));
}

// Attach event listener to the form
document.querySelector(".contact-form").addEventListener("submit", sendMail);

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;

  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};
const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false

  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
