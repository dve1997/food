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
  forms();
  modal();
  sliders();
  tabs();
  timer();
});
