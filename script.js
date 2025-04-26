// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

// Pause slideshow when hovering
const slideshow = document.querySelector('.slideshow-container');
slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slideshow.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
});

// Confetti Effect
const confettiBtn = document.querySelector('.confetti-btn');
confettiBtn.addEventListener('click', () => {
    // Big explosion
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff66b3', '#99ccff', '#ffcc99', '#ff3385']
    });
    
    // Smaller additional bursts
    setTimeout(() => confetti({
        particleCount: 100,
        spread: 60,
        origin: { x: 0.3, y: 0.7 },
        colors: ['#ff66b3', '#ff99cc']
    }), 300);
    
    setTimeout(() => confetti({
        particleCount: 100,
        spread: 60,
        origin: { x: 0.7, y: 0.7 },
        colors: ['#99ccff', '#ffcc99']
    }), 600);
    
    // Create floating hearts
    createHearts(20);
});

// Typewriter Poem Effect
const poem = document.querySelector('.poem');
const originalPoem = poem.innerHTML;
poem.innerHTML = '';

let i = 0;
const speed = 50;

function typeWriter() {
    if (i < originalPoem.length) {
        poem.innerHTML += originalPoem.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 1000);

// Gift Box - Love Message
const giftBox = document.getElementById('giftBox');
const loveMessage = document.getElementById('loveMessage');

giftBox.addEventListener('click', () => {
    loveMessage.classList.add('visible');
    
    // Trigger extra confetti for the love message
    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.3 },
        colors: ['#ff66b3', '#ff3385', '#ff99cc']
    });
    
    // Create floating hearts
    createHearts(30);
    
    // Make the message disappear after 5 seconds
    setTimeout(() => {
        loveMessage.classList.remove('visible');
    }, 5000);
});

// Floating Hearts Animation
function createHearts(count) {
    const container = document.querySelector('.hearts-container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position
        const startPositionX = Math.random() * 100;
        const startPositionY = Math.random() * 100;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        // Random size
        const size = Math.random() * 10 + 10;
        
        // Random color
        const colors = ['#ff66b3', '#ff99cc', '#ff3385', '#d9b3ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        heart.style.left = `${startPositionX}%`;
        heart.style.top = `${startPositionY}%`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.background = color;
        heart.style.setProperty('--pink', color);
        
        // Animation
        heart.style.animation = `floatUp ${duration}s ease-in forwards`;
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// Add CSS for heart animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(45deg) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
            transform: translateY(-20px) rotate(45deg) scale(1);
        }
        100% {
            transform: translateY(-100vh) rotate(45deg) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create some initial floating hearts
setInterval(() => {
    createHearts(3);
}, 2000);