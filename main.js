// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
document.write("Завдання #1: ");
let num1 = 10;
let num2 = 20;
for (let i = num1; i <= num2; i++) {
  (i == num2) ?
    document.write(i + "<br>") :
    document.write(i + ", ");
}
document.write(" <br>");

// 2. Вивести квадрати чисел від 10 до 20.
document.write("Завдання #2: ");
for (i = num1; i <= num2; i++) {
  let res2 = Math.pow(i, 2);
  (i == num2) ?
    document.write(`${i}² = ${res2}<br>`) :
    document.write(`${i}² = ${res2}; `);
}
document.write(" <br>");

// 3. Вивести таблицю множення на 7.
document.write("Завдання #3: <br>");
let num3 = 1;
let num4 = 7;
for (i = num3; i <= num1; i++) {
  let res3 = i * num4;
  document.write(`${i} × ${num4} = ${res3} <br>`);
}
document.write(" <br>");

// 4. Знайти суму всіх цілих чисел від 1 до 15.
document.write("Завдання #4: ");
let num5 = 15;
let res4 = 0;
for (i = num3; i <= num5; i++) {
  res4 += i;
  (i == num5) ?
    document.write(`${i} = `) :
    document.write(`${i} + `);
}
document.write(res4 + " <br>");
document.write(" <br>");

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
document.write("Завдання #5: ");
let num6 = 35;
let res5 = 1;
for (i = num5; i <= num6; i++) {
  res5 *= i;
  (i == num6) ?
    document.write(`${i} = `) :
    document.write(`${i} × `);
}
document.write(res5 + " <br>");
document.write(" <br>");

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
document.write("Завдання #6: <br>");
let num7 = 500;
let sum6 = 0;
let res6 = 0;
document.write("Варіант 1: ");
document.write("(");
for (i = num3; i <= num7; i++) {
  sum6 += i;
  (i == num7) ?
    (res6 = sum6 / i,
      document.write(`${i}) ÷ ${i} = `)) :
    document.write(`${i} + `);
}
document.write(res6 + " <br>");
document.write("Варіант 2: ");
document.write(`(${num3} + ${num7}) ÷ 2 = ${res6} <br>`)
document.write(" <br>");

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
document.write("Завдання #7: ");
let num8 = 30;
let num9 = 80;
let res7 = 0;
for (i = num8; i <= num9; i++) {
  (i % 2 == 0) ?
    (res7 += i,
      document.write(i)) :
    document.write(" + ");
}
document.write(` = ${res7} <br>`);
document.write(" <br>");

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write("Завдання #8: ");
let num10 = 100;
let num11 = 200;
let amount8 = 0;
for (i = num10; i <= num11; i++) {
  (i % 3 == 0) ?
    (amount8++,
      document.write(i)) :
    document.write(" ");
}
document.write(`. Кількість таких чисел: ${amount8} <br>`);
document.write(" <br>");

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.
document.write("Завдання #9 #10 #11: ");
let num12 = +prompt("Введите натуральное число для Завдання #9");
let amount9 = 0;
let evenDivisor = [];
let sumEvenDivisor = 0;
document.write(`Число ${num12} має такі дільники: `);
for (i = num3; i <= num12; i++) {
  (num12 % i == 0) ?
    (amount9++,
      document.write(`${i}`)) :
    document.write(" ");
  (i == num12) ?
    document.write(",") :
    document.write(" ");
  (num12 % i == 0 && i % 2 == 0) ?
    (evenDivisor.push(i),
      sumEvenDivisor += i) :
    document.write(" ");
}
(evenDivisor.length == 0) ?
  document.write(` їх кількість: ${amount9} і у цього числа намає парних дільників. `) :
  document.write(` їх кількість: ${amount9}. З них парних дільників: ${evenDivisor.length} і це числа: ${evenDivisor.join(" ")}. Загальна сума парних дільників ${sumEvenDivisor} <br>`);
document.write("<br>");

// 12. Надрукувати повну таблицю множення від 1 до 10.
document.write("<br>Завдання #12: <br>");
let res12 = 0;
for (i = num3; i <= num1; i++) {
  for (j = num3; j <= num1; j++) {
    res12 = i * j;
    document.write(`${i} × ${j} = ${res12} <br>`);
  }
  document.write(" <br>");
}

//13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
document.write("<br>Завдання #13: ");
for (i = num2; i <= num8;) {
  document.write(`${i} `);
  i += 0.5;
}
document.write(" <br>");

//14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
document.write("<br>Завдання #14:<br>");
let dol = 27;
let uah = 0;
let step = 10;
document.write(`Курс 1$ - ${dol} грн.<br>Ціна за: <br>`);
for (i = num1; i <= num10;) {
  uah = i * dol;
  document.write(`${i}$ - ${uah} грн. <br>`);
  i += step;
}
document.write(" <br>");

// 15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
document.write("Завдання #15: ");
let num15 = +prompt("Введите ціле число для Завданнь #15 #16 #17");
for (i = num3; i <= num10; i++) {
  let res15 = Math.pow(i, 2);
  (res15 <= num15) ?
    document.write(`${i} `) :
    document.write(" ");
}
document.write(" <br>");

// 16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
document.write("<br>Завдання #16: ");
for (i = 2; i <= num1; i++) {
  let res16 = num15 % i;
  if (res16 == 0 && num15 > 2) {
    document.write(`${num15} - число не просте`);
    break;
  } else if (num15 == 1) {
    document.write(`${num15} - число не просте`);
    break;
  } else if (num15 == 2 || num15 == 3 || num15 == 5 || num15 == 7) {
    document.write(`${num15} - число просте `);
    break;
  } else if (i == num1 && res16 > 0) {
    document.write(`${num15} - число просте `);
    break;
  }
}
document.write(" <br>");

// 17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
document.write("<br>Завдання #17: ");
let deg = 0;
let num16 = num15;
while (num16 % 3 == 0) {
  num16 /= 3;
  deg++;
}
document.write((num16 == 1) ?
`3 в ${deg}-й ступені дорівнює ${num15}. Можливо получити.` :
`Число ${num15} не можливо получити з числа 3 в якійсь степені.`);