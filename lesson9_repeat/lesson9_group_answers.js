// Напишіть regex, котрий знайде cat та can, але не знайде car

var text = 'cat car can';

//  \b(ca[tn])\b

// Напишіть regex, котрий знайде ВСІ слова котрі починаются на h

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';

// \b[hH]\w*\b

// Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';

// \b\w{6,}\b

//--------------------------------------------------------------------------

// Напишіть regex, котрий знайде кількість чашок кофе.

var text = 'I would like 8 cups of coffee, please.';

// \d+\s*cups?\
// var regex = /\d+\s*cups?/g;

// Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';

// \\w{4,6}\
// /\b\w{4,6}\b/g

// Поміняйте місцями ім'я та прізвище

var name = 'John Smith';

// var reversedName = name.replace(/(\w+)\s+(\w+)/, '$2 $1');

//--------------------------------------------------------------------------
// Напиши сценарій, який знайде мінімальне, максимальне значення массиву, а також виведе суму всіх елементів массиву.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;
let sum = 0;

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
    if (element < min) {
        min = element;
    }

    sum += element;
}

console.log("Максимальне значення массиву - " + max);
console.log("Минимальное значення массиву - " + min);
console.log("Сума всіх елементів - " + sum);

// Ще рішення

/* let minValue = Math.min(...values);
let maxValue = Math.max(...values);

console.log(`Minimum Value: ${minValue}`);
console.log(`Maximum Value: ${maxValue}`); */

//--------------------------------------------------------------------------
// Напишіть сценарій, який знайде в массиві всі від'ємні значення та замінить їх на значення 0.
// Після цього виведіть всі значення массиву.

let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0;
    }
}

for (let value of values) {
    console.log(value);
}
//--------------------------------------------------------------------------
// Напишіть сценарій, який знайде в массиві всі позитивні значення та замінить їх на значення *.
// Після цього виведіть всі значення массиву.

let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

function positiveValues(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = '*';
        }
    }
    console.log(array);
}
positiveValues(array);

//--------------------------------------------------------------------------
/* Завдання:
        Дано массив. Знайдіть середнє арифметичне значення цього массиву.
        Виведіть на екран тільки ті значення, які більше цього цього середнього арифметичного значення. */

let values1 = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];

let suma = 0;
for (const value of values) {
    suma += value;
}

// среднє арифметичне
let avg = suma / values.length;
console.log("avg = " + avg);

for (const value of values) {
    if (value > avg) {
        console.log(value);
    }
}

// Ще рішення

/* let sum = massiv.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / massiv.length;

console.log("Середнє арифметичне значення масиву: " + average.toFixed(2));
console.log("Елементи масиву, які більше середнього арифметичного значення:");
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] > average) {
        console.log(massiv[i]);
    }
} */

//--------------------------------------------------------------------------
/*  Завдання - 4:
 
Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2 */

// до виклику функції
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };
  
  multiplyNumeric(menu);
  
  // після виклику функції
  menu = {
    width: 400,
    height: 600,
    title: "Моє меню"
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  //--------------------------------------------------------------------------
/*  Завдання - 5:
 У нас є об’єкт для зберігання заробітної плати нашої команди. 
 Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum */

 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  var summa = 0;
for (let key in salaries) {
  summa += salaries[key];
}

alert(sum); // 390

//--------------------------------------------------------------------------

/*  Завдання - 5:
 Змініть сценарій. Виведіть інформацію тільки про ти користувачів, хто працює в компанії Keebler LLC */

// массив створено за допомогою https://jsonplaceholder.typicode.com/users
// всі властивості в об'єктах, які знаходяться в массиві, взяті в "". Такий формат даних
let users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

const companyName = "Keebler LLC";
for (const user of users) {
    if (user.company.name == companyName)
        console.log(user.name + " from " + user.address.city);
}

// Інший варіант
/* function ourUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.company.name === 'Keebler LLC') {
            console.log(user);
        }
    }
} */

//--------------------------------------------------------------------------

/* Завдання - 5:
Виведіть на екран властивості first та last з вкладеного об'єкта name. Змініть значення властивості balance на '$2000'.
Видаліть властивість email.
Виведіть на екран весь зміст об'єкта за допомогою кода console.log(user) */

let user = {
    balance: '$1,250.89',
    age: 24,
    name: {
        first: 'Golden',
        last: 'Clements'
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
        {
            id: 0,
            name: 'Buchanan Austin'
        },
        {
            id: 1,
            name: 'Richmond Garrison'
        },
        {
            id: 2,
            name: 'Burns Cook'
        },
        {
            id: 3,
            name: 'Sally Mcpherson'
        }
    ],
    favoriteFruit: 'strawberry'
}

console.log("First Name " + user.name.first);
console.log("Last Name " + user.name.last);
user.balance = "$2000";
delete user.email;
console.log(user);

//--------------------------------------------------------------------------

/*  Завдання - 6:
 
Створіть об’єкт calculator з трьома методами:

- read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
- sum() повертає суму збережених значень.
- mul() множить збережені значення і повертає результат. 

let calculator = {
    // ... ваш код ...
  };
  
  calculator.read(5,6);
  console.log( calculator.sum() );
  console.log( calculator.mul() );

  */

  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read(a, b) {
      this.a = a;
      this.b = b;
    }
  };
  
  calculator.read(5, 6);
  console.log( calculator.sum() );
  console.log( calculator.mul() );

  //--------------------------------------------------------------------------

  /*  Завдання - 6:
 
Створіть об’єкт BankAccount з трьома методами:

- deposit(): додає  суму до поточного балансу.
- withdraw(): зменшує цю суму від поточного балансу. Перевірте, чи є на рахунку достатньо коштів перед зняттям.
- getBalance(): повертає поточний баланс рахунку. */


  let BankAccount = {
    balance : 300,
    deposit(amount) {
      return this.balance += amount;;
    },
  
    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance -= amount;
        }
    },
  
    getBalance() {
        console.log(`Поточний баланс: ${this.balance}`);
    }
  };
  
  BankAccount.getBalance();
  BankAccount.deposit(500); BankAccount.getBalance();
  BankAccount.withdraw(100);  BankAccount.getBalance();

  // Другий варіант рішення
/*   let BankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Снято: ${amount}. Баланс: ${this.balance}`);
        } else {
            console.log('Недостаточно средств для снятия.');
        }
    },
    getBalance: function() {
        console.log("Баланс:", this.balance);
    }
}; */
