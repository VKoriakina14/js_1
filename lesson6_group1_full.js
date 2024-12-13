let str = "JavaScript";
let letter = str[1];  //a 
console.log(letter);

let text = "Джаваскріпт - це весело";
let length = text.length; //23
console.log(length);

var result = 0/0;
console.log(result) //Nan

var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false; //9.14
guessWho = 9.14;
console.log(guessWho)

const num = 42;
const str1 = "Shuba"; //42Shuba
const result = num + str1; 
console.log(result)

var result = "40" - 4;
console.log(result);  //36

let n = 7;
 n *= 9 + 1; //70 n 9+1
 console.log(n);  

var a = 4;
var b = 3;
var c = a = b; //3 с права на лево
console.log(c) 

var number = 65;
number %= 2; // остаток от деления 1
console.log(number);

console.log(17 !== '17'); // тру, мы так решили

console.log((+null)); // 0

let sex = 'male';
let birthday = 19;
let discount;
if (sex === 'male'){ //true
    discount = (birthday >= 25 ) ? "30%" : "10%"; // false 10%
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
} 
console.log(discount)

let firstName = "";
let lastName = "Bulochka"; //true
let nickName = "";
console.log( firstName || lastName || nickName || "Анонім"); 

console.log( null || (2 && 3) || 4 ); // true 3

// Яке буде останне значення?
var i = 0;
do {
    i += 3;
    console.log("i = " + i); // 9 3 itter
} while (i < 8);

/* Завдання 1:
Вирахуйте значення площі кола на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат 
*/

let r = 15; // радіус
let Pi = 3.1415; // число Пі
let s = Math.pow(r,2) * Pi; //706.8375000000001
console.log(s);


/* Завдання 2:
Виведіть на екран загальну вартість всіх продуктів, які є на складі
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 
let prod1 = productQuantity1 * productPrice1;
let prod2 = productQuantity2 * productPrice2;
let prod3 = productQuantity3 * productPrice3;
let prodSum = prod1 + prod2 + prod3
console.log(prodSum);

/* Завдання 3:
Змініть switch на if...else. 
Поведінка сценарія, після зміни, повинно залишитись без змін (зверніть увагу на змінні USA и Great Britain). 
*/

var country = prompt("Введіть назву країни");

       /*  if (country == "USA" || country == "Great Britain") {
            console.log("Англійська мова");
        }
        else if (country == "Germany") {
            console.log("Німецька мова");
        }
        else if (country == "France") {
            console.log("Французька мова");
        }
        else {
            console.log("Вказаної країни немає в списку");
        } */
        switch (country) {
            case "USA":
            case "Great Britain":
                alert("Англійська мова");
                break;
            case "Germany":
                alert("Німецька мова");
                break;
            case "France":
                alert("Французька мова");
                break;
            default:
                alert("Вказаної країни немає в списку");
                break;
        }
/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі НЕ діляться на 6 між 0 и 100 
*/

for(let i=0;i<=100; i++){
    if (i%6 !==0) {
        console.log(i);
    }
}
/* Завдання 5:
Створіть функцію max(a, b), яка повертає більшее число з чисел а и b без використання бібліотеки Math
*/
function max(a, b) {
    return (a > b) ? a : b;
  }
  console.log(max(1,3));