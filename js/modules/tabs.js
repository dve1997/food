function tabs(tabcontent, tabheaderItems, tabheaderItem) {
  // Tabs

  const tabContent = document.querySelectorAll(tabcontent);
  const tabHeaderItems = document.querySelector(tabheaderItems);
  const tabHeaderItem = document.querySelectorAll(tabheaderItem);

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

export default tabs;
