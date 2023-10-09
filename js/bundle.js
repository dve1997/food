/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
  // Calculator

  const calculatingField = document.querySelector(".calculating__field");
  const calculatingChooseItempol = document.querySelectorAll(
    ".calculating__choose-itempol"
  );
  const calculatingChooseItemact = document.querySelectorAll(
    ".calculating__choose-itemact"
  );
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const age = document.getElementById("age");
  const calculatingResult = document.querySelector(".calculating__result span");

  let heightR = 184;
  let weightR = 74;
  let ageR = 23;

  function showError() {
    const error = document.createElement("div");
    error.style.cssText = `text-align: center; padding-top: 20px;`;
    error.textContent = `Введите цифры`;
    document.querySelector(".calculating__choose_medium").after(error);
    setTimeout(() => error.remove(), 1500);
  }

  calculatingField.addEventListener("click", (event) => {
    let target = event.target;

    calculatingChooseItempol.forEach((item) => {
      if (target.closest("#woman") || target.closest("#man")) {
        item.classList.toggle("calculating__choose-item_active");
      }
    });

    calculatingChooseItemact.forEach((item) => {
      if (
        target.closest("#low") ||
        target.closest("#small") ||
        target.closest("#medium") ||
        target.closest("#high")
      ) {
        item.classList.remove("calculating__choose-item_active");
      }
      if (target.closest("#low") && item.closest("#low")) {
        item.classList.add("calculating__choose-item_active");
      }
      if (target.closest("#small") && item.closest("#small")) {
        item.classList.add("calculating__choose-item_active");
      }
      if (target.closest("#medium") && item.closest("#medium")) {
        item.classList.add("calculating__choose-item_active");
      }
      if (target.closest("#high") && item.closest("#high")) {
        item.classList.add("calculating__choose-item_active");
      }
    });

    calcCol();
  });

  height.addEventListener("input", (event) => {
    heightR = +event.target.value;
    if (isNaN(heightR)) {
      showError();
      event.target.value = "";
    }
    calcCol();
  });
  weight.addEventListener("input", (event) => {
    weightR = +event.target.value;
    if (isNaN(weightR)) {
      showError();
      event.target.value = "";
    }
    calcCol();
  });
  age.addEventListener("input", (event) => {
    ageR = +event.target.value;
    if (isNaN(ageR)) {
      showError();
      event.target.value = "";
    }
    calcCol();
  });

  function calcCol() {
    let resW;
    let resM;

    if (
      calculatingChooseItempol[0].matches(".calculating__choose-item_active")
    ) {
      if (
        calculatingChooseItemact[0].matches(".calculating__choose-item_active")
      ) {
        resW = (
          (447.6 + 9.2 * weightR + 3.1 * heightR + 4.3 * ageR) *
          1.2
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[1].matches(".calculating__choose-item_active")
      ) {
        resW = (
          (447.6 + 9.2 * weightR + 3.1 * heightR + 4.3 * ageR) *
          1.375
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[2].matches(".calculating__choose-item_active")
      ) {
        resW = (
          (447.6 + 9.2 * weightR + 3.1 * heightR + 4.3 * ageR) *
          1.55
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[3].matches(".calculating__choose-item_active")
      ) {
        resW = (
          (447.6 + 9.2 * weightR + 3.1 * heightR + 4.3 * ageR) *
          1.725
        ).toFixed(2);
      }
    }
    if (
      calculatingChooseItempol[1].matches(".calculating__choose-item_active")
    ) {
      if (
        calculatingChooseItemact[0].matches(".calculating__choose-item_active")
      ) {
        resM = (
          (88.36 + 13.4 * weightR + 4.8 * heightR + 5.7 * ageR) *
          1.2
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[1].matches(".calculating__choose-item_active")
      ) {
        resM = (
          (88.36 + 13.4 * weightR + 4.8 * heightR + 5.7 * ageR) *
          1.375
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[2].matches(".calculating__choose-item_active")
      ) {
        resM = (
          (88.36 + 13.4 * weightR + 4.8 * heightR + 5.7 * ageR) *
          1.55
        ).toFixed(2);
      }
      if (
        calculatingChooseItemact[3].matches(".calculating__choose-item_active")
      ) {
        resM = (
          (88.36 + 13.4 * weightR + 4.8 * heightR + 5.7 * ageR) *
          1.725
        ).toFixed(2);
      }
    }

    if (isNaN(resW) && isNaN(resM)) {
      calculatingResult.textContent = `___`;
    } else {
      calculatingResult.textContent = `${resW || resM}`;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ }),

/***/ "./js/modules/classes.js":
/*!*******************************!*\
  !*** ./js/modules/classes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classes() {
  // Classes

  class Product {
    constructor(src, alt, subtitle, descr, cost, total, currency, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.cost = cost;
      this.total = total;
      this.currency = currency;
      this.classes = classes;
    }

    createElem() {
      const div = document.createElement("div");
      if (this.classes.length === 0) {
        this.classes = "menu__item";
        div.classList.add(this.classes);
      } else {
        this.classes.forEach((item) => div.classList.add(item));
      }
      div.innerHTML = `
     <img src=${this.src} alt=${this.alt} />
     <h3 class="menu__item-subtitle">${this.subtitle}</h3>
     <div class="menu__item-descr">
       ${this.descr}
     </div>
     <div class="menu__item-divider"></div>
     <div class="menu__item-price">
       <div class="menu__item-cost">${this.cost}</div>
       <div class="menu__item-total"><span>${this.total}</span> ${this.currency}</div>
     </div>
   `;
      const container = document.querySelector(".menu__field .container");
      container.prepend(div);
    }
  }

  const getResurce = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error: ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  // Рабочая часть с fetch вместо axios
  // getResurce("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ src, alt, subtitle, descr, cost, total, currency }) => {
  //     new Product(
  //       src,
  //       alt,
  //       subtitle,
  //       descr,
  //       cost,
  //       total,
  //       currency
  //     ).createElem();
  //   });
  // });

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(
      ({ src, alt, subtitle, descr, cost, total, currency }) => {
        new Product(
          src,
          alt,
          subtitle,
          descr,
          cost,
          total,
          currency
        ).createElem();
      }
    );
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classes);


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forms() {
  // Forms

  const forms = document.querySelectorAll("form");
  const modalWin = document.querySelector(".modal");

  const messenges = {
    loading: "Идет загрузка...",
    load: "Данные загружены. Мы скоро с Вами свяжемся!",
    fail: "Возникла ошибка...",
  };

  const sendForm = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  function bindSendForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      sendForm("http://localhost:3000/requests", json)
        .then((json) => {
          messenge.remove();
          showMessengeForm(messenges.load);
          console.log(json);
        })
        .catch(() => {
          messenge.remove();
          showMessengeForm(messenges.fail);
        })
        .finally(() => {
          form.reset();
        });

      const messenge = document.createElement("div");
      messenge.textContent = messenges.loading;
      messenge.style.cssText = "text-align: center; margin-top: 10px;";
      form.after(messenge);
    });
  }

  forms.forEach((item) => {
    bindSendForm(item);
  });

  function showMessengeForm(res) {
    const modalDialog = document.querySelector(".modal__dialog");
    const modalContent = document.querySelector(".modal__content");
    modalContent.style.display = "none";

    const ShowMessenge = document.createElement("div");
    ShowMessenge.innerHTML = `
       <div class="modal__content">
       <div data-close class="modal__close">&times;</div>
       <div> ${res} </div>
       </div>
       `;
    ShowMessenge.style.cssText = "margin: 0px auto";
    modalDialog.append(ShowMessenge);

    setTimeout(() => {
      modalContent.style.display = "block";
      ShowMessenge.style.display = "none";
      modalWin.style.display = "none";
    }, 4000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {
  // Modal

  const btnCallOur = document.querySelectorAll("[data-modal]");
  const btnCross = document.querySelectorAll("[data-close]");
  const modalWin = document.querySelector(".modal");
  const btnDark = document.querySelector(".btn_dark");

  document.addEventListener("click", (event) => {
    let target = event.target;

    if (target.closest("[data-modal]")) {
      modalWin.style.display = "block";
    }

    if (target.closest(".btn_dark")) {
      modalWin.style.display = "block";
    }

    if (target.closest("[data-close]")) {
      modalWin.style.display = "none";
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code == "Escape") {
      modalWin.style.display = "none";
    }
  });

  // Рабочая часть
  // setTimeout(() => {
  //   modalWin.style.display = "block";
  // }, 10000);

  // window.addEventListener("scroll", (event) => {
  //   if (window.pageYOffset > 3613) {
  //     modalWin.style.display = "block";
  //   }
  // });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/sliders.js":
/*!*******************************!*\
  !*** ./js/modules/sliders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  // Slider

  const offerSliderPrev = document.querySelector(".offer__slider-prev");
  const offerSliderNext = document.querySelector(".offer__slider-next");
  const current = document.getElementById("current");
  const total = document.getElementById("total");
  const offerSlide = document.querySelectorAll(".offer__slide");
  const offerSliderConteiner = document.querySelector(
    ".offer__slider-conteiner"
  );
  const offerSliderWrapper = document.querySelector(".offer__slider-wrapper");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  // Tabs

  const tabContent = document.querySelectorAll(".tabcontent");
  const tabHeaderItems = document.querySelector(".tabheader__items");
  const tabHeaderItem = document.querySelectorAll(".tabheader__item");

  function noneTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
  }

  function showTacContent() {
    tabHeaderItem.forEach((item, i) => {
      if (item.classList.contains("tabheader__item_active")) {
        tabContent[i].style.display = "block";
      }
    });
  }

  noneTabContent();
  showTacContent();

  tabHeaderItems.addEventListener("click", (event) => {
    const target = event.target;

    noneTabContent();

    if (target.closest(".tabheader__item")) {
      tabHeaderItem.forEach((item) => {
        item.classList.remove("tabheader__item_active");
      });
    }

    target.classList.add("tabheader__item_active");
    showTacContent();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
  // Timer

  const deadline = "2023-10-10";

  function getCurrentDate(deadline) {
    let t = Date.parse(deadline) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function showTimer() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    return [days, hours, minutes, seconds];
  }

  const idTimer = setInterval(
    () => {
      let dateCongirable = getCurrentDate(deadline);
      let datePage = showTimer();

      if (dateCongirable.total < 0) {
        datePage[0].textContent = 0;
        datePage[1].textContent = 0;
        datePage[2].textContent = 0;
        datePage[3].textContent = 0;
        clearInterval(idTimer);
      }

      datePage[0].textContent = dateCongirable.days;
      datePage[1].textContent = dateCongirable.hours;
      datePage[2].textContent = dateCongirable.minutes;
      datePage[3].textContent = dateCongirable.seconds;
    },
    1000,
    getCurrentDate(deadline),
    showTimer()
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes */ "./js/modules/classes.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules//forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliders */ "./js/modules/sliders.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");










window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map