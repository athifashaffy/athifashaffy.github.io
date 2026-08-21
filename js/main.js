// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Project category filter
const filterBar = document.getElementById("projectFilters");
const projectCards = document.querySelectorAll("#projectGrid .project");
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filterBar
    .querySelectorAll(".filter")
    .forEach((b) => b.classList.toggle("is-active", b === btn));
  const cat = btn.dataset.filter;
  projectCards.forEach((card) => {
    const cats = card.dataset.cat.split(" ");
    card.hidden = cat !== "all" && !cats.includes(cat);
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(
  ".section__title, .section__kicker, .card, .project, .fact, .timeline li, .awards li, .about__text, .contact__lead, .contact__links"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));
