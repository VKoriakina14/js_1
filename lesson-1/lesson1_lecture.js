// як додати гіт до вс кода - https://code.visualstudio.com/docs/sourcecontrol/overview

//--------------------------------------------------------------------------------------------
// коментарі, почнемо з них! Ці коментарі існують лише для людей.
// Коментарі можуть пояснювати, що робить код, залишати інструкції для розробників, які використовують код,
// або додавати будь-які інші корисні примітки.

// Це однорядковий коментар
// Для того, щоб створити його потрібно виділити сроки та нажати сtrl + / (Mac - cmd + / )

/*    Це багаторядковий коментар.
   Він може розтягуватися на декілька рядків.
   Тут можна додавати більше пояснень.

   Для того, щоб створити його потрібно виділити сроки та нажати alt + shift + a  (Mac - не знайшла поки)
   
*/

//--------------------------------------------------------------------------------------------
console.log("Hello World"); // Ця команда допомогає виводити у консоль різні дані, також зауваж, що коментар може бути і посередині кода

//Принцип перший: у мові програмування кожну команду прийнято писати з нового рядка.
//Наприкінці команди ставиться крапка з комою.

/* console.log('Hello World');
console.log('Hello World') */

//--------------------------------------------------------------------------------------------
/*--- Змінна ---
- це іменована область пам'яті, ім'я якої можна використовувати для здійснення доступу до даних. 
Дані знаходяться у змінній.

Кожна змінна складається з двох основних частин: ім'я і значення. 

Ім'я виступає в ролі ідентифікатора, 
що дозволяє нам звертатися до збережених даних за допомогою зрозумілого та організованого позначення, 
що полегшує роботу з даними. 

= - оператор присвоювання, з його допомогою можна встановити чи змінити значення змінної.

Значенням змінної є фактичні дані різних типів, які зберігаються в ній.*/

/*-----Оголошення та ініціалізація змінних----
 Оголошення змінних - це створення ідентифікатора для змінної. 
Під час оголошення ви вказуєте ім'я змінної, яке використовуватиметься для посилання на неї в вашому коді. 
В JavaScript ви можете оголошувати змінні за допомогою ключових слів var, let або const. 
*/

/* var x;
var name;
 */

/* Ініціалізація змінних - це присвоєння значення оголошеній змінній. 
Після того як ви оголосили змінну, ви можете встановити її значення. 
Це робиться за допомогою оператора присвоєння (=). 
*/

// Оголошення та ініціалізація змінних
/* var x; // Оголошення
x = 10; //ініціалізація
console.log(x) */

/* let name;
name = "John";
console.log(name)  */

// Оголошення та ініціалізація одночасно
/* var y = 20;
let message = "Hello, World!"; */

//Також можемо одночасно оголувати та ініціалізувати одночасно декілька змінних!
/* let q, w, e;
let a = 5, b = 10, c = a + b;
console.log(c) */

//Але краще для синтаксису робити усе разом
//var message = 'Hello world';

// Значення змінної можна змінити
/* var message = "Hillel QA pro";
console.log(message);

message = "JavaScript";
console.log(message); */

/**
 У імені змінної є декілька обмежень:
 - цифри на початку, але цифри можуть бути використані у будь-якій іншій частині імені
 - Заборонено використовувати символи, такі як дефіс, пробіл тощо, окрім символів $ та _
 - пробіли в назві
 - зарезервовані слова - this, return і так далі
 */

/* var 1login = 'Вася'; //цифри на початку!
var log-in = 'Вася';  //дефіс!!
var % = '%'; // Оголошено змінну з ім'ям "%"
var - = '--'; // Тепер змінна з ім'ям "-"
var return = 'повернення'; // зарезервоване слово! */

// А ось так вже можна
/* var login = 'vasja';
var log_in = 'vasja';
var login123 = 'vasja';
var $ = 'дивна зміна';
var _ = 'А чому ні?';
console.log(імя); */

/* Для створення імені змінної більше ніж одне слово використовувайте camelCase
Це означає, що перше слово починається з малої літери, а кожне наступне слово починається з великої літери: */

// let firstТameиBlaBlaBla = "John";
// let firstName = "John";

/*PascalCasing – принцип іменування ідентифікаторів, коли всі слова, які формують 
ідентифікатор, починаються з символу у верхньому регістрі. */

// let FirstName, MinWidthValue, ErrorMessage

/* kebab-casing – кожне слово в ідентифікаторі відокремлюється дефісом та 
пишеться в нижньому регістрі */

