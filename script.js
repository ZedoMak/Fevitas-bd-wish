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
setInterval(() => {
    plusSlides(1);
}, 5000);

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
        particleCount: 200,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#ff66b3', '#ff99cc', '#ff3385']
    });
    
    // Make the message disappear after 5 seconds
    setTimeout(() => {
        loveMessage.classList.remove('visible');
    }, 5000);
});