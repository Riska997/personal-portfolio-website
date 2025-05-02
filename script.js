/********************************HEADER****************************************************/
    /*** Toggle dark/light theme***/
// Get the checkbox element
const toggleSwitch = document.getElementById('theme-toggle');

// Function to switch themes
function switchTheme() {
    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'light'); 
        localStorage.setItem('theme', 'light'); 
    } else {
        document.documentElement.setAttribute('data-theme', 'dark'); 
        localStorage.setItem('theme', 'dark'); 
    }
}

// Event listener for the checkbox
toggleSwitch.addEventListener('change', switchTheme);

// Load the theme on page load
function loadTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to light if no preference
    toggleSwitch.checked = currentTheme === 'light'; // Set checkbox state
    document.documentElement.setAttribute('data-theme', currentTheme); // Apply theme
}

// Call loadTheme on page load
loadTheme();

  /***Menu 
// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Close the menu when clicking outside of it
window.onclick = function (event) {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");
  if (
      !event.target.matches(".menu-icon") &&
      !event.target.matches(".menu-icon *") &&
      menu.classList.contains("show")
  ) {
      menu.classList.remove("show");
  }
};

// Close the menu when clicking a menu link
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', function () {
      const menu = document.getElementById("menu");
      menu.classList.remove("show"); // Close the menu
  });
});*/

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}


/********************************MAIN****************************************************/

  /*** Projects***/
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
          project.style.display = 'block';
      } else {
          project.style.display = 'none';
      }
  });
}

/*** Back to Top***/
// Get the button
const myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block"; 
    } else {
        myButton.style.display = "none"; 
    }
};

// When the user clicks on the button, scroll to the top of the document
myButton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};

