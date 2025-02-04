// script.js

// Get elements
const heroTitle = document.getElementById('hero-title');
const colorChangeBtn = document.getElementById('color-change-btn');
const body = document.body;

// Add event listener for the title click (change title text)
heroTitle.addEventListener('click', function() {
  heroTitle.textContent = 'You clicked on the Coffee Shop!';
});

// Add event listener for the button to change background color
colorChangeBtn.addEventListener('click', function() {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
  body.style.backgroundColor = randomColor;
});

// Add smooth scroll animation for the title on page load
window.addEventListener('load', function() {
  heroTitle.classList.add('show-text');
});

// Display an alert when the user clicks anywhere on the page
body.addEventListener('click', function() {
  alert("This website is made with JavaScript!");
});
