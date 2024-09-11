
/* 1. Що таке масив та як його створити у JavaScript?

2. Що таке елемент масиву та ідекс?

3. Що станеться, якщо в масив на 5 елементів записати значения за індексом 10?

4. Що станеться, якщо з масиву на 5 елементів прочитати значения індексу 10?

5. Як можна вивести на екран yci значения масиву, коли розмір масиву заздалегздь невідомий? 





6. Що таке цикл for ... of?

7. Як можна видалити певне значения з масиву?

8. Як додати нове значения в кінець масиву?

9. Як додати нове значения на початок масиву?

10. Як можна об'еднати два масиви?

11. Як можна дізнатися, за яким індексом у массиві розташоване потрібне нам значения?

*/


// Що буде виведене у консоль?

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list)



// Що буде виведене у консоль?

const arr = [1, 2, 3];	
arr.reverse();
console.log(arr)	


// Що буде виведене у консоль?

const array = [ 3, 4];
array.unshift(2);
array.unshift(0, 1); array.unshift([-1]);
console.log(array)


// Що буде виведене у консоль?

const words = [ 'a', 'b', 'c']; 
const result = words.concat(1, [2, [3]]);
console.log(result)


// Що буде виведене у консоль?

const x = [ 1, 2, 3]; x[-1] = -1;
console.log(x.length)


// Що буде виведене у консоль?

const y = [ 1, 5, 10, 15];
console.log(y.fill(0, 2, 4))







/* ---- РЕГУЛЯРНІ ВИРАЗИ


Регулярний вираз (англ. Regular Expression або RegExp) — це спеціальна послідовність символів, яка описує шаблон для пошуку або маніпуляції тексту.
Він використовується для перевірки, пошуку, заміни або виділення текстових даних у рядках.

Регулярні вирази підтримуються в багатьох мовах програмування, таких як JavaScript, Python, PHP, Java, C# і т.д.
Вони використовуються для пошуку та заміни тексту в рядках, а також для валідації даних та інших задач.
*/

var str = "миші, щури, знову миші, хом'яки, ховрахи";
var pattern = /щури/; // це RegExp. Слеші /.../ говорять JavaScript про те, що це регулярний вираз.

console.log("Тип регулярного виразу: " + typeof pattern); 
console.log("Знаходимо на якому індексі? " + str.search(pattern)); // Шукаємо шаблон у рядку
console.log("А якщо не знайшли? " + str.search(/кіт/)); 
console.log("Чи знайшли ми цей паттерн, шаблон у наданому реченні? " + pattern.test(str)); // Метод test використовується для перевірки, чи відповідає рядок певному регулярному виразу.

// Однак поки що не сталося нічого, чого не міг би зробити indexOf().
// значок | - внутрішній оператор мови регулярних виразів, що означає "або"

const str1 = "vasja@yahoo.com";
const str2 = "petja@gmail.com";
const pattern = /@gmail|@ukrnet/;

console.log(str1 +':' + str1.search(pattern)); // He знайшли
console.log(str2 +':'+ str2.search(pattern)); // Знайшли
console.log("Tecтyємo перший рядок: " + pattern.test(str1)); 
console.log("Tecтyємo другий рядок: " + pattern.test(str2));


// Перелік альтернативних варіантів можна укласти в дужки 
const str1 = "vasja@yahoo.com";
const str2 = "petja@gmail. com"; // Зверніть увагу: тут помилка! 
const str3 = "petja@gmail9com"; 
const str4 = "petja@gmail.com";
const pattern = /(@gmail|@urknet).com/; // 3 точкою тут не все так просто
console.log(str1 +': '+ pattern.test(str1));
console.log(str2 +': '+	pattern.test(str2));
console.log(str3 +': '+	pattern.test(str3));
console.log(str4 +': '+	pattern.test(str4));

// ---- Метасимволи

// Метасимволи — це спеціальні символи, які мають особливе значення в регулярних виразах.

/* 
. — крапка. Збігається з будь-яким одним символом, окрім символу нового рядка (\n).

* — зірочка. Збігається з нульовою або більшою кількістю попереднього символа або групи.

+ — плюс. Збігається з однією або більше кількістю попереднього символа або групи.

? — знак питання. Збігається з нульовою або однією кількістю попереднього символа або групи.

^ — каретка. Позначає початок рядка.

$ — долар. Позначає кінець рядка.

[] — квадратні дужки. Позначають один символ з набору символів.

[^] — каретка в квадратних дужках. Позначає відсутність символа з набору в квадратних дужках.

{n,m} — кількісні оператори. Визначають кількість повторень попереднього символа або групи (від n до m разів).

`() — круглі дужки. Групують символи для застосування кількісних операторів або витягнення підрядків.

| — вертикальна риска. Позначає логічне "або".

\ — зворотний слеш. Екранує метасимволи або позначає спеціальні послідовності.

\d — будь-яка цифра (аналог [0-9]).

\D — будь-який символ, крім цифри.

\w — будь-яка буква або цифра (аналог [a-zA-Z0-9_]).

\W — будь-який символ, крім букв або цифр.

\s — будь-який пробільний символ (пробіл, табуляція, новий рядок).

\S — будь-який непустий символ.

\b — границя слова. Позначає перехід між символом слова і не-словом.

\B — негативна границя слова. Позначає місце, яке не є границею слова.





// ---- Крапка 
/* Крапка (.) — означає будь-який один символ (окрім нового рядка): */

const pattern = /h.llo/;
const str = "hello world";
console.log(pattern.test(str)); 


