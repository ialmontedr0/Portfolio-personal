/*document
  .querySelector(".hamburguesa-btn")
  .addEventListener("click", function () {
    document.querySelector(".navbar-header").classList.toggle("visible");
    document.querySelector(".menu-overlay").classList.toggle("visible");
  });

document.querySelector(".menu-overlay").addEventListener("click", function () {
  document.querySelector(".navbar-header").classList.remove("visible");
  document.querySelector(".menu-overlay").classList.remove("visible");
});

function mostrarMas() {
  window.location.href = "/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const flecha = document.querySelector(".mi-flecha");
  const seccion = document.querySelector("#seccionDos");

  flecha.addEventListener("click", function () {
    seccion.style.display = "block";

    seccion.scrollIntoView({ behavior: "smooth" });
  });
});

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}*/

// Selectores reutilizables
const navbarHeader = document.querySelector(".navbar-header");
const menuOverlay = document.querySelector(".menu-overlay");
const themeToggle = document.getElementById('theme-toggle');
const flecha = document.querySelector(".mi-flecha");
const seccion = document.querySelector("#seccionDos");

// Funciones
const toggleVisibility = (element) => {
  if (element) {
    element.classList.toggle("visible");
  }
};

const removeVisibility = (element) => {
  if (element) {
    element.classList.remove("visible");
  }
};

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

const navigateTo = (url) => {
  window.location.href = url;
};

const smoothScrollToSection = () => {
  if (seccion) {
    seccion.style.display = "block";
    seccion.scrollIntoView({ behavior: "smooth" });
  }
};

// Eventos
if (navbarHeader && menuOverlay) {
  document.querySelector(".hamburguesa-btn").addEventListener("click", () => toggleVisibility(navbarHeader));
  menuOverlay.addEventListener("click", () => {
    removeVisibility(navbarHeader);
    removeVisibility(menuOverlay);
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleDarkMode);
}

if (flecha) {
  flecha.addEventListener("click", smoothScrollToSection);
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('darkMode') === 'true') {
    toggleDarkMode();
  }
});

// Ejemplo de uso de navigateTo
// navigateTo("/index.html");
