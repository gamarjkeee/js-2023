"use strict";

//--------------- створення пунктів меню ---------------------------

const quantityOfMenuItems = 7;
const headerMenu = document.querySelector(".menu-header__list");

for (let i = 0; i < quantityOfMenuItems; i++) {
  let numberOfItem;
  if (i < 10) {
    numberOfItem = "0" + i;
  } else {
    numberOfItem = i;
  }
  let itemOfMenu = `<li class="menu-header__item">
  <a href="#task-${numberOfItem}" class="menu-header__link">task-${numberOfItem}</a>
  </li>`;
  headerMenu.insertAdjacentHTML("beforeend", itemOfMenu);
}

//----------- додавання відступів враховуючи висоту хедера ---------

const headerHeigth = document.querySelector(".header").clientHeight;
const page = document.querySelector(".page");
const tasks = document.querySelectorAll(".item-page");

page.style.paddingTop = `${headerHeigth + 40}px`;
tasks.forEach((element) => {
  element.style.paddingTop = `${headerHeigth}px`;
  element.style.marginTop = `${headerHeigth * -1}px`;
});

//------------------- нумеруємо завдання ---------------------------

for (let index = 0; index < tasks.length; index++) {
  const task = tasks[index];
  let numOfItem;
  if (index < 10) {
    numOfItem = "0" + index;
  } else {
    numOfItem = index;
  }
  let count = `<div class="item-page__count" style="top:${
    headerHeigth + 20
  }px;">task-${numOfItem}</div>`;
  task.insertAdjacentHTML("beforeend", count);
}

//-------------------------------------------------------------------
