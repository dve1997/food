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

module.exports = classes;
