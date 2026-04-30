const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const links = navLinks.querySelectorAll("a");

// Toggle menu on hamburger click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when any link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