// Але не все так просто!
let names = "file.txt log.txt file.png ltxt.doc one_txt.jpg"; 
let pattern = /.txt/g;
let matches = names.match(pattern); 
console.log(matches)


//Ще приклад: 
let sentence = "The car parked in the garage.";
let pattern = /.ar/g;
const matches = sentence.match(pattern);
console.log(matches);


// Бо крапка заміняє будь-який символ!
const names = "Аня Ася Оля Аля Валя"
const pattern = /А.я/g;
const matches = names.match(pattern);
console.log(matches);


// Щоб використовувати спеціальні символ як звичайний, додайте до нього зворотній слеш: \.
let names = "file.txt log.txt file.png ltxt.doc one_txt.jpg"; 
let pattern = /\.txt/g;
let matches = names.match(pattern); 
console.log(matches)


// Ще приклад
let str = "ivaniv_ruslan@yahoo.com";
const pattern = /.com/;
console.log(srt + " - "+pattern.test(str));


str = "ivanov_commer@gmail";
const pattern = /.com/;
console.log(srt + " - "+pattern.test(str));


// Ще раз, крапка значить будь-який символ !!!

const str1 = "vasja@yahoo.com";
const str2 = "petja@gmail. com"; 
const str3 = "petja@gmail9com"; 

const pattern = /\.com/; 
console.log(str1 +': '+ pattern.test(str1));
console.log(str2 +': '+	pattern.test(str2));
console.log(str3 +': '+	pattern.test(str3));


// пошук '/'
const str1 = 'Строка з /';
const pattern = /\//;
console.log(str1+": "+pattern.test(str1));


// пошук '\'
const str1 = 'Строка з \\';
const pattern = /\\/;
console.log(str1+": "+pattern.test(str1));


// Давайте розберемо такий приклад: 

const str = "У цьому тексті зустрічається символ \" | \". Як знайти його через регулярний вираз?"
console.log(str);
const pattern = /\||\./
console.log("Тестуємо: " + pattern.test(str));



const str1 = "apple|orange";
const pattern = /\||\./;
console.log("Тестуємо: " + pattern.test(str1));


const str2 = "hello.world";
const pattern = /\||\./;
console.log("Тестуємо: " + pattern.test(str2));



/* ---- Інтервал символів 

Інтервал або набір символів також називають символьним класомю
Для його позначення використовуються квадратні дужки.

Щоб вказати діапазон символів у середені класу, необхідно поставити знак тире.
Порядок ряду символів у наборі неважливий.

*/

const sentance = "The car parked in the garage."
const pattern = /[Tt]he/g;
const matches = sentance.match(pattern);
console.log(matches);

// Варто зазначити, що крапка, поміщена у квадратні дужки, означає саме крапку, і ніщо інше. 

const sentance = "A gdtdge is a good place to park a car."
const pattern = /ar[.]/g;
const matches = sentance.match(pattern);
console.log(matches);


// А якщо нам потрібно знайти Аллу чи Анну? 
const names = "Анна Алла авіпавпа Аркан А@#$а Абба";
const pattern = /А..а/g;
const matches = names.match(pattern);
console.log(matches);

// Нам тоді потрібно використовувати пошук за різними значеннями
const names = "Анна Алла авіпавпа Аркан А@#$а Абба";
const pattern = /А[нл][нл]а/g;
const matches = names.match(pattern);
console.log(matches);

// Ще приклад: 
const str = "vasja@gmail.com";
const pattern = /[bcdi]/;
console.log("Чи є тут співпадіння? " + pattern.test(str));
console.log("На якій позиції? " + str.search(pattern));






/* ---- Класси символів 

Класи символів у регулярних виразах дозволяють нам визначити групи символів, які ви шукаєте у тексті.
 Вони представлені в квадратних дужках [...] і дозволяють вам вказати, які символи приймаються як відповідні символи у тексті.

Ось декілька прикладів класів символів: 

/[a-z]/ - діапазон значень від a до z. Всі малі англійскі літери
/[A-Z]/ - діапазон значень від a до z. Всі великі англійскі літери
/[0-9]/ - всі цифри
/[a-zA-Z0-9]/ - загалом усі літери латинського алфавіту.


Сорочення: 

/\d/ — будь-яка цифра (аналог [0-9]).

/\w/ — будь-яка буква, цифра або підкреслення (аналог [a-zA-Z0-9_]).

/\s/ — будь-який пробільний символ (пробіл, табуляція, новий рядок, тощо).

*/


// клас [a-z]
const text = "apple Banana cherry";
const pattern = /[a-z]+/g;
const matches = text.match(pattern);
console.log(matches);

// клас [A-Z]
const text = "apple Banana cherry";
const pattern = /[A-Z]+/g;
const matches = text.match(pattern);
console.log(matches);

// клас [0-9]
const text = "12345 apples, 6789 bananas";
const pattern = /[0-9]+/g;
const matches = text.match(pattern);
console.log(matches);

// клас [a-zA-Z0-9]
const text ="Hello123 World_456";
const pattern = /[a-zA-Z0-9]+/g; 
const matches = text.match(pattern);
console.log(matches);

// Ще приклад 
const names = "Аня, Ася, Оля, Аля, Валя, Александрія";
const pattern = /А[а-я]я/g;
const matches = names.match(pattern);
console.log(matches);

// Діапазон "крім"
// Приклад 0
const text = "The car parked in the gaarage";
const pattern = /[^c]ar/g;
const matches = text.match(pattern);
console.log(matches);

