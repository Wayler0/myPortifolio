// const textArray = [
//     "Web Developer",
//     "Network Enthusiast",
//     "Tech Entrepreneur"
// ];

// let index = 0;
// let charIndex = 0;
// let currentText = "";
// let isDeleting = false;
// const typingSpeed = 100; // Typing speed (lower is faster)
// const deletingSpeed = 50; // Deleting speed
// const delayBetweenTexts = 2000; // Pause before deleting
// const typingElement = document.querySelector(".typing-text");

// function typeEffect() {
//     if (!typingElement) return;

//     if (isDeleting) {
//         currentText = textArray[index].substring(0, charIndex--);
//     } else {
//         currentText = textArray[index].substring(0, charIndex++);
//     }

//     typingElement.innerHTML = currentText + <span class="cursor">|</span>;

//     if (!isDeleting && charIndex === textArray[index].length) {
//         setTimeout(() => (isDeleting = true), delayBetweenTexts);
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         index = (index + 1) % textArray.length;
//     }

//     setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
// }

// document.addEventListener("DOMContentLoaded", typeEffect);
const aboutText = `
    Hey, I'm Wayler—a tech enthusiast with a passion for web development, networking, and entrepreneurship. 
    I'm currently studying Computer Science at Tharaka University while working on projects that solve real-world problems.
`;

let aboutIndex = 0;
const aboutElement = document.querySelector(".about-text");
const typewriterSound = document.getElementById("typewriter-sound");

function typeAbout() {
    if (!aboutElement) return;

    if (aboutIndex < aboutText.length) {
        aboutElement.innerHTML += aboutText.charAt(aboutIndex);
        aboutIndex++;

        // Play sound for each letter (small delay to avoid overlap)
        typewriterSound.currentTime = 0;
        typewriterSound.play();

        setTimeout(typeAbout, 50); // Typing speed (adjust if needed)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeAbout, 1000); // Delay before starting
});