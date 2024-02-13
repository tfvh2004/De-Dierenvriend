TweenMax.defaultEase = Linear.easeOut;

// Check screen width and set navigation option accordingly
const screenWidth = window.innerWidth;
const navigationEnabled = screenWidth > 428;

// Variable to hold fullpage.js instance
let myFullpageInstance;

myFullpageInstance = new fullpage("#fullpage", {
  // Options here
  autoScrolling: true,
  navigation: navigationEnabled, // Set navigation based on screen width
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});

// Function to scroll to section
function scrollToSection(sectionIndex) {
    myFullpageInstance.moveTo(sectionIndex);
}
