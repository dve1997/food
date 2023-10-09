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

module.exports = calculator;
