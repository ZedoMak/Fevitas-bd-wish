// Confetti Effect
const confettiBtn = document.querySelector('.confetti-btn');
confettiBtn.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff66b3', '#99ccff', '#ffcc99']
    });
});

// Typewriter Poem Effect
const poem = document.querySelector('.poem');
const originalPoem = poem.innerHTML;
poem.innerHTML = '';

let i = 0;
const speed = 50; // Typing speed (ms per letter)

function typeWriter() {
    if (i < originalPoem.length) {
        poem.innerHTML += originalPoem.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing after 1 second
setTimeout(typeWriter, 1000);