// let first-name, min-width-value, error-message
/*Однак існують винятки з цього правила. 
Дефіси дозволені в іменах властивостей CSS-стилів, таких як min-width-value і error-message. 
Це пов'язано з тим, що CSS-стилі не є частиною JavaScript, і вони мають свої власні правила іменування.
*/

// Регістр має значення !
// var login;
// Login ='Вася'; // Помилка, Login та login різні змінні.

/**
 Декілька важливих правил при виборі імені змінної:

 - Імена змінних повинні бути описовими: Вибирайте імена, які відображають призначення змінної. 
 Читаючи ім'я змінної, інші розробники повинні зрозуміти, що саме вона зберігає.
 */

/* let x = 10; // Погано, що значить х?
let age = 30;  */ // о, тут вже зрозуміло які дані зберігає у себе змінна

/**
 - Використовуйте зрозумілі слова: Використовуйте розумілі та логічні слова в іменах змінних. 
 Наприклад, userName для зберігання імені користувача.
 - Уникайте скорочень: Уникайте скорочень та абревіатур, які можуть бути неочевидними для інших. 
 */

/* let numItems = 10; // Погано
let numberOfItems = 30; // Добре */

/*
Використовуйте англійську мову: Якщо можливо, назви змінних повинні бути на англійській мові, 
оскільки це стандарт для програмування на цій мові. Це полегшує спілкування та розуміння для всіх розробників.
*/

/* let переменная = "Значення"; // Погано
let variable = "Value"; // Добре */

//Не можна створити дві змінні з однаковими іменами
/* let variable = "Value";
let variable = "Value"; */

//-----------------------------------------------------------------------------------------------------
/** ---- Константи ---
- це змінні, значення яких не може бути змінено після їхньої ініціалізації.
 Іншими словами, коли ви визначаєте константу, ви призначаєте їй значення один раз,
 і після цього ви не можете змінити це значення протягом виконання програми.
 */

// Технічно константи - це просто змінні, які ми домовляємося не змінювати, поки що!
/* var COLOR_RED = '#ff0000';
var COLOR_SILVER = '#c0c0c0';
var elementColor = COLOR_RED;
console.log(elementColor); */

/* const constVariable = 3.14;
console.log(constVariable);
constVariable = 5; */

//-----------------------------------------------------------------------------------------------------
/**
 let vs var
 */

/* В JavaScript існують дві основні області видимості (scope): глобальна та локальна. 
Область видимості визначає, де можна отримати доступ до змінних та функцій в коді.

Глобальна область видимості - це область, в якій змінні та функції доступні на всій довжині програми.
Вони оголошуються за межами будь-яких функцій або блоків коду.

Локальна область видимості - це область, в якій змінні та функції доступні лише в межах певної функції або блоку коду.
*/

//Reason 1
/*  let variable = 5;
{
  let variable1 = 6;
  console.log(variable1); //variable1 cannot be used here

}
console.log(variable);
console.log(variable1); */ //variable1 cannot be used here

/* let variable = 5;
{
  var variable1 = 5;
}
console.log(variable1);  */ //variable1 can be used here

// Тобто до var можна достучатись будьде

//Reason 2
// let b =1;
// let b =2;

// var a = 1;
// var a = 2;

// var може використовуватися двічі

//Reason 3
// коли будемо функціїмо проходити

/**
 Підняття" або "вспливання" (hoisting) змінних та функцій у JavaScript.
 Це важлива концепція, яка впливає на те, як інтерпретатор JavaScript обробляє оголошення змінних та функцій під час 
 виконання коду.

 Hoisting - Під час інтерпретації коду JavaScript, виконується процес підняття оголошень функцій та змінних (var) 
 вгору їх області видимості. 
 Це означає, що ви можете використати функцію або змінну var до її фактичного оголошення.
 */

/* console.log(x);  // Виведе "undefined", це значить що можна працювати, помилок немає
var x = 10; */

//У ньому не буде помилки, адже Javascript буде бачити отаке:

/* var x; // Підняття оголошення змінної
console.log(x); // Виведе "undefined"
x = 10;
console.log(x); */

/*Temporal Dead Zone (TDZ) - це період між "підняттям" (hoisting) змінної (let або const) та її ініціалізацією, +
коли змінна існує, але не має значення. 
Спроби отримати доступ до такої змінної призводять до помилки.
*/

/* console.log(y); // Помилка: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Результат: 20 */

