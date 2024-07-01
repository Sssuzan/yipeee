document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");

    const bubbleContainer = document.querySelector('.bubble-container');
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    // Predefined array of vibrant colors
    const vibrantColors = [
        '#FF5733', // Red-Orange
        '#FFBD33', // Yellow-Orange
        '#DBFF33', // Lime
        '#75FF33', // Green
        '#33FF57', // Green-Cyan
        '#33FFBD', // Cyan
        '#33DBFF', // Light Blue
        '#3375FF', // Blue
        '#5733FF', // Indigo
        '#BD33FF', // Purple
        '#FF33DB', // Pink
        '#FF3375'  // Magenta
    ];

    function createBubble(container) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random duration between 10s and 20s
        bubble.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5s

        // Select a random color from the vibrant colors array
        const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
        bubble.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.336) 20%, ${randomColor} 100%)`;

        container.appendChild(bubble);

        // Remove the bubble after it completes its animation
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });

        // Add click event to score points and play popping animation
        bubble.addEventListener('click', () => {
            bubble.classList.add('pop'); // Add pop class to play animation
            score += 1;
            scoreDisplay.textContent = score;
            // Create splash effect
            createSplash(bubble);
            // Remove the bubble after the pop animation completes
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        });
    }

    function createSplash(bubble) {
        const splash = document.createElement('div');
        splash.classList.add('splash');
        splash.style.width = `${bubble.offsetWidth}px`;
        splash.style.height = `${bubble.offsetHeight}px`;
        splash.style.left = `${bubble.offsetLeft}px`;
        splash.style.top = `${bubble.offsetTop}px`;
        splash.style.backgroundColor = bubble.style.backgroundColor;
        bubble.parentElement.appendChild(splash);

        // Remove the splash after the animation completes
        splash.addEventListener('animationend', () => {
            splash.remove();
        });
    }

    // Create bubbles continuously in the background container
    setInterval(() => createBubble(bubbleContainer), 500);

    // Create bubbles continuously in the game container
    setInterval(() => createBubble(gameContainer), 1000);
});

