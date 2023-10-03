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

  const fitnes = new Product(
    "./img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    "Цена:",
    "229",
    "грн/день",
    "menu__item",
    "big"
  );
  fitnes.createElem();
  const premium = new Product(
    "./img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    "Цена:",
    "550",
    "грн/день"
  );
  premium.createElem();
  const postn = new Product(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    "Цена:",
    "430",
    "грн/день"
  );
  postn.createElem();

  // Forms

  const forms = document.querySelectorAll("form");

  const messenges = {
    loading: "Идет загрузка...",
    load: "Данные загружены. Мы скоро с Вами свяжемся!",
    fail: "Возникла ошибка...",
  };

  function sendForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const obj = {};
      formData.forEach((item, i) => {
        obj[i] = item;
      });

      // Рабочая часть XMLHttpRequest
      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");
      // request.setRequestHeader("Content-type", "application/json");
      // request.send(json);

      fetch("server.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((data) => data.text())
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

      // Рабочая часть XMLHttpRequest
      // request.addEventListener("load", (e) => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     messenge.remove();
      //     form.reset();
      //     showMessengeForm(messenges.load);
      //   } else {
      //     messenge.remove();
      //     form.reset();
      //     showMessengeForm(messenges.fail);
      //   }
      // });
    });
  }

  forms.forEach((item) => {
    sendForm(item);
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
});