/*Підсумок:
- Hoisting дозволяє використовувати функції та змінні var до їх оголошення, але значення стає доступним лише після фактичного оголошення.
- TDZ запобігає помилкам, пов'язаним з використанням змінних let та const до їх ініціалізації. */

/* Тож, що використовувати?

let!!

Чому?

1. Блокова область видимості:

 - Змінні, оголошені за допомогою let, мають блокову область видимості, тобто доступні лише в межах блоку, в якому вони оголошені.
 - Це робить код більш чітким, читабельним та легше піддається обслуговуванню.
 - Змінні var, з іншого боку, мають функціональну область видимості, доступні в усьому функціональному блоці, 
 де вони оголошені.

2. Уникнення помилок:

 - let допомагає уникнути помилок, пов'язаних з повторним оголошенням змінної в одному блоці.
 - З var повторне оголошення оновлює значення вже існуючої змінної, що може призвести до непередбачуваних результатів.

3. Суворіший режим:

 - let сприяє суворішому режиму JavaScript, який допомагає виявляти помилки на ранній стадії розробки.
 - var може маскувати помилки, роблячи їх складнішими для виявлення.

4. Зменшення забруднення простору імен:

 - let обмежує область видимості змінних, зменшуючи забруднення простору імен.
 - Це робить код більш організованим and знижує ризик конфліктів імен.

 Підсумок: Використання let замість var забезпечує більш чітку, читабельну, безпечну та організовану структуру коду.
 let рекомендується використовувати в сучасному JavaScript для кращої практики програмування. */
//---------------------------------------------------------------------------------------------------------------
/**
---- Типи даних ----

В мові JavaScript існують вісім основних типів даних, які можна розділити на дві категорії: примітивні типи та об'єкти.

 - Number (Число): Відповідає числовим значенням, включаючи цілі числа та числа з плаваючою комою.
 Приблизний діапазон значень становить від -1.7976931348623157e+308 до 1.7976931348623157e+308.
 - String (Рядок): Відповідає послідовностям символів (текстові дані), які можна представити у лапках (одинарних або подвійних).
 - Boolean (Булевий): Відповідає двом можливим значенням: true (істина) або false (хиба). Використовується для логічних операцій.
 - Null (Порожність): Вказує на відсутність значення або відсутність посилання на об'єкт.
 - Undefined (Не визначено): Відповідає змінним, які не були ініціалізовані та не мають значення.
 - Symbol (Символ): Введений у ECMAScript 6, символи представляють унікальні ідентифікатори та використовуються,
 зокрема, для властивостей об'єктів.
 - BigInt (Велике ціле число): Введений у ECMAScript 11, цей тип даних дозволяє працювати з цілими числами,
 які перевищують максимальні обмеження типу Number.
  - Object (Об'єкт): Відповідає складним даним, які можуть містити властивості та методи.
 */

// ---String---
/* var str = "Ми вже так 100 разів робили";
console.log(str);
var str2 = 'QA pro'; // Зверніть увагу, лапки одинарні, і це цілком собі законно та не має ніякої різниці між ""
console.log(str2); */

//Об'єднання рядків (конкатенація). У JavaScript конкатенація виконується за допомогою оператора +
/* let fullName = "John " + "Doe";
console.log(fullName);  */

/* let firstName = "John";
let lastName = "Doe";
// let fullName = firstName + lastName;
let fullName = firstName + " " + lastName;
console.log(fullName);  */

//Доступ до символів в рядку:
/* let str = "JavaScript";
let firstLetter = str[1]; 
console.log(firstLetter);  */

/* Методи рядка: JavaScript надає багато методів для роботи з рядками, наприклад, 
метод length для визначення довжини рядка або метод toUpperCase() для перетворення рядка у верхній регістр:
*/
/* let text = "Це приклад рядка";
let length = text.length; // Довжина рядка
console.log(length); // Результат: 16
console.log(text.length); */

/* let text = "".length;
console.log(text); */

/* let text = "Це приклад рядка";
let uppercaseText = text.toUpperCase(); // Перетворення в верхній регістр
console.log(uppercaseText);  */

// let uppercaseText = "Ron".toUpperCase();
// console.log(uppercaseText);

// let uppercaseText = "ron147".toUpperCase();
// console.log(uppercaseText);

// let lowercaseText = 'Harry'.toLowerCase();
// console.log(lowercaseText);

// let lowercaseText = 'HARRY459'.toLowerCase();
// console.log(lowercaseText);

