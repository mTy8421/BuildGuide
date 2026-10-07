// Copy code button logic
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pre = btn.closest(".code-block-wrapper").querySelector("pre");
    const codeText = pre.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      const originalText = btn.innerText;
      btn.innerText = "คัดลอกแล้ว!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove("copied");
      }, 2000);
    });
  });
});

// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// Check saved theme or system preference
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme =
  localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.innerText = "☀️";
    themeText.innerText = "โหมดสว่าง";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.innerText = "🌙";
    themeText.innerText = "โหมดมืด";
  }
  localStorage.setItem("theme", theme);
}

applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar on link click (mobile)
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      sidebar.classList.remove("open");
    }
  });
});

// Back to top button visibility
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll("section.doc-section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let currentSectionId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (currentSectionId) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
