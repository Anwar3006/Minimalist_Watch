// get all elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const moonWatch = document.getElementById("moonWatch");

// add event listener
document.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

var screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

if (screenWidth <= 576) {
  console.log(screenWidth);
  moonWatch.innerHTML = "Moon</br>watch.";
} else {
  moonWatch.innerHTML = "Moonwatch.";
}

// GSAP Animations
gsap.from([".logo", ".year"], 1, {
  opacity: 0,
  x: -30,
  ease: Expo.easeInOut,
});

gsap.from(".primaryNav a", 1, {
  opacity: 0,
  x: -30,
  stagger: 0.08,
  ease: Power3.easeInOut,
});

gsap.from(".search", 1, {
  opacity: 0,
  y: -30,
  delay: 0.5,
  ease: Expo.easeInOut,
});

// Animation for image
const images = [
  // Add more image URLs as needed
  "./Media/LP_watch1.png",
  "./Media/LP_watch2.png",
  "./Media/LP_watch3.png",
  "./Media/LP_watch4.png",
  "./Media/LP_watch5.png",
  "./Media/LP_watch6.png",
  "./Media/LP_watch7.png",
  "./Media/LP_watch8.png",
  "./Media/LP_watch9.png",
  "./Media/LP_watch10.png",
];

let currentIndex = 0;

function changeImage() {
  // Reset image properties
  gsap.set("#watchImage", { opacity: 0, y: -800 });

  // Change image source
  document.getElementById("watchImage").src = images[currentIndex];

  // Animate new image
  gsap.to("#watchImage", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    onComplete: () => {
      // Increment index or reset to 0 if at the end
      currentIndex = (currentIndex + 1) % images.length;

      // Repeat the process every few seconds (adjust delay as needed)
      gsap.delayedCall(4, changeImage);
    },
  });
}

// Initial call to start the animation
changeImage();
// Animation for image end

gsap.from(".line-1", 1, {
  opacity: 0,
  delay: 0.8,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".line-2", 1, {
  opacity: 0,
  delay: 1,
  y: -800,
  ease: Expo.easeInOut,
});

gsap.from(".title", 1, {
  opacity: 0,
  delay: 1.2,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});
gsap.from(".order", 1, {
  opacity: 0,
  delay: 1.4,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});

gsap.from(".socials", 1, {
  opacity: 0,
  delay: 2.4,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});
