document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggleButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggleButton && nav) {
    toggleButton.addEventListener("click", () => {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("is-open");
    });
  }
});
