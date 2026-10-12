let navbar = document.getElementById("totalnav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("load", function () {
  increaseNumberAnimation("nbr0", 4.9, 100, 0.1);
  increaseNumberAnimation("nbr1", 10, 100, 1);
  increaseNumberAnimation("nbr2", 15, 100, 1);
  increaseNumberAnimation("nbr3", 10, 100, 1);
});

function increaseNumberAnimation(elementId, endNumber, speed = 5, step = 1) {
  const element = document.getElementById(elementId);

  if (!element) return;

  const animationRunning = JSON.parse(
    element.dataset.animationRunning ?? false
  );

  if (animationRunning) return;

  element.dataset.animationRunning = true;

  incNbrRec(0, endNumber, element, speed, step);
}

function incNbrRec(currentNumber, endNumber, element, speed, step) {

  if (currentNumber <= endNumber) {

    element.innerHTML = currentNumber.toFixed(1);

    setTimeout(function () {
      incNbrRec(
        currentNumber + step,
        endNumber,
        element,
        speed,
        step
      );
    }, speed);

  } else {
    element.dataset.animationRunning = false;
  }
}


let index = 0;

    function showSlide() {
      const slides = document.getElementById("slides");
      slides.style.transform = `translateX(-${index * 700}px)`;
    }

    function nextSlide() {
      index++;
      if(index > 2){
        index = 0;
      }
      showSlide();
    }

    function prevSlide() {
      index--;
      if(index < 0){
        index = 2;
      }
      showSlide();
    }

    const container = document.querySelector(".gears");

function createGear(){

    const gear = document.createElement("i");

    gear.classList.add(
        "fa-solid",
        "fa-gear",
        "gear"
    );

    /* Random horizontal position */
    gear.style.left =
        Math.random() * 100 + "vw";

    /* Random size */
    const size =
        Math.random() * 20 + 10;

    gear.style.fontSize =
        size + "px";

    /* Random speed */
    const duration =
        Math.random() * 5 + 4;

    gear.style.animationDuration =
        `${duration}s, 3s`;

    container.appendChild(gear);

    /* Remove after animation */
    setTimeout(() => {
        gear.remove();
    }, duration * 1000);
}

/* Create continuously */
setInterval(createGear, 200);