/*
=============================================
PRISCA MULISHI - PERSONAL PORTFOLIO
Main JavaScript File
=============================================
*/

"use strict";

/* ==========================================
   1. DARK / LIGHT THEME
========================================== */

const themeToggle = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

// Apply a theme to the website.
function applyTheme(theme) {
  rootElement.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.checked = theme === "light";
  }
}

// Retrieve the visitor's saved theme.
function loadTheme() {
  let savedTheme = "dark";

  try {
    savedTheme = localStorage.getItem("theme") || "dark";
  } catch (error) {
    // Use the default theme if storage is unavailable.
  }

  applyTheme(savedTheme === "light" ? "light" : "dark");
}

// Save the selected theme.
function switchTheme() {
  if (!themeToggle) {
    return;
  }

  const selectedTheme = themeToggle.checked ? "light" : "dark";

  applyTheme(selectedTheme);

  try {
    localStorage.setItem("theme", selectedTheme);
  } catch (error) {
    // Theme still changes if storage is unavailable.
  }
}

// Initialise theme.
loadTheme();

if (themeToggle) {
  themeToggle.addEventListener("change", switchTheme);
}

/* ==========================================
   2. MOBILE NAVIGATION MENU
========================================== */

/* ==========================================
   2. MOBILE NAVIGATION MENU
========================================== */

const menuList = document.getElementById("menuList");
const menuButton = document.getElementById("menu-toggle");

if (menuList && menuButton) {
  // Close the mobile navigation menu.
  function closeMenu() {
    menuList.classList.remove("is-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  // Open or close the menu when clicked.
  menuButton.addEventListener("click", function () {
    const isOpen = menuList.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // Close the menu when a navigation link is clicked.
  menuList.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when clicking outside.
  document.addEventListener("click", function (event) {
    if (
      !menuList.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close the menu when Escape is pressed.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  // Reset the menu when returning to desktop width.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

/* ==========================================
   3. PROJECT FILTERING
========================================== */

// Used by the project filter on projects.html.
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(function (project) {
    const showProject =
      category === "all" || project.classList.contains(category);

    project.style.display = showProject ? "" : "none";
  });
}

// Make the function available to the HTML onchange.
window.filterProjects = filterProjects;

/* ==========================================
   4. BACK TO TOP BUTTON
========================================== */

const backToTopContainer = document.getElementById("myBtn");

if (backToTopContainer) {
  const backToTopButton = backToTopContainer.querySelector("button");

  // Show button after scrolling down.
  function updateBackToTop() {
    if (window.scrollY > 250) {
      backToTopContainer.style.display = "block";
    } else {
      backToTopContainer.style.display = "none";
    }
  }

  // Return to the beginning of the page.
  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
  }

  // Set the correct visibility when the page loads.
  updateBackToTop();
}

/* ==========================================
   5. CONTACT FORM
========================================== */

/*
The contact form is submitted using Formspree.

Its action and method are defined in index.html.

HTML provides built-in validation for the required
name, email, and message fields.

No custom JavaScript validation or submission
handler is necessary at this stage.

The Formspree endpoint still needs a live
submission test before publishing the website.
*/
