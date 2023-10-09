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

module.exports = modal;
