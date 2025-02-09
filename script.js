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

// let currentIndex = 0;
// const cardWidth = 500;
// const visibleCards = 3;
// const totalCards = document.querySelectorAll(".testimonial-card").length;

// function updateTestimonials() {
//   const offset = -currentIndex * cardWidth;
//   container.style.transform = `translateX(${offset}px)`;
// }

// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateTestimonials();
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < totalCards - visibleCards) {
//     currentIndex++;
//     updateTestimonials();
//   }
// });

// updateTestimonials();

function sendMail() {
  var params = {
    full_name: document.getElementById("fullName").value,
    email: document.getElementById("Email-id").value,
    phone: document.getElementById("Phone-No").value,
    city: document.getElementById("City").value,
    requirements: document.getElementById("Requirements").value,
  };

  const serviceID = "service_vold2ul";
  const templateID = "template_imi6jyh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
