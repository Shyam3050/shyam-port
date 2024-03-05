"use strict";

const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const userThemePreference =
  localStorage.getItem("theme") || (prefersDarkMode ? "dark" : "light");

const html = document.documentElement;
const themeBtn = document.querySelector("[data-theme-btn]");

html.dataset.theme = userThemePreference;

const changeTheme = () => {
  const selectedTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = selectedTheme;
  localStorage.setItem("theme", selectedTheme);
};
themeBtn.addEventListener("click", changeTheme);

// tab

const tabbtns = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTabBtn] = tabbtns;
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

tabbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const tabContent = document.querySelector(
      `[data-tab-content="${btn.dataset.tabBtn}"`
    );
    tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = tabContent;
    lastActiveTabBtn = this;
  });
});
