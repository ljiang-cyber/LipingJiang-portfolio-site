document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "#333";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#222";
  });
});