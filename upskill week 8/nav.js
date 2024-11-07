

const navbar = document.getElementById('navbar');
const hideBtn = document.getElementById('hide-navbar-btn');

hideBtn.addEventListener('click', () => {
  navbar.style.display = 'block';
});

navbar.addEventListener('click', () => {
  navbar.style.display = 'none';
});


