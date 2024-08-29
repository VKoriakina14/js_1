//1. Яке останне значення буде виведено на екран? Чому? 
let i = 7;

while (i){
    console.log(i--);
}

console.log("i = " + 1);

//2. Яке значення виведе цикл while?

let w = 0;
while (w++ < 5) {
    console.log(w);
}

let q = 0;
while(q++ < 5) {
    console.log(q);
}

// Змінна q ініціалізується значенням 0
// q дорівнює 0, умова 0 < 5 істинна, q стає 1, виводиться 1.
// q дорівнює 1, умова 1 < 5 істинна, q стає 2, виводиться 2.
// q дорівнює 2, умова 2 < 5 істинна, q стає 3, виводиться 3.
// q дорівнює 3, умова 3 < 5 істинна, q стає 4, виводиться 4.
// q дорівнює 4, умова 4 < 5 істинна, q стає 5, виводиться 5.
// q дорівнює 5, умова 5 < 5 хибна, цикл завершується.


// 3. Чи потрібен else?

function checkAge(age) {
    if (age) {
        return true
    } else {
        return console.log("Питай батьків")
    }
}

checkAge(10);

// 4. Цей цикл безкінечний. Він ніколи не закінчується. Чому? 

let j = 0;
while (j != 10) {
    j += 0.2;
}

// 5. Що буде виведено у консоль?