/* Шаблонні рядки: В сучасних версіях JavaScript можна використовувати шаблонні рядки 
для підстави змінних у рядок без конкатенації: */

/* let name = "Анна";
let message = `Привіт, ${name}!`;
console.log(message); // Результат: "Привіт, Анна!"

let age = 30;
console.log(`Вам ${age} років.`);

let greetings = `Вітаємо на курсі, ${name.toUpperCase()}!`;
console.log(greetings); // Вихід: "Вітаємо на курсі, АННА!" */

// --- Number ---
/* var n = 12; //Це number
var float = 12.345; //І це також Number
var number = 0x2a; // шістнадцятирічна система
console.log(n);
console.log(float);
console.log(number) */

// --- Infinity ---
/* var infinity = 10/0;
console.log(infinity) // Infinity

var negativeInfinity = -10/0;
console.log(negativeInfinity) */ // -Infinity

/*--- Nan є скороченням від "Not a Number" (Не число).  Значення Nan не дорівнює нічому, включаючи себе. 
 Будь які операції з Nan повертають Nan 
 Це спеціальне значення, яке представляє результат недійсної математичної операції 
 або спроби перетворити нечислове значення в число*/

/* var nan = 0/0;
console.log(nan)

var nan2 = "qwerty" * 25;
console.log(nan2) */

// --- Boolean ---- Цей тип даних має тільки два значення true/ false
/* var bool = true;
console.log(bool);

let isLogged = true; // Користувач увійшов в систему
let hasPermission = false; // Користувач не має дозволу */

/* --- Undefined ----
вказує на те, що змінна або об'єкт був оголошений, але не має значення. 
Зазвичай це сталося через те, що змінній не було присвоєно жодного значення або об'єкт був оголошений, 
але він залишився порожнім.*/

/* var text; // За замовчуванням якщо змінна не ініціалізована, її значення Undefined
console.log(text) */

/*--- Null ---  вказує на відсутність значення або представляє ситуацію, коли програмно задано, 
що змінна чи властивість мають "нульове" значення. Це відрізняється від "undefined", 
де значення відсутнє через неоголошену змінну.*/

/* var empty = null;
console.log(empty) */

//Позначає !!!навмисну!!! відсутність значення.

/* --- Symbol --- Новий тип, створений для унікальних ідентифікаторів в обєктах. 

Символи гарантовано будуть унікальними. Навіть якщо ми створюємо багато символів з однаковим описом, вони мають різні значення. 
Опис – це просто мітка, яка ні на що не впливає.*/

// let id = Symbol("id");

/*--- BigInt ---. Цей тип даних надає змогу створювати цілі числа більш ніж 2 в 53,
і дозволяє представляти цілі числа довільної довжини, 
які перевищують максимальну точність, яку може представити тип даних "Number".*/

// var bigInt2 = 8888999999881124n;

/* --- Object.  використовується для створення складних структур даних, які містять набір властивостей (ключ-значення). 
Про цей тип даних буде ми поговоримо на наступних уроках. */

/* var user = {
    name : "Alex",
    email: "qapro@gmail.com",
    cat: {age:5}
} */

//--------------------------------------------------------------------------------------
//--- Динамічна типізація - за межею добра і зла. Одна й та змінна може бути будь-ким

/* var guessWho = 3.14;
console.log(guessWho);
guessWho = 'А тепер тут строка';
console.log(guessWho);
guessWho = false;
console.log(guessWho); */

//------------------------------------------------------------------------------------------------
/* --- Перевірка типів та використання typeof ---
Для перевірки типів даних та отримання інформації про тип об'єкта, 
використовується оператор typeof. 
Оператор typeof повертає рядкове значення, яке вказує на тип даних об'єкта.
*/

/* console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "true"); */

/* console.log(typeof [1, 2, 3]); // "object"
console.log(typeof { name: "John", age: 30 }); // "object" */

// console.log(typeof "" );

/* let variable;
console.log(typeof variable); */ // "undefined"

/* let emptyValue = null;
console.log(typeof emptyValue); */ // "object"

//  console.log(typeof NaN); // "number"

// А як нам дізнатися якого типу яка змінна ? На допомогу приходить Nan

// console.log(typeof "Hello");
// console.log(typeof 41);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof Symbol());
// console.log(typeof {}); // Хто пропустив, це обьєкт, але без значень
// console.log(typeof console.log); // Функція!!! Хоча функції це також обєкти, але для зручності зробили вивід function

