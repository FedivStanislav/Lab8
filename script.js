document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".slide");
  const indicators = document.getElementById("indicators");
  let currentSlide = 0;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    [...indicators.children].forEach(btn => btn.classList.remove("active"));
    indicators.children[index].classList.add("active");
    currentSlide = index;
  }

  slides.forEach((_, index) => {
    const btn = document.createElement("button");
    if (index === 0) btn.classList.add("active");
    btn.addEventListener("click", () => showSlide(index));
    indicators.appendChild(btn);
  });

  showSlide(0);

  document.getElementById("prev").onclick = () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  document.getElementById("next").onclick = () => {
    showSlide((currentSlide + 1) % slides.length);
  };

  setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
  }, 4000);
});
