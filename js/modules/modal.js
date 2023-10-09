function modal(dataModalp, dataClosep, modalp, btnDarkp) {
  // Modal

  const btnCallOur = document.querySelectorAll(dataModalp);
  const btnCross = document.querySelectorAll(dataClosep);
  const modalWin = document.querySelector(modalp);
  const btnDark = document.querySelector(btnDarkp);

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

export default modal;
