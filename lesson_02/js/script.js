"use strict";

//======================= 00 ===========================

let button0 = document.getElementById("button0");
let result0 = document.getElementById("result0");
result0.insertAdjacentHTML("beforeend", ``);

button0.addEventListener("click", () => {
  let a = parseFloat(prompt("Введіть значення а", 10));
  let b = parseFloat(prompt("Введіть значення b", 5));
  let c = parseFloat(prompt("Введіть значення c", 2));
  const s1 = a + 12 + b;
  const s2 = Math.sqrt((a + b) / (2 * a));
  const s3 = Math.cbrt((a + b) * c);
  const s4 = Math.sin(a / -b);
  result0.insertAdjacentHTML(
    "beforeend",
    `<div>При а = ${a}, b = ${b}, c = ${c} <br> S1 = ${s1.toFixed(
      2
    )}, s2 = ${s2.toFixed(2)}, s3 = ${s3.toFixed(2)}, s4 = ${s4.toFixed(
      2
    )}</div>`
  );
});

//======================= 01 ===========================

let button1 = document.getElementById("button1");
let result1 = document.getElementById("result1");
result1.insertAdjacentHTML("beforeend", ``);

button1.addEventListener("click", () => {
  let a = parseFloat(prompt("Введіть значення а", 2));
  let b = parseFloat(prompt("Введіть значення b", 3));
  const summ = a + b;
  const division = a / b;
  const product = a * b;
  result1.insertAdjacentHTML(
    "beforeend",
    `<table>
<tr>
  <td>а = ${a}</td>
  <td>b = ${b}</td>
  <td></td>
</tr>
<tr>
  <td>сума = ${summ.toFixed(1)}</td>
  <td>частка = ${division.toFixed(1)}</td>
  <td>добуток = ${product.toFixed(1)}</td>
</tr>
</table>`
  );
});

//======================= 02 ===========================

let button2 = document.getElementById("button2");
let result2 = document.getElementById("result2");
result2.insertAdjacentHTML("beforeend", ``);

const currentYear = 2023;

button2.addEventListener("click", () => {
  const bornYear = parseInt(prompt("Введіть рік народження", 2000));
  const userAge = currentYear - bornYear;

  result2.insertAdjacentHTML(
    "beforeend",
    `<div>Ваш рік народження ${bornYear}, Поточний рік ${currentYear}<br> Вам ${userAge} років</div>`
  );
});

//======================= 03 ===========================

let button3 = document.getElementById("button3");
let result3 = document.getElementById("result3");
result3.insertAdjacentHTML("beforeend", ``);

const taxRate = 5;

button3.addEventListener("click", () => {
  const productPrice = parseFloat(prompt("Введіть ціну одиниці товару", 20));
  const productNum = parseInt(prompt("Введіть кількість одиниць товару", 10));
  const totalSum = (productPrice * productNum).toFixed(2);
  const taxSum = ((totalSum * taxRate) / 100).toFixed(2);

  result3.insertAdjacentHTML(
    "beforeend",
    `<div>Кількість одиниць товару - ${productNum}, Ціна одиниці товару - ${productPrice}, ПДВ - ${taxRate}% <br> Загальна вартість товарів ${totalSum}, Сума ПДВ = ${taxSum}</div>`
  );
});

//======================= 04 ===========================

let button4 = document.getElementById("button4");
let result4 = document.getElementById("result4");
result4.insertAdjacentHTML("beforeend", ``);
const meter = 100;
const kilometer = meter * 1000;

button4.addEventListener("click", () => {
  const numOfCentimeter = parseInt(
    prompt("Введіть кількість сантиметрів", 200)
  );
  const numOfMeter = numOfCentimeter / meter;
  const numOfKilometer = numOfCentimeter / kilometer;

  result4.insertAdjacentHTML(
    "beforeend",
    `<div>Кількість сантиметрів - ${numOfCentimeter}<br> Це = ${numOfMeter}м, Це = ${numOfKilometer}км</div>`
  );
});

//======================= 05 ===========================

let button5 = document.getElementById("button5");
let result5 = document.getElementById("result5");
result5.insertAdjacentHTML("beforeend", ``);

const minute = 60;
const hour = minute * 60;

button5.addEventListener("click", () => {
  const numOfSeconds = parseInt(prompt("Введіть кількість секунд", 2000));
  const numOfHours = Math.floor(numOfSeconds / hour);
  const numOfMinutes = Math.floor((numOfSeconds % hour) / minute);

  result5.insertAdjacentHTML(
    "beforeend",
    `<div>Кількість секунд = ${numOfSeconds}<br> Це ${numOfHours}год. і ${numOfMinutes}хв.</div>`
  );
});

//======================= 06 ===========================

let button6 = document.getElementById("button6");
let result6 = document.getElementById("result6");
result6.insertAdjacentHTML("beforeend", ``);

button6.addEventListener("click", () => {
  const randomNumOfMonth = 1 + Math.floor(Math.random() * (12 - 1 + 1));
  const randomNumOfDay = 0 + Math.floor(Math.random() * (6 - 0 + 1));

  const sum = randomNumOfMonth + randomNumOfDay;

  result6.insertAdjacentHTML(
    "beforeend",
    `<div>Рандомний номер місяця - ${randomNumOfMonth}, <br> Рандомний номер дня - ${randomNumOfDay} <br> Їх сума = ${sum}</div>`
  );
});
