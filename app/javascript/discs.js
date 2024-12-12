document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is loaded and ready to use!");
  // Exemple d'effet hover sur les cartes
  const cards = document.querySelectorAll(".list-group-item");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
