const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 130);
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal("#deals_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".slider-image ", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".footer ", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content div", {
  duration: 1000,
  delay: 500
});
ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  delay: 1000
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1500
});





