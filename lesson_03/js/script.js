"use strict";

//======================= 00 ===========================

const button0 = document.getElementById("button0");
let result0 = document.getElementById("result0");
let firstChildName;
let secondChildName;
let nummOfCandiesOfFirstChild;
let nummOfCandiesOfSecondChild;
let res;

button0.addEventListener("click", () => {
  firstChildName = prompt("Ім'я першої дитини", "Юхим");
  secondChildName = prompt("Ім'я першої дитини", "Микита");
  nummOfCandiesOfFirstChild = parseInt(
    prompt("Введіть кількість цукерок в перщої дитини", 5)
  );
  nummOfCandiesOfSecondChild = parseInt(
    prompt("Введіть кількість цукерок в перщої дитини", 4)
  );
  if (nummOfCandiesOfFirstChild > nummOfCandiesOfSecondChild) {
    res = `Цукерок більше у ${firstChildName}`;
  } else if (nummOfCandiesOfFirstChild < nummOfCandiesOfSecondChild) {
    res = `Цукерок більше у ${secondChildName}`;
  } else {
    res = "Цукерок однаково";
  }
  result0.insertAdjacentHTML(
    "beforeend",
    `<div>
${res}
</div>`
  );
});

//======================= 01 ===========================

const button1 = document.getElementById("button1");
let result1 = document.getElementById("result1");
let totalSum;
let howMuchMoney;
const lotteryPrice = 4;
let res1;

button1.addEventListener("click", () => {
  totalSum = parseFloat(prompt("Введіть ціну товарів", 100));
  howMuchMoney = parseFloat(prompt("Скільки у вас грошей", 150));
  if (totalSum > howMuchMoney) {
    res1 = "У покупці відмовлено. Недостатньо коштів";
  } else if (totalSum + 4 > howMuchMoney) {
    res1 = "Дякуємо за покупку";
  } else {
    res1 = confirm("Бажаєте купити лотерейний білет за 4?")
      ? "Бажаємо виграти Джек-Пот"
      : "Азарт не Ваше";
  }
  alert(res1);
});

//======================= 02 ===========================

const button2 = document.getElementById("button2");
let result2 = document.getElementById("result2");
let res2;

button2.addEventListener("click", () => {
  const randomNum = 1 + Math.floor(Math.random() * 5);
  let firstTry = parseInt(prompt("Вгадайте число від 1 до 5", 2));
  if (firstTry === randomNum) {
    res2 = "Вітаємо! Ви вгадали з першого разу";
  } else {
    let secondTry = parseInt(prompt("Друга спроба", 3));
    if (secondTry === randomNum) {
      res2 = "Вітаємо! Ви вгадали з другого разу";
    } else {
      res2 = "Ви не вгадали";
    }
  }
  alert(res2);
  result2.insertAdjacentHTML(
    "beforebegin",
    `<div>
  Рандомне число = ${randomNum} <br> ${res2}
  </div>`
  );
});

//======================= 03 ===========================

const button3 = document.getElementById("button3");
let result3 = document.getElementById("result3");
let res3;

button3.addEventListener("click", () => {
  const userAge = parseInt(prompt("Введіть вік людини", 25));
  if (userAge < 7) {
    res3 = "дитина в садочку";
  } else if (userAge < 18) {
    res3 = "школяр";
  } else if (userAge < 24) {
    res3 = "студент";
  } else if (userAge < 60) {
    res3 = "працівник";
  } else if (userAge < 120) {
    res3 = "пенсіонер";
  } else {
    res3 = "динозавр";
  }

  result3.insertAdjacentHTML(
    "beforeend",
    `<div>
  Людина - ${res3}
  </div>`
  );
});

//======================= 04 ===========================

const button4 = document.getElementById("button4");
let result4 = document.getElementById("result4");
let res4;

button4.addEventListener("click", () => {
  const category = prompt("Введіть водійську категорію", "B");
  switch (category) {
    case "A":
      res4 = "мотоцикл";
      break;
    case "B":
      res4 = "легковий автомобіль";
      break;
    case "C":
      res4 = "вантажний автомобіль";
      break;
    default:
      res4 = "Невірно вказана категорія";
      break;
  }
  result4.insertAdjacentHTML(
    "beforeend",
    `<div>
  ${res4}
  </div>`
  );
});

//======================= 05 ===========================

const button5 = document.getElementById("button5");
let result5 = document.getElementById("result5");
let res5;

button5.addEventListener("click", () => {
  const numOfDay = parseInt(prompt("Введіть номер дня", 3));
  switch (numOfDay) {
    case 1:
      res5 = "понеділок";
      break;
    case 2:
      res5 = "вівторок";
      break;
    case 3:
      res5 = "середа";
      break;
    case 4:
      res5 = "четвер";
      break;
    case 5:
      res5 = "пятниця";
      break;
    case 6:
      res5 = "субота";
      break;
    case 7:
      res5 = "неділя";
      break;
    default:
      res5 = "Невірно вказано номер дня";
      break;
  }
  result5.insertAdjacentHTML(
    "beforeend",
    `<div>
    День під номером ${numOfDay} - ${res5}
    </div>`
  );
});

//======================= 06 ===========================

const button6 = document.getElementById("button6");
let result6 = document.getElementById("result6");
let res6;

button6.addEventListener("click", () => {
  const numOfMonth = parseInt(prompt("Введіть номер місяця", 3));

  if (numOfMonth > 0 && numOfMonth < 13) {
    if (numOfMonth < 3 || numOfMonth === 12) {
      res6 = "зима";
    } else if (numOfMonth < 6) {
      res6 = "весна";
    } else if (numOfMonth < 9) {
      res6 = "літо";
    } else {
      res6 = "осінь";
    }
  } else {
    res6 = "невірно вказаний номер місяця";
  }

  result6.insertAdjacentHTML(
    "beforeend",
    `<div>
   Місяць під номером ${numOfMonth} - ${res6}
    </div>`
  );
});

//=====================================================
