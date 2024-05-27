
У файлі src/db/db.json зберігається колекція контактів. Поки що там порожній масив, але ви будете його далі наповнювати.



У файлі src/constants/contacts.js є оголошена константа PATH_DB. Ініціалізуйте її значенням, яке буде зберігати шлях до файлу src/db/db.json.



У файлі package.json, вже описані скрипти, які виконують код певних файлів:

npm run get-all - виконує код із файлу src/scripts/getAllContacts.js

npm run generate - виконує код із файлу src/scripts/generateContacts.js

npm run add-one- виконує код із файлу src/scripts/addOneContact.js

npm run count- виконує код із файлу src/scripts/countContacts.js

npm run thanos- виконує код із файлу src/scripts/thanos.js

npm run remove-all- виконує код із файлу src/scripts/removeAllContacts.js



В файлі src/utils/createFakeContact.js оголошена функція createFakeContact, яка створює контакт з випадковими даними. Для генерації реалістичних випадкових даних, таких як імена, телефонні номери, емейли тощо використовується бібліотека [@faker-js/faker](<https://github.com/faker-js/faker>).



Встанови її у свій проєкт командою:

npm i -D @faker-js/faker



В цій бібілотеці зараз нас будуть цікавити наступні методи:

faker.person.fullName() для генерації повних імен;
faker.phone.number() для створення телефонних номерів;
faker.internet.email() для формування електронних адрес;
faker.person.jobTitle() для генерації назв професій.


Крок 2



У файлі src/scripts/generateContacts.js опишіть функцію generateContacts. Вона має за допомогою функції createFakeContact, створювати передану кількість згенерованих контактів, а потім додавати їх до масиву у файлі src/db/db.json і записувати їх назад у файл src/db/db.json.



Переконайтесь, що ваша функція generateContacts коректно додає нові контакти до вже існуючих, а не перезаписує весь файл. Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість контактів, наприклад 5. Якщо контактів було 3 і у виклик передали 5, то після виклику функції їх має стати 8.



Перевірити роботу функції можна виконавши команду npm run** generate, яка буде виконувати код у файлі src/scripts/**generateContacts.js**. У файлі src/db/**db.json мають відбутися відповідні зміни.



Крок 3



У файлі src/scripts/addOneContact.js опишіть функцію addOneContact. Вона має додавати до масиву у файлі src/db/db.json лише один згенерований контакт. Забезпечте правильне додавання одного контакту до масиву, збереження змін у файлі.

import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const allContactsJson = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(allContactsJson);
    const oneContact = createFakeContact();
    allContacts.push(oneContact);
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};


Перевірити роботу функції можна виконавши команду npm run add-one, яка буде виконувати код у файлі src/scripts/addOneContact.js. У файлі src/db/db.json мають відбутися відповідні зміни.



Крок 4



У файлі src/scripts/getAllContacts.js опишіть функцію getAllContacts. Вона має повертати масив контактів із файлу src/db/db.json. Функція має коректно читати масив контактів з файлу.



Перевірити роботу функції можна виконавши команду npm run get-all, яка буде виконувати код у файлі src/scripts/getAllContacts.js.



Крок 5



У файлі src/scripts/countContacts.js опишіть функцію countContacts. Вона має повертати кількість контактів в масиві у файлі src/db/db.json.Переконайтесь, що функція точно рахує кількість контактів.

Перевірити роботу функції можна виконавши команду npm run count, яка буде виконувати код у файлі src/scripts/countContacts.js.



Крок 6



У файлі src/scripts/removeAllContacts.js опишіть функцію removeAllContacts. Вона має видаляти усі контакти з масиву у файлі src/db/db.json.



Перевірити роботу функції можна виконавши команду npm run remove-all, яка буде виконувати код у файлі src/scripts/removeAllContacts.js. У файлі src/db/db.json мають відбутися відповідні зміни.



Крок 7



У файлі src/scripts/thanos.js опишіть функцію thanos. Вона має пройтись по усьому масиву контактів у файлі src/db/db.json та із вірогідністю 50 відсотків спробує видалити кожен контакт.



Перевірити роботу функції можна виконавши команду npm run thanos, яка буде виконувати код у файлі src/scripts/thanos.js. У файлі src/db/db.json мають відбутися відповідні зміни.
