window.addEventListener("scroll", () => {
  document.querySelectorAll(".project").forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".project").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s";
});
