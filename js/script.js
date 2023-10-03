"use strict";

window.addEventListener("DOMContentLoaded", () => {
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

  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 3613) {
      modalWin.style.display = "block";
    }
  });
});
