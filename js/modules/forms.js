function forms() {
  // Forms

  const forms = document.querySelectorAll("form");

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

module.exports = forms;
