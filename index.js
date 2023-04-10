// const playlist = {
//     name: 'My favorite music',
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     trackCount: 3,
// }

// console.log(playlist);
// // console.log(playlist.tracks);
// // console.log(playlist.name);
// // console.log(playlist.trackCount);

// console.log(playlist.tracks);

// const inputName = 'color';
// const inputValue = 'blue';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bed: 3,
// };
// let totalFeedback = 0;

// const keys = Object.keys(feedback); - повертає масив ключів
// console.log(keys);

// for (const key of keys) {
//     console.log(feedback[key]);
// }

// повертає масив значень

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }
// console.log('totalFeedback: ', totalFeedback);



// ищем друга по имени

// const friends = [
//     {name: 'Mango', online: false },
//     {name: 'Kiwi', online: true },
//     {name: 'Poly', online: true },
//     {name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends){
//     console.log(friend.name);
// }

// const findFriendByName = function(allFriends, friendName) {
//     for (friend of allFriends){
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'Yes!!!';
//         }
//     }
//     return 'Not!!!'
// };

// // console.log(findFriendByName(friends, 'Poly' ));
// // console.log(findFriendByName(friends, 'Chelsy' ));


// // Отримуємо імена всіх друзів:

// const getAllNames = function (allFriends) {
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }

//     return names;
// }
// console.log(getAllNames(friends));


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);

//   for (const key of keys) {
//     values.push(apartment[key]);
//   }

//   console.log(values)

//! ======================================================
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
// }

//   console.log(colors);
//   console.log(hexColors);
//   console.log(rgbColors);

//! ======================================================
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return `Камінь ${stoneName} не знайдено`;
// }

// const total = calcTotalPrice(stones, "Рубін");
// console.log(total);

//! ======================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//         return product.price;
//     }
//   }

//     // Change code above this line
//   }
// const total = getProductPrice("Droid");
// console.log(total);

//! ======================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
// return 0;
//     // Change code above this line
// }

// const total = calculateTotalPrice("Droid");
// console.log(total);


// ======================================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// =======================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line

//   const names = [...books]
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b))

//   console.log(names)


// =======================================================
// class Storage {
//     constructor(items){
//       this.items = items;
//     }
//     getItems() {
//       return this.items;
//     }
//     addItem(newItem) {
//       this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//    this.items = this.items.filter(item => item !== itemToRemove);
//     }
//   }


//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//     constructor(initialValue) {
//       this.value = initialValue;
//     }

//     getValue() {
//       return this.value;
//     }

//     padEnd(str) {
//       this.value = this.value + str;
//     }

//     padStart(str) {
//       this.value = str + this.value;
//     }

//     padBoth(str) {
//       this.value = str + this.value + str;
//     }
//   }



// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// =======================================================

// class Car {
//     // Change code below this line
//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

// }


// =======================================================

// class Storage {
//     // Change code below this line
//     #items;

//     constructor(items) {
//       this.#items = items;
//     }

//     getItems() {
//       return this.#items;
//     }

//     addItem(newItem) {
//       this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }

//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// =======================================================

// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }

//     #email;

//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }

//   const mango = new User({ email: "mango@mail.com" });

//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));


// class User {
//     #email;

//     constructor(email) {
//       this.#email = email;
//     }

//     get email() {
//       return this.#email;
//     }

//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }

//   class ContentEditor extends User {
//     // Тіло класу ContentEditor
//   }

//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); // { email: "mango@mail.com" }
//   console.log(editor.email); // "mango@mail.com"


//   class User {
//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this._email;
//     }

//     set email(newEmail) {
//       this._email = newEmail;
//     }
//   }

//   class Admin extends User {
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser"
//     };

//     constructor(email) {
//       super(email);
//     }

//     addToBlacklist(user) {
//       // Додавання пошти користувача у чорний список
//     }
//   }
//=========================================================

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//=========================================================
class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    blacklistedEmails = [];

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email);
    }



    // Change code above this line
}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
