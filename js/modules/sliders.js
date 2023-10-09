function slider(
  offerSliderPrevp,
  offerSliderNextp,
  currentp,
  totalp,
  offerSlidep,
  offerSliderConteinerp,
  offerSliderWrapperp
) {
  // Slider

  const offerSliderPrev = document.querySelector(offerSliderPrevp);
  const offerSliderNext = document.querySelector(offerSliderNextp);
  const current = document.getElementById(currentp);
  const total = document.getElementById(totalp);
  const offerSlide = document.querySelectorAll(offerSlidep);
  const offerSliderConteiner = document.querySelector(offerSliderConteinerp);
  const offerSliderWrapper = document.querySelector(offerSliderWrapperp);
  let widthS = window.getComputedStyle(offerSliderWrapper).width;
  let width = parseInt(widthS);

  offerSliderConteiner.style.cssText = `display: flex; width: ${4 * width}px;`;
  offerSliderWrapper.style.cssText = "overflow: hidden; position: relative;";

  const carouselIndicators = document.createElement("div");
  carouselIndicators.classList.add("carousel-indicators");
  offerSliderWrapper.prepend(carouselIndicators);

  offerSlide.forEach((item) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    carouselIndicators.prepend(dot);
  });

  const dotArr = document.querySelectorAll(".dot");
  dotArr[0].style.cssText = "opacity: 0.9;";

  dotArr[0].classList.add("dot-one");
  dotArr[1].classList.add("dot-two");
  dotArr[2].classList.add("dot-three");
  dotArr[3].classList.add("dot-four");

  function showDotArr(index) {
    dotArr.forEach((item, i) => {
      if (i == index) {
        item.style.cssText = "opacity: 0.9;";
      } else {
        item.style.cssText = "";
      }
    });
  }

  carouselIndicators.addEventListener("click", (event) => {
    const target = event.target;

    offerSlide.forEach((item) => {
      if (target.closest(".dot-one")) {
        item.style.cssText = "transform: translate(0, 0); ";
        current.textContent = `01`;
        showDotArr(0);
      }
      if (target.closest(".dot-two")) {
        item.style.cssText = "transform: translate(-100%, 0);";
        current.textContent = `02`;
        showDotArr(1);
      }
      if (target.closest(".dot-three")) {
        item.style.cssText = "transform: translate(-200%, 0);";
        current.textContent = `03`;
        showDotArr(2);
      }
      if (target.closest(".dot-four")) {
        item.style.cssText = "transform: translate(-300%, 0);";
        current.textContent = `04`;
        showDotArr(3);
      }
    });
  });

  function showSliderNext() {
    let listIndex = +current.textContent;
    let staticIndex = +total.textContent;
    let index = listIndex;

    if (listIndex >= 1 && listIndex < staticIndex) {
      current.textContent = `0${++listIndex}`;
      offerSlide.forEach((item) => {
        item.style.cssText = `transform: translate(${-100 * index}%, 0);`;
      });
      showDotArr(index);
    } else {
      listIndex = 0;
      current.textContent = `0${++listIndex}`;
      offerSlide.forEach((item) => {
        item.style.cssText = `transform: translate(0, 0);`;
      });
      dotArr[0].style.cssText = "opacity: 0.9;";
      dotArr[3].style.cssText = "";
    }
  }

  function showSliderPrev() {
    let listIndex = +current.textContent;
    let staticIndex = +total.textContent;
    let index = listIndex;

    if (listIndex > 1 && listIndex <= staticIndex) {
      current.textContent = `0${--listIndex}`;
      index = --listIndex;
      offerSlide.forEach((item) => {
        item.style.cssText = `transform: translate(${-100 * index}%, 0);`;
      });
      showDotArr(index);
    } else {
      listIndex = 4;
      current.textContent = `0${listIndex}`;
      offerSlide.forEach((item) => {
        item.style.cssText = `transform: translate(-300%, 0);`;
      });
      dotArr[3].style.cssText = "opacity: 0.9;";
      dotArr[0].style.cssText = "";
    }

    return index;
  }

  offerSliderNext.addEventListener("click", (e) => {
    showSliderNext();
  });

  offerSliderPrev.addEventListener("click", (e) => {
    showSliderPrev();
  });
}

export default slider;
