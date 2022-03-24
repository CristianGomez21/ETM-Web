const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', function () {
  document.querySelector('.nav-menu-right').classList.toggle('show');
});