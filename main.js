document
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
}