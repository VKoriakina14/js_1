// 1. Чи буде вивенено "Привіт"? 
/* if ("") {
    console.log("Привіт");
} */

// 2. Яке значення у с? 
/* let e = 2;
let b = 1;
let c;
console.log(c); */


// 3. Який буде результат виразів? 
/* console.log(5 > 4);
console.log("Ananas" > "Mango");
console.log("2" > "12");  // 50 > 49 = true
console.log(undefined == null);
console.log(undefined === null); */


// 4. Які кінцеві значення всіх змінних а та x після виконання коду? 
/* let a = 2;
let x = 1 + (a * 2);
console.log(`a = ${a}`);
console.log("x = " + x); */


// 5. Які кінцеві значення всіх змінних q, r, w та d після виконання коду? 
/* let q = 1; 
let r = 1;
let w = ++q; 
let d = r++; 

console.log("q = " + q);
console.log("r = " + r);
console.log("w = " + w);
console.log("d = " + d)
 */

// Цікавий приклад використання префіксного та постфіксного інкремента

/* let a = 1;
let b = 1;

if (++a === 2 && b++ === 1) {
    console.log("Обидві умови виконані!");
}

console.log("a = " + a); 
console.log("b = " + b);  */


/* Цикли 
Цикл - керуюча конструкція у високорівневих мовах програмування, призначена для організації
багаторазового виконання набору інструкцій.

Тіло циклу - послідовність інструкцій, призначена для багаторазового виконання.

Ітерація - одноразове виконання тіла циклу.

Умова виходу - вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.

Лічильник - змінна, що зберігає поточний номер ітерації. 

Цикл не обов'язково містить лічильник, і він не повинен бути один, умова виходу з циклу може залежати
від декількох змінних, що змінюються в циклі.
 */



// While 

/* Цикл з передумовою — цикл, який виконується, доки правдива якась умова, зазначена до його початку.
 Ця умова перевіряється до виконання тіла циклу, тому тіло може не виконатися жодного разу, якщо
умова від самого початку - хибна. */

/* while (condition) {
  // код, тіло циклу (statement)
} */




/* let i = 0;
while (i < 10) {
    console.log('i= ' + i);
} */


// може цикл і не початися
/* while (false) {
    console.log('Hello JS');
} 
   console.log('Bye-bye JS') 
 */

/* while (true) {
    console.log('Hello JS');
    break; 
} 
   console.log('Bye-bye JS') 
 */

// тому, циклу потрібно розуміти, коли він зупиниться, наприклад, коли настане false
/* let i = 10;
while (i) {
    console.log(i);
    i--;
} */


 //  Створимо лічильник.


/*   let counter = 0;

  while (counter < 10) {
    console.log("counter: ", counter);
    counter += 1;
  } */
  

// Будемо заповнювати місця в готелі доти, доки поточна кількість клієнтів не буде дорівнювати максимально можливій.

/* let clientCounter = 18;
const maxClients = 25;

while (clientCounter  < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
} */



 // Do...while​

 /* Цикл з постумовою - цикл, в якому умова перевіряється після виконання тіла циклу. 
 З цього випливає, що тіло завжди виконується хоча б один раз.
 */

/* do {
  // statement
} while (condition);
 */

/* let i = 0;
do {
    i += 2;
    console.log("i = " + i);
} while (i < 5);

console.log("Після закінчення циклу i = " + i); */


/* do {
    console.log("Hello JS!");
} while (false); */


// на практиці, як може виглядати: 

let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);




//For

/* Цикл з лічильником - цикл, в якому певна змінна змінює своє значення із заданого початкового
до кінцевого значення з деяким кроком, і для кожного значення цієї змінної тіло циклу виконується один раз.

В більшості процедурних мов програмування реалізується конструкцією for, в якій зазначається лічильник,
необхідна кількість ітерацій і крок, з яким змінюється лічильник. */

/* for (initialization; condition; post-expression) {
    // statements
  }
*/


// Приклад: 

/* for (let i = 0; i <= 20; i += 5) {
    console.log(i);
  } */
  

// Порахуємо суму чисел до певного значення.

/* const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
 */


// Згадаємо про операцію a % b і виведемо остачу від ділення за допомогою циклу.

/* const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
 */


/* Оператор break​

Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, 
який повністю припиняє виконання циклу і передає управління на рядок після його тіла.

Знайдемо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

 */

/* for (let i = 0; i <= 5; i += 1) {
    console.log(i);
  
    if (i === 3) {
      console.log("Знайшли число 3, перериваємо виконання циклу");
      break;
    }
  }
  
  console.log("Лог після циклу");
   */



/* Оператор continue​

Перериває не увесь цикл, а тільки виконання поточної ітерації. 
Його використовують, якщо зрозуміло, що на поточній ітерації циклу більше немає 
що робити або взагалі не потрібно нічого робити, і час переходити до наступної ітерації. */

/* Використовуємо цикл для введення тільки непарних чисел. Для парних i спрацьовує continue, 
виконання тіла припиняється і управління передається до наступної ітерації. */

/* const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
} */


// Створимо таблицю множення на 5 

/* let number = 5; 
for(let i = 0; i <= 9; i++) {
    console.log(`Результат множення ${number} * ${i} = ${number * i}`)
} */


// цикл в циклі

/* for(let i = 1; i <= 9; i++) {
        for(let j =1; j <= 9; j++) {
        console.log(`Результат множення ${i} * ${j} = ${i * j}`)
        }

    console.log("------------------------------------")
}
 */

// Мітки для циклів

/* Мітки (labels) для циклів в JavaScript - це іменовані мітки, 
які можна використовувати для змінення поведінки циклів.  */

/* outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        continue innerLoop; // Пропустити поточну ітерацію innerLoop
      }
      if (i === 2 && j === 2) {
        break outerLoop; // Вийти з обох циклів
      }
      console.log(`i=${i}, j=${j}`);
    }
  } */




// ФУНКЦІЇ

/* Функція - це підпрограма, незалежна частина коду, призначена 
для багаторазового виконання конкретної задачі з різними початковими значеннями.
Функції дозволяють структурувати великі програми, зменшують повторення та ізолюють код. */

// Оголошення фунції


// 1. Оголошення функції multiply
/* function multiply() {
    // Тіло функції
    console.log("Це лог на момент виклику функції multiply");
  }
  
  // 2. Виклики функції multiply
  multiply(); // 'Це лог на момент виклику функції multiply'
  multiply(); // 'Це лог на момент виклику функції multiply'
  multiply(); // 'Це лог на момент виклику функції multiply'
   */


/*   Параметри - це локальні змінні, доступні тільки у тілі функції. Вони розділяються комами. 
  Параметрів може бути декілька, або взагалі не бути,
  у такому випадку записуються просто порожні круглі дужки. */


/*  // 1. Оголошення параметрів x, y, z
function multiply(x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  }
  
  // 2. Передача аргументів
  multiply(2, 3, 5); // Результат множення дорівнює 30
  multiply(4, 8, 12); // Результат множення дорівнює 384
  multiply(17, 6, 25); // Результат множення дорівнює 2550 */
    



/* Повернення значення

Оператор return використовується для передачі значення з тіла функції у зовнішній код. 
Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), 
і повертає вказане значення у те місце коду, де була викликана функція.
 */

/* function multiply(x, y, z) {
    console.log("Код до return виконується звичайним чином");
  
    // Повертаємо результат виразу множення
    return x * y * z;
  
    console.log("Цей лог ніколи не виконається, він стоїть після return");
  }
  
  // Результат роботи функції можна зберегти у змінну
  let result = multiply(2, 3, 5);
  console.log(result); // 30
  
  result = multiply(4, 8, 12);
  console.log(result); // 384
  
  result = multiply(17, 6, 25);
  console.log(result); // 2550
   */


// може бути більше одного return

/* function checkAge (){
    let age = 10
    if(age >= 18){
        return console.log("Є дозвіл");
    }
    else{
        return console.log("Спитай батьків")
    }
}

checkAge(); */

// Порядок виконання коду


/*   function multiply(x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  }
  
  console.log("Лог до виклику функції multiply");
  multiply(2, 3, 5); // Результат множення дорівнює 30
  console.log("Лог після виклику функції multiply");
  
  // Послідовність логів в консолі
  // "Лог до виклику функції multiply"
  // "Результат множення дорівнює 30"
  // "Лог після виклику функції multiply"
   */


  // Параметри за замовчуванням

/*   function count(countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
    for (let i = countFrom; i <= countTo; i += step) {
      console.log(i);
    }
  }
  
  count(1, 5); // countFrom = 1, countTo = 5, step = 1
  count(2); // countFrom = 2, countTo = 10, step = 1
  count(); // countFrom = 0, countTo = 10, step = 1 */
  

  // Псевдомасив arguments​

 /*  Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом, 
 але відсутністю більшості методів для роботи з масивом.
 */


/*  function multiply() {
    let total = 1;
  
    for (const argument of arguments) {
      total *= argument;
    }
  
    return total;
  }
  
  console.log(multiply(1, 2, 3)); //  6
  console.log(multiply(1, 2, 3, 4)); //  24
  console.log(multiply(1, 2, 3, 4, 5)); //  120
   */




// Функціональний вираз


/* Функціональний вираз (function expression) - звичайне оголошення змінної, 
значенням якої буде функція. Альтернативний спосіб оголошення функції. */
/* 
// Оголошення функції (function declaration)
function multiply(x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  }
  
  // Функціональний вираз (function expression)
  const multiply = function (x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
  }; */
  

// Різниця в тому, що функціональний вираз не можна викликати до місця його створення,
//  тільки після нього, тому що це буквально оголошення const змінної.

/* // Помилка! Не працює виклик до оголошення
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};

//  Працює виклик після оголошення
multiply(4, 5, 6);
 */
 
// A оголошення функції можна викликати до місця її створення в коді.

/* 
// Працює виклик до оголошення
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);
 */



// Стрілкові фунуції

/* 
// Звичайне оголошення функції
function classicAdd(a, b, c) {
    return a + b + c;
  }
  
  // Те саме стрілочною функцією
  const arrowAdd = (a, b, c) => {
    return a + b + c;
  }; */


  
// Якщо параметр один, його можна оголошувати без круглих дужок.
/* const add = a => {
    return a + 5;
  }; */
  
// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
/* const greet = () => {
    console.log("Привіт!");
  }; */
  


// callback (функція що визиває функцію)

/* function greet(name) {
    return `Ласкаво просимо ${name}.`;
  }
  
  // Викликаємо функцію greet і виводимо результат у консоль
  console.log(greet("Манго")); // Ласкаво просимо Манго.
  
  // Виводимо функцію greet у консоль, не викликаючи її
  console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; } */
  


/*   Функція зворотного виклику (callback, колбек) - це функція,
яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію. */

/* // Колбек-функція
function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
  }
  
  // Функція вищого порядку
  function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
  }
  
  registerGuest("Манго", greet);
   */


  // Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback 
  // і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека 
  // може бути довільним, головне пам'ятати, що значенням буде функція.



 