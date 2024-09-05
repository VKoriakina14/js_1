let str = "DataTypes";
let letter = str[1]; 
console.log(letter);

let text = "Джаваскріпт - це цікаво";
let length = text.length;
console.log(length);

var result = "qwerty"/0;
console.log(nan)


var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 8.97;
console.log(guessWho)

const num = 68;
const str1 = "Borsh";
const result = num + str1; 
console.log(result)

var result = "30" - 3;
console.log(result);  

let n = 5;
 n *= 4 + 9;
 console.log(n);  


var a = 9;
var b = 7;
var c = a = b;
console.log(c) 

var number = 80;
number %= 2;
console.log(number);

console.log(3 !== '03');

console.log((+undefined));


let sex = 'female';
let birthday = 29;
let discount;
if (sex === 'male'){
    discount = (birthday >= 25 ) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
} 
console.log(discount)



console.log( 1 && 2 && null && 3 && undefined); 


console.log( (null || -1 && 1)  ); 


// Яке буде останне значення?

var i = 0;
do {
    i += 4;
    console.log("i = " + i);
} while (i < 11);

/* Завдання 1:
Вирахуйте значення площі трапеції на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат 
Формула: https://www.elitclass.com.ua/components/com_jshopping/files/img_products/full_a91.jpg
*/

var a = 6; // перша основа
var b = 9; // друга основа
var h = 4; // висота


/* Завдання 2:
Виведіть на екран cередню ціну на продукти
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 

/* Завдання 3: 
Зміни if...else на switch
*/
var value = +prompt("Введіть число 1 або 2");

if (value == 1) {
    alert("Ви ввели число 1");
}
else if (value == 2) {
    alert("Ви ввели число 2");
}
else {
    alert("Вы ввели неправильне значення");
}

/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі діляться на 4 між 0 и 100 
*/

/* Завдання 5:
Створіть функцію min(a, b), яка повертає менше число з чисел а и b без використання бібліотеки Math
*/