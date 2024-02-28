document.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector(".logo");
  var banner = document.querySelector(".banner");
  logo.addEventListener("click", function () {
    banner.scrollIntoView({ behavior: "smooth" });
  });
});

const numberDisplayElement1 = document.getElementById("numberDisplay");
const numberDisplayElement2 = document.getElementById("yearDisplay");
const numberDisplayElement3 = document.getElementById("companyDisplay");

let currentNumber1 = 0;
let currentNumber2 = 0;
let currentNumber3 = 0;

const targetNumber1 = 224;
const targetNumber2 = 25;
const targetNumber3 = 100;

function updateNumbers() {
  if (currentNumber1 < targetNumber1) {
    currentNumber1 = currentNumber1 + 8;
    numberDisplayElement1.innerText = currentNumber1 + "K";
  }
  if (currentNumber2 < targetNumber2) {
    currentNumber2++;
    numberDisplayElement2.innerText = currentNumber2 + "+";
  }
  if (currentNumber3 < targetNumber3) {
    currentNumber3 = currentNumber3 + 5;
    numberDisplayElement3.innerText = currentNumber3 + "+";
  }
}
const intervalId = setInterval(updateNumbers, 50);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

document.getElementById("threeWheeler").onclick = threewheeler;

function threewheeler() {
  document.getElementById("threeWheeler").classList.add("options");
  document.getElementById("twoWheeler").classList.remove("options");
  document.getElementById("two-wheel-content").style.display = "none";
  document.getElementById("three-wheel-content").style.display = "block";
}

document.getElementById("twoWheeler").onclick = twowheeler;

function twowheeler() {
  document.getElementById("threeWheeler").classList.remove("options");
  document.getElementById("twoWheeler").classList.add("options");
  document.getElementById("two-wheel-content").style.display = "block";
  document.getElementById("three-wheel-content").style.display = "none";
}

const imgContainer = document.querySelector(".img-container");
const images = imgContainer.querySelectorAll(".slides");
const classes = ["first-img", "second-img", "third-img", "fourth-img"];
let currentIndex = 3;

setInterval(() => {
  images.forEach((img, i) => {
    const newIndex = (currentIndex + i) % 4;
    img.style.display = "block";
    img.className = classes[newIndex] + " slides";
  });
  currentIndex = (currentIndex - 1 + 4) % 4;
}, 5000);

document.getElementById("petrol").onclick = petrolSelected;
document.getElementById("diesel").onclick = dieselSelected;
document.getElementById("cng").onclick = cngSelected;
var fuel = "cng";

function petrolSelected() {
  document.getElementById("petrol").classList.add("selection");
  document.getElementById("diesel").classList.remove("selection");
  document.getElementById("cng").classList.remove("selection");
  console.log("Petrol is Selected");
  fuel = "petrol";
  slider.value = 0;
  var gradient = `linear-gradient(to right, #ed1c24 0%, #ed1c24 0%, #ffdfe0 0%, #ffdfe0 100%)`;
  slider.style.background = gradient;
  dayPrice.innerHTML = "₹ 00.00";
  yearPrice.innerHTML = "₹ 00.00";
}

function dieselSelected() {
  document.getElementById("petrol").classList.remove("selection");
  document.getElementById("diesel").classList.add("selection");
  document.getElementById("cng").classList.remove("selection");
  console.log("Diesel is Selected");
  fuel = "diesel";
  slider.value = 0;
  var gradient = `linear-gradient(to right, #ed1c24 0%, #ed1c24 0%, #ffdfe0 0%, #ffdfe0 100%)`;
  slider.style.background = gradient;
  dayPrice.innerHTML = "₹ 00.00";
  yearPrice.innerHTML = "₹ 00.00";
}

function cngSelected() {
  document.getElementById("petrol").classList.remove("selection");
  document.getElementById("diesel").classList.remove("selection");
  document.getElementById("cng").classList.add("selection");
  console.log("CNG is Selected");
  fuel = "cng";
  slider.value = 0;
  var gradient = `linear-gradient(to right, #ed1c24 0%, #ed1c24 0%, #ffdfe0 0%, #ffdfe0 100%)`;
  slider.style.background = gradient;
  dayPrice.innerHTML = "₹ 00.00";
  yearPrice.innerHTML = "₹ 00.00";
}

var slider = document.getElementById("myRange");
var dayPrice = document.getElementById("dayPrice");
var yearPrice = document.getElementById("yearPrice");
slider.oninput = function () {
  dayPrice.innerHTML = "₹ " + this.value;
  yearPrice.innerHTML = "₹ " + this.value;
  console.log(fuel);

  if (fuel === "petrol") {
    dayPrice.innerHTML = "₹ " + (this.value * 1.217664).toFixed(2);
    yearPrice.innerHTML = "₹ " + (this.value * 444.44736).toFixed(2);
  }
  if (fuel === "diesel") {
    dayPrice.innerHTML = "₹ " + (this.value * 1.140608).toFixed(2);
    yearPrice.innerHTML = "₹ " + (this.value * 416.32192).toFixed(2);
  }
  if (fuel === "cng") {
    dayPrice.innerHTML = "₹ " + (this.value * 1.32).toFixed(2);
    yearPrice.innerHTML = "₹ " + (this.value * 481.8).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("myRange");

  slider.addEventListener("input", function () {
    updateSliderColor();
  });

  function updateSliderColor() {
    var value = slider.value;
    var percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
    var gradient = `linear-gradient(to right, #ed1c24 0%, #ed1c24 ${percentage}%, #ffdfe0 ${percentage}%, #ffdfe0 100%)`;
    slider.style.background = gradient;
  }
});

const animatedElement1 = document.getElementById("animatedElement1");

function animateLeft() {
  animatedElement1.style.transform = "translateX(-72px)";
  setTimeout(() => {
    animateRight();
  }, 2000);
}

function animateRight() {
  animatedElement1.style.transform = "translateX(0)";
  setTimeout(() => {
    animateLeft();
  }, 2000);
}

animateLeft();

const animatedElement2 = document.getElementById("animatedElement2");

function animateUp() {
  animatedElement2.style.transform = "translateY(-64px)";
  setTimeout(() => {
    animateDown();
  }, 2000);
}

function animateDown() {
  animatedElement2.style.transform = "translateY(0)";
  setTimeout(() => {
    animateUp();
  }, 2000);
}

animateUp();

document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.querySelector(".quality-text-container");
  const divs = document.querySelectorAll(
    ".quality-text-container .quality-text-divs"
  );
  const logos = document.querySelectorAll(".quality-logo .quality-logos");

  let currentIndex = 0;
  let intervalId;

  // Function to toggle active class for logos
  function toggleLogos(index) {
    logos.forEach((logo, logoIndex) => {
      if (logoIndex === index) {
        logo.classList.add("active-logo");
      } else {
        logo.classList.remove("active-logo");
      }
    });
  }

  // Function to handle div click
  function handleDivClick(index) {
    divs.forEach((d, i) => {
      if (i === index) {
        d.classList.add("active-div");
        d.classList.remove("notActive-div");
      } else {
        d.classList.remove("active-div");
        d.classList.add("notActive-div");
      }
    });

    toggleLogos(index);
    currentIndex = index;

    // Clear the existing interval and restart it
    clearInterval(intervalId);
    startInterval();
  }

  // Function to start the automatic rotation interval
  function startInterval() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % divs.length;

      divs.forEach((div, index) => {
        if (index === currentIndex) {
          div.classList.add("active-div");
          div.classList.remove("notActive-div");
          toggleLogos(index);
        } else {
          div.classList.remove("active-div");
          div.classList.add("notActive-div");
        }
      });
    }, 4500);
  }

  // Initial setup to show the first logo and corresponding text
  toggleLogos(currentIndex);
  divs[currentIndex].classList.add("active-div");

  // Click event for quality-text-divs
  divs.forEach((div, index) => {
    div.addEventListener("click", function () {
      handleDivClick(index);
    });
  });

  // Start the automatic rotation interval
  startInterval();
});

const testimonyDivs = document.querySelector(".testimony-divs");
const dots = document.querySelectorAll(".dots");

let currentSlideIndex = 0; // Your existing currentIndex declaration
let testimoniesIntervalId; // Your existing intervalId declaration

function showTestimonies(index) {
  const translateValue = -index * 100; // Move 100% for each set
  testimonyDivs.style.transform = `translateX(${translateValue}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active-dots", i === index);
  });
}

function startAutoToggle() {
  testimoniesIntervalId = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % dots.length;
    showTestimonies(currentSlideIndex);
  }, 4500);
}

startAutoToggle();

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(testimoniesIntervalId);
    currentSlideIndex = i;
    showTestimonies(currentSlideIndex);
    startAutoToggle();
  });
});
