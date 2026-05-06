// 获取所有项目
const projects = document.querySelectorAll(".project");

// 创建详情容器
const overlay = document.createElement("div");
overlay.classList.add("overlay");

overlay.innerHTML = `
  <div class="overlay-content">
    <span class="close-btn">✕</span>
    <img class="overlay-img" src="" />
    <p class="overlay-title"></p>
  </div>
`;

document.body.appendChild(overlay);

// 获取元素
const overlayImg = document.querySelector(".overlay-img");
const overlayTitle = document.querySelector(".overlay-title");
const closeBtn = document.querySelector(".close-btn");

// 点击项目 → 打开详情
projects.forEach(project => {
  project.addEventListener("click", () => {
    const img = project.querySelector("img").src;
    const title = project.querySelector("p").innerText;

    overlayImg.src = img;
    overlayTitle.innerText = title;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// 关闭函数
function closeOverlay() {
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// 点击关闭按钮
closeBtn.addEventListener("click", closeOverlay);

// 点击背景关闭
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});

// ESC 关闭
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeOverlay();
  }
});


// 滚动时 header 变淡（高级感）
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.opacity = "0.5";
  } else {
    header.style.opacity = "1";
  }
});


// 图片懒加载（优化性能）
const imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src || img.src;
      observer.unobserve(img);
    }
  });
});

imgs.forEach(img => observer.observe(img));