//--------------------------------------------------------------------------------------------------
/**
 Перетворення типів 

 - Перетворення до рядка
 - Перетворення до числа
 - Перетворення до логічного значення

 В JavaScript існують два типи перетворень даних: явні (які ви явно вказуєте у коді)
 та неявні (які відбуваються автоматично за певних обставин).*/

// --- Явне перетворення типів ---

// Number(): Ця функція використовується для перетворення значень в числовий тип. Наприклад:

/* const str = "42";
console.log(typeof str)

const num = Number(str);
console.log(num, typeof num);  */ // Результат: 42 (тип: number)

/* let number = Number(undefined);
console.log(number, typeof number); */ // Оскільки undefined не є дійсним числом, перетворення зазнає невдачі, і результатом стає NaN (Not a Number)

/* let number = Number(null);
console.log(number, typeof number); */
/* null в JavaScript використовується для позначення відсутності значення. 
Коли функція Number отримує null як аргумент, вона перетворює його на число 0. */

/* let number = Number(true);
console.log(number, typeof number); */
/* В JavaScript значення true використовується для представлення логічної істини. 
Коли функція Number отримує true як аргумент, вона перетворює його на число 1. */

/* let number = Number('qwerty');
console.log(number, typeof number); */
/* Рядок "qwerty" не містить дійсних числових символів. 
Тому перетворення зазнає невдачі, і результатом стає NaN (Not a Number). */

//String(): Ця функція перетворює значення в рядковий тип даних. Наприклад:

// const num = 42;
// console.log(typeof num)

// const str = String(num);
// console.log(str, typeof str); // Результат: "42" (тип: string)

/* let text = String(undefined);
console.log(text, typeof text); */
// Коли функція String отримує undefined як аргумент, вона перетворює його на спеціальний рядок "undefined".

/* let text = String(null);
console.log(text, typeof text); */

/* let text = String(false);
console.log(text, typeof text); */

/* Boolean(): Вона дозволяє перетворити значення в логічний тип (true або false)
 JavaScript визначив набір значень, які завжди перетворюються в false під час логічних операцій. 
Ці значення: false, 0, "" (порожній рядок), null, undefined, NaN (Not a Number) */

/* const num = 42;
console.log(typeof num)

const bool = Boolean(num);
console.log(bool, typeof bool); */ // Результат: true (тип: boolean)

/* let bool = Boolean('2');
console.log(bool, typeof  bool);
 */

/* let bool = Boolean(undefined);
console.log(bool, typeof  bool); */

/* let bool = Boolean(null);
console.log(bool, typeof  bool); */

// let bool = Boolean('');
// console.log(bool, typeof  bool);

/* let bool = Boolean(-9);
console.log(bool, typeof  bool); */

// --- Неявне перетворення ---

// Число + Рядок:

// const num = 42;
// const str = "Naturo";
// const result = num + str;
// console.log(result)
// console.log(typeof result)

/* const num = 42;
const str = "2";
const result = num + str; // Результат: "422" (тип: string)
console.log(result, typeof result) */

// Рядок + Булеве значення:

/* const str = "true";
const bool = true;
const result = str + bool; // Результат: "truetrue" (тип: string)
console.log(result, typeof result) */

//--------------------------------------------------------------------------------------------------

