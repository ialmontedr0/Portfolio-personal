document.querySelector('.hamburguesa-btn').addEventListener('click', function() {
    document.querySelector('.navbar-header').classList.toggle('visible');
    document.querySelector('.menu-overlay').classList.toggle('visible');
});

document.querySelector('.menu-overlay').addEventListener('click', function() {
    document.querySelector('.navbar-header').classList.remove('visible');
    document.querySelector('.menu-overlay').classList.remove('visible');
  });