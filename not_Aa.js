// Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
//які не містять літери «А» (великої або малої)
//Приклад виконання:
//Повинен знаходити: Wonderful, Joyful
//Не повинен знаходити: Happiness, Time, Task, Apple */

 let words = "Wonderful, Joyful, Happiness, Time, Task, Apple";
let pattern = /\b\w[^Aa]{6,}\b/g;
let matches = words.match(pattern);

console.log(matches);