for(let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


// 6. Що буде виведено у консоль? 

let a = 10;
do {
    a += 1;
    console.log(a);
} while (a < 5);


// 7. Що буде виведено у консоль? 

let b = 10;
if (b) {
    let b = 3;
    b *=b;
}
console.log(b);

// 8. Що буде виведено у консоль? 

function sum (num1, num2 = num1) {
console.log(num1 + num2);
}

sum(10);
sum(10, 5);

//------------------------------------------

// Які в нас є типи даних? Як вони називаються? 

/* ---- Методи примітивів! ----

Примітивні типи даних — це типи, які є базовими і не можуть бути розбиті на складові. 
Вони є найпростішими типами даних і зберігають значення без додаткових методів або властивостей. 

Number: Представляє числові значення (цілі числа і числа з плаваючою комою), наприклад, 42 або 3.14.
String: Представляє рядки символів, наприклад, "Hello, world!".
Boolean: Представляє логічні значення true або false.
Undefined: Означає, що змінна була оголошена, але не має значення. 
Null: Означає навмисну відсутність будь-якого об'єкта або значення.
Symbol: Представляє унікальне і незмінне значення.
BigInt: Представляє цілі числа довільної довжини. 
*/


/* ---- Методи Number ----

В JavaScript тип Number має різні методи для роботи з числами. 
Ці методи можна поділити на методи-екземпляри (використовуються на об'єктах Number) 
та статичні методи (викликаються безпосередньо на самому конструкторі Number). 

Ось декілька статичних методів: 

--- Методи Number.parseInt() і Number.parseFloat()​ 

Перетворюють рядок символ за символом, доки це можливо. 
У разі виникнення помилки повертається підсумкове число.

Метод Number.parseInt() парсить з рядка ціле число.
*/

/* const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"
 */

/* console.log(Number.parseInt("5px")); // 
console.log(Number.parseInt("12qwe74")); // 
console.log(Number.parseInt("12.46qwe79")); // 
console.log(Number.parseInt("qweqwe")); //  */

// Метод Number.parseFloat() парсить з рядка дробове число.

/* console.log(Number.parseFloat("5px")); // 
console.log(Number.parseFloat("12qwe74")); // 
console.log(Number.parseFloat("12.46qwe79")); // 
console.log(Number.parseFloat("qweqwe")); // 
 */



/* --- Перевірка на число

Для перевірки на число можна використовувати метод Number.isNaN(val). 
Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

true - якщо значення val - NaN
false - якщо значення val - не NaN  */

/* let a = 'qwerty' / 10; 
console.log(isNaN(a));
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN(null));
console.log(isNaN(20));
console.log(isNaN("20"));
console.log(isNaN("qwerty")); */

/* Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false.
Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.
 */


/* let a = 'qwerty' / 10; 
console.log(Number.isNaN(a));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(null));
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN("qwerty")); */


// Приклад використання: 


/* let yourAge = 'undefined';
if (isNaN(yourAge)) {
    console.log("Age is invalid. Please enter a valid number.");
} else {
    console.log(`Your age is ${yourAge}.`);
} */


// Number.isInteger - використовується для перевірки, чи є переданне значення цілим числом
/* console.log(Number.isInteger(42));
console.log(Number.isInteger(42.12));
console.log(Number.isInteger("qwerty"));
console.log(Number.isInteger(true));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity)); */

// Number.isFinite - використовується для перевірки, чи є передене значення скінченим числом

/* console.log(Number.isFinite(5));
console.log(Number.isFinite(42.12));
console.log(Number.isFinite("5"));
console.log(Number.isFinite(true));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity)); */


// ---- toFixed() - скорочення до певного знаку після коми.


/* let n = 12.44444322;
let str = n.toFixed(1);
console.log(str);

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41 */

// ---- toPrecision() - метод встановлює загальну кількість символів у числі, включаючи цілу частину, та знаки після коми.


/* let num = 123.34356546;
let formattedNum = num.toPrecision(6);
console(formattedNum);
 */

//----------------------------------------------------------------------------

/* ------ Класс Math


Один із вбудованих класів, який надає набір методів для роботи з числами. 
Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.
 */


// Округлення

// Math.floor(num) - повертає найменше ціле число, менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число, більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2


// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)

/* console.log(Math.random()); // випадкове число між 0 і 1

let rnd = Math.random();
console.log(rnd);
rnd *= 10;
console.log(rnd);
rnd = Math.round(rnd);
console.log(rnd); */

// Створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max)

/* function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5)) */

// -------------------------------------------------------------------------------------

// Методи String 

// Найпростіший рядок
console.log("Бачиш лапки - це рядок");
console.log('І не важливо, які саме лапки');

// Але, якщо ми захочемо передати в середені рядка слово у лапках? 

console.log("Мій улюблений фільм -"Тітанік"");


// Екранування символів 

/* Екранування символів (escaping) в JavaScript — це процес використання спеціальних символів для представлення символів, 
які інакше мали б особливе значення або не могли б бути представлені прямо в коді. Екранування забезпечує правильне оброблення 
та відображення спеціальних символів.
 */

console.log("Мій улюблений фільм -\"Тітанік\"");

//Лапки  - це далеко не єдиний випадокб коли може знадобитись екранування:

// Рядок з одинарними лапками та зворотним слешем
let singleQuoted = 'It\'s a beautiful day!';

// Рядок з подвійними лапками
let doubleQuoted = "She said, \"Hello!\"";

// Рядок з новим рядком та табуляцією
let multiLine = "Line 1\n\tLine 2\n\t\tLine 3";

// Рядок зі зворотними слешами
let path = "C:\\Program Files\\MyApp";

// Виведення в консоль
console.log(singleQuoted);  // It's a beautiful day!
console.log(doubleQuoted);  // She said, "Hello!"
console.log(multiLine);     // Line 1
                           //     Line 2
                           //         Line 3
console.log(path);          // C:\Program Files\MyApp



// lenght - вказує на кількість символів
const myString = "Hello";
console.log(myString.length);

// charAt - дозволяє отримати символ за певним індексом у рядку 
const str = "Hello, World!";

/* console.log(str.charAt(0));
console.log(str.charAt(6));
console.log(str.charAt(7));
console.log(str.charAt(13)); // пустий рядок, бо нічого немає
 */
/* 
console.log(str[3]);
console.log(str[5]);
console.log(str[13]);
 */


//repeat - дозволяє повторити вміст рядка декілька разів і стоворити новий рядок

const str = "QA pro";
const repeatStr = str.repeat(3);
console.log(repeatStr);

// Всім вже відома конкатенація 

/* let str = "QA ";
console.log(str.concat("Pro!"));
console.log(str.concat("Pro!", " in Hillel! ")); */

// endWith - використовується для перевірки, чи закінчується рядок заданим підрядком

const str = "script.js";
console.log(str.endsWith("js"));
console.log(str.endsWith("script"));


// includes - метод перевіряє, чи містить рядок певну підрядок, і повертає true або false.

let phrase = "Hello, world!";
console.log(phrase.includes("world")); // true
console.log(phrase.includes("llo, w")); // true
console.log(phrase.includes("World")); // false
console.log(phrase.includes("foo"));   // false

// startsWith  - метод перевіряє, чи починається рядок з певної підрядка.

let text = "JavaScript is fun";
console.log(text.startsWith("JavaScript")); // true
console.log(text.startsWith("fun"));         // false


// indexOf / lastIndexOf 
/* indexOf(): Повертає перше входження підрядка в рядок або -1, якщо підрядок не знайдено.
lastIndexOf(): Повертає останнє входження підрядка в рядок або -1, якщо підрядок не знайдено.
 */

let sentence = "Find the location of the word 'the' in this sentence.";

console.log(sentence.indexOf("the"));         // 5 (перше входження)
console.log(sentence.lastIndexOf("the"));     // 31 (останнє входження)
console.log(sentence.indexOf("word"));         // 25
console.log(sentence.indexOf("missing"));      // -1


// padStart/padEnd
/*  --- padStart(targetLength, padString): Додає padString до початку рядка, щоб досягти targetLength.
    --- padEnd(targetLength, padString): Додає padString до кінця рядка, щоб досягти targetLength. */

/* let number = "5";

console.log(number.padStart(3)); // 
console.log(number.padEnd(3));   // 
console.log(number.padStart(3, "0")); // "005"
console.log(number.padEnd(3, "0"));   // "500"
console.log(number.padStart(3, "0")); // "005"
console.log(number.padEnd(3, "*"));   // 
 */

// trim, trimStart, trimEnd 
/* --- trim(): Видаляє пробіли з обох кінців рядка.
   --- trimStart(): Видаляє пробіли тільки з початку рядка.
   --- trimEnd(): Видаляє пробіли тільки з кінця рядка. */

/* let str = "   Hello, world!   ";

console.log(str.trim());      // "Hello, world!"
console.log(str.trimStart()); // "Hello, world!   "
console.log(str.trimEnd());   // "   Hello, world!" */


// replace
/* Метод replace() замінює перше входження підрядка або регулярного виразу на новий рядок. */

/* let greeting = "Hello, John!";
let newGreeting = greeting.replace("John", "Jane");

console.log(newGreeting); // "Hello, Jane!" */



// substring/ substr/ slice
/*  --- substring(start, end): Повертає частину рядка між start і end (не включаючи end).
--- substr(start, length): Повертає частину рядка, починаючи з start на length символів.
--- slice(start, end): Повертає частину рядка між start і end (не включаючи end), підтримує від'ємні індекси. */

/* let text = "JavaScript";

console.log(text.substring(0, 4)); // "Java"
console.log(text.substr(4, 6));    // "Script"
console.log(text.slice(4));       // "Script"
console.log(text.slice(-6));      // "Script" */

// toUpperCase / toLowCase

/* let greeting = "Hello, World!";
let upperCaseGreeting = greeting.toUpperCase();

console.log(upperCaseGreeting); // "HELLO, WORLD!"
 */

/* let greeting = "Hello, World!";
let lowerCaseGreeting = greeting.toLowerCase();

console.log(lowerCaseGreeting); // "hello, world!" */

