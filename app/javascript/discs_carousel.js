document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  setInterval(() => {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }, 3000); // Change toutes les 3 secondes
});
