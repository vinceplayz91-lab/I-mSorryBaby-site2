const video = document.getElementById('apologyVideo');
const button = document.getElementById('showVideo');
const music = document.getElementById('bgMusic');
const heartsContainer = document.querySelector('.hearts-container');

// Start background music
music.play().catch(() => {
  // Autoplay may require a user interaction
  console.log("Tap anywhere to play music");
});

// Show video when button is clicked
button.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();
});

// Create floating hearts continuously
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);