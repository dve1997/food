"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const calculator = require("./modules/calculator");
  const classes = require("./modules/classes");
  const forms = require("./modules//forms");
  const modal = require("./modules/modal");
  const sliders = require("./modules/sliders");
  const tabs = require("./modules/tabs");
  const timer = require("./modules/timer");

  calculator();
  classes();
  forms();
  modal();
  sliders();
  tabs();
  timer();
});
