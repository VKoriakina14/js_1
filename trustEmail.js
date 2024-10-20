/* Опис ДЗ: В нас є масив об'єктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім
 зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, 
гідними довіри. Постарайтеся також зробити просту валідацію до @
одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
 */
let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
validEmail = [];

for(let item of arr){
    
    let pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com/;

    if (item.email.match(pattern)) {

    validEmail.push(item.email); 
}
    
}
console.log(validEmail);