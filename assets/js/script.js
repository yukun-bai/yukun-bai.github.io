'use strict';

// Based on the vCard template script (MIT, codewithsadee); navigation and filters
// match on data-* attributes instead of button text so both languages work.

const root = document.documentElement;

const load = function (key) { try { return localStorage.getItem(key); } catch (e) { return null; } };
const save = function (key, value) { try { localStorage.setItem(key, value); } catch (e) { } };


// language
const langBtn = document.querySelector("[data-lang-btn]");

const setLang = function (lang) {
  root.lang = lang === "zh" ? "zh-CN" : "en";
  langBtn.textContent = lang === "zh" ? "EN" : "中文";
  document.title = lang === "zh" ? "白宇坤 · Yukun Bai" : "Yukun Bai · 白宇坤";
}

let lang = new URLSearchParams(location.search).get("lang") || load("lang") ||
  ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
setLang(lang);

langBtn.addEventListener("click", function () {
  lang = lang === "zh" ? "en" : "zh";
  setLang(lang);
  save("lang", lang);
});


// sidebar toggle for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { sidebar.classList.toggle("active"); });


// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const showPage = function (name) {
  let found = false;
  for (let i = 0; i < pages.length; i++) {
    const match = pages[i].dataset.page === name;
    pages[i].classList.toggle("active", match);
    found = found || match;
  }
  if (!found) return showPage("about");
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].classList.toggle("active", navigationLinks[i].dataset.target === name);
  }
}

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    showPage(this.dataset.target);
    history.replaceState(null, "", "#" + this.dataset.target);
    window.scrollTo(0, 0);
  });
}

showPage(location.hash.slice(1) || "about");
window.addEventListener("hashchange", function () { showPage(location.hash.slice(1)); });


// research filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selected) {
  for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].classList.toggle("active", selected === "all" || selected === filterItems[i].dataset.category);
  }
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].classList.toggle("active", filterBtn[i].dataset.filter === selected);
  }
}

select.addEventListener("click", function () { this.classList.toggle("active"); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    selectValue.innerHTML = this.innerHTML;
    select.classList.remove("active");
    filterFunc(this.dataset.filter);
  });
}

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    selectValue.innerHTML = this.innerHTML;
    filterFunc(this.dataset.filter);
  });
}


// project detail modal
const modalContainer = document.querySelector("[data-modal-container]");
const modalBody = document.querySelector("[data-modal-body]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const projectLinks = document.querySelectorAll("[data-project-open]");

const toggleModal = function (open) {
  modalContainer.classList.toggle("active", open);
  overlay.classList.toggle("active", open);
  document.body.classList.toggle("modal-open", open);
}

for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const detail = this.parentElement.querySelector("[data-project-detail]");
    modalBody.replaceChildren(detail.content.cloneNode(true));
    modalContainer.querySelector(".project-modal").scrollTop = 0;
    toggleModal(true);
  });
}

modalCloseBtn.addEventListener("click", function () { toggleModal(false); });
overlay.addEventListener("click", function () { toggleModal(false); });
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") toggleModal(false);
});
