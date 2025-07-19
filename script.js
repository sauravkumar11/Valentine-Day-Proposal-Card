const button = document.getElementById("noButton");
const card = document.querySelector(".glass-card");  // The glass-card container

// Move the "No" button around on hover
button.addEventListener("mouseover", function () {
  const cardRect = card.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  const maxX = cardRect.width - buttonRect.width - 20;
  const maxY = cardRect.height - buttonRect.height - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
});

// Add the heart effect when "Yes" button is clicked
document.getElementById("yesButton").addEventListener("click", function () {
  card.remove();  // This removes the glass-card div

  // Play romantic song
  const audio = document.createElement("audio");
  audio.src = "romantic.m4a"; // Make sure romantic.mp3 is in your project folder
  audio.autoplay = true;
  audio.loop = false;
  document.body.appendChild(audio);

  // Create the heart effect container
  const heartPattern = document.createElement('div');
  heartPattern.id = 'heartPattern';
  document.body.appendChild(heartPattern);

  // Create the "I love you too!" text and position it in the center
  const text = document.createElement("div");
  text.className = "love-text";
  text.innerText = "I love you too 😘💕";
  heartPattern.appendChild(text);

  // Function to create the sparkling heart emoji effect
  function createSparklingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";  // Use heart emoji

    // Randomize position anywhere in the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * (viewportWidth - 40)}px`;
    heart.style.top = `${Math.random() * (viewportHeight - 40)}px`;

    heart.style.setProperty('--randomX', Math.random().toFixed(2) * 2 - 1);
    heart.style.setProperty('--randomY', Math.random().toFixed(2) * 2 - 1);

    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }

  // Continuously create hearts at random intervals
  setInterval(() => {
    for (let i = 0; i < 4; i++) {
      createSparklingHeart();
    }
  }, 100);
});
