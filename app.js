// Initialize fullpage.js
let myFullpageInstance;

document.addEventListener("DOMContentLoaded", function () {
  // Check screen width and set navigation option accordingly
  const screenWidth = window.innerWidth;
  const navigationEnabled = screenWidth > 428;

  // Variable to hold fullpage.js instance
  myFullpageInstance = new fullpage("#fullpage", {
    // Options here
    autoScrolling: true,
    navigation: navigationEnabled, // Set navigation based on screen width
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("h1");

      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });

      const icon = section.querySelector(".chair");
      if (icon) {
        tl.fromTo(icon, 0.7, { x: "100%", opacity: 0 }, { x: "-10%", opacity: 1 });
      }

      const description = section.querySelector(".description");
      if (description) {
        tl.fromTo(description, 0.5, { opacity: 0, y: "50" }, { y: "0", opacity: 1 });
      }
    },
    touchSensitivity: 10, // Set touch sensitivity to handle touch events better
    scrollingSpeed: 700 // Set scrolling speed for smoother scrolling experience
  });

  // Function to scroll to section
  function scrollToSection(sectionIndex) {
    myFullpageInstance.moveTo(sectionIndex);
  }
});
