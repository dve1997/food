"use strict";

import calculator from "./modules/calculator";
import classes from "./modules/classes";
import forms from "./modules//forms";
import modal from "./modules/modal";
import sliders from "./modules/sliders";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  calculator();
  classes();
  forms("form", ".modal");
  modal("[data-modal]", "[data-close]", ".modal", ".btn_dark");
  sliders(
    ".offer__slider-prev",
    ".offer__slider-next",
    "current",
    "total",
    ".offer__slide",
    ".offer__slider-conteiner",
    ".offer__slider-wrapper"
  );
  tabs(".tabcontent", ".tabheader__items", ".tabheader__item");
  timer("2023-10-10");
});
