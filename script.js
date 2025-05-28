document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".slide");
  const indicators = document.getElementById("indicators");
  let currentSlide = 0;

  function showSlide(index) {
    carousel.style.transform = \`translateX(-\${index * 100}%)\`;
    indicators.childNodes.forEach(btn => btn.classList.remove("active"));
    indicators.childNodes[index].classList.add("active");
    currentSlide = index;
  }

  slides.forEach((_, index) => {
    const btn = document.createElement("button");
    if (index === 0) btn.classList.add("active");
    btn.addEventListener("click", () => showSlide(index));
    indicators.appendChild(btn);
  });

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