/* Additional links:

Developer Mozilla  — набір навчальних матеріалів для початківців-девелоперів:
Типи даних в JavaScript https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures
Ключові слова JavaScript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
Оператор typeof https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeo
Hoisting https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

https://codeburst.io/javascript-null-vs-undefined-20f955215a2

Про IDE Visual Code: https://youtu.be/nxCLXMBl4e4?si=sLzfzVTBO8-0blNI 

W3school:
https://www.w3schools.com/js/js_syntax.asp
https://www.w3schools.com/js/js_comments.asp
https://www.w3schools.com/js/js_variables.asp
https://www.w3schools.com/js/js_let.asp
https://www.w3schools.com/js/js_const.asp
https://www.w3schools.com/js/js_datatypes.asp

--------------------------------------------------------------------------------------------------
Корисні розширення для Visual Studio Code:

 Code Runner - для запуску кода!

https://t.me/Job_IT_Junior/4168


✅ Todo Tree
Це розширення швидко шукає у вашій робочій області коментарі з тегами, як-от TODO та FIXME, і відображає їх у вигляді дерева на панелі провідника.

✅ Prettier
Prettier — це форматувальник коду. Він забезпечує послідовний стиль, аналізуючи ваш код і повторно друкуючи його за власними правилами, які враховують максимальну довжину рядка, загортаючи код, коли це необхідно.

✅ GitLens
GitLens розширює можливості Git, вбудованого у Visual Studio Code. Одним кліком можна отримати інформацію про автора, анотацію та інше порядково.

✅ Code Spell Checker 
Базова програма для перевірки орфографії, яка добре працює з camelCase. 

✅ Bookmarks
Розширення дозволяє робити закладки на рядках файлу, про що сигналізує мітка на полях. Закладки мають власну панель провідника та іконку на лівій панелі меню. 

✅ https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
--------------------------------------------------------------------------------------------------
🧑‍💻Топ безкоштовних курсів JavaScript

- Курс від Clever Programmer
 (https://www.youtube.com/watch?v=lI1ae4REbFM)Максимально актуальний курс 2022 року від каналу Clever Programmer. Підходить для початківців та середнього рівня.

- Interactivity with JavaScript
 (https://www.coursera.org/learn/javascript)Освітні матеріали доступні англійською мовою з різними субтитрами. Після проходження курсу ви отримаєте сертифікат.

- Javascript Essentials
 (https://www.udemy.com/course/javascript-essentials/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-dTF9vcF2s8uFdG6Ue8Twqg&utm_medium=udemyads&utm_source=aff-campaign)Курс ідеально підходить для тих, хто починає вивчати JavaScript з нуля, або вже має певний досвід програмування.

- Learn JavaScript
 (https://www.codecademy.com/learn/introduction-to-javascript) - 20-годинний курс, який допоможе отримати базові знання та навички JS.

- Intro to JavaScript
 (https://www.udacity.com/course/intro-to-javascript--ud803)Ще один безкоштовний англомовний курс від експертів JS. 

 - Eloquent JavaScript від Marijn Haverbeke (https://eloquentjavascript.net/) — онлайн-книга про JavaScript, програмування та чудеса цифрових технологій.
 
 - Лекції про JavaScript (https://www.youtube.com/user/yuilibrary) — серія навчальних відео від Дуґласа Крокфорда. Гуру розповідає, як використовувати JavaScript найбільш ефективно
 
 - Базове навчання JavaScript (https://www.linkedin.com/learning/javascript-essential-training) — гарний курс, після проходження якого вже можна працювати, але дається тріал тільки на місяць навчання.

 - CodeCombat (https://codecombat.com/) -  Це освітня гра, яка навчає програмування різними мовами, включно з Python, JavaScript і Java. Гравці пишуть код для свого персонажа і б'ються з ворогами, розв'язуючи завдання.

 - Codingame (https://www.codingame.com/start/) - Codingame надає широкий спектр завдань і пазлів, які можуть бути вирішені з використанням різних мов програмування. Гравці можуть змагатися в реальному часі та покращувати свої навички.

 -----------------------------------------------------------------------------

Mobile apps for learning JS:

💡 Encode: Learn to Code — в додатку ви знайдете короткі пояснення, завдання з кодування та приклади, які розвивають ваші навички кодування. Encode це спосіб навчитися технічним навичкам: від Python, JavaScript і Swift до використання командного рядка, створення веб-сайтів, запитів до баз даних і аналізу даних! (for IOS (https://apps.apple.com/us/app/encode-learn-to-code/id1198851756), for Android (https://play.google.com/store/apps/details?id=com.upskew.encode&hl=en&gl=US))

💡 Codecademy Go — додаток допомагає переглядати та практикувати те, що ви дізналися в Інтернеті, будь-де та будь-коли. Навчіться кодувати простим способом. Веб-розробка, Data Science, Комп'ютерна наука, HTML і CSS, Python, JavaScript, SQL, все це і навіть більше в додатку Codecademy. ( for IOS (https://apps.apple.com/us/app/codecademy-go/id1376029326), for Android (https://play.google.com/store/apps/details?id=com.ryzac.codecademygo&hl=en&gl=US) )


 -----------------------------------------------------------------------------
 Telegram channels

 https://t.me/VS_FRONTEND

 - Корисна та стисла інформація про JavaScript, HTML, CSS.
- Безкоштовні відеоуроки з розробки.
- Відкритий чат під публікаціями, де можна ставити запитання, ділитися досвідом та допомагати один одному.
- Круте IT ком'юніті.
- І звичайно ж трошки IT гумору, куди ж нам без нього).

        %%% https://www.tiktok.com/@devslopes/video/7288476640881937706 %%%

 */
