// const users = ["Adam", "Beth", "Cecil", "Dorthy", "Edmund", "Faith"];

// // While
// const exampleWhile = () => {
//   let i = 0;

//   while (i < 4) {
//     if (i === 0) {
//       i++;
//       continue;
//     }

//     console.log(users[i]);
//     i = i + 1;

//     if (i === 3) break;
//   }
// };
// // exampleWhile();

// for (let i = 0; i < users.length; i = i + 2) {
//   //   console.log(users[i]);
// }

// for (const user of users) {
//   //   console.log(user);
// }

// for (const i in users) {
//   //   console.log(i, users[i]);
// }

// const obj = {
//   first: "a",
//   second: "b",
//   third: 42,
// };

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// Check Storage fn

// function checkStorage(storage, item) {
//   return storage.includes(item.toLowerCase())
//     ? `${item.toLowerCase()} is available to order!`
//     : "Sorry! We are out of stock!";
// }

// function checkStorage(storage, item) {
//   item = item.toLowerCase();

//   for (const product of storage) {
//     if (product === item) return `${item} is available to order!`;
//   }

//   return "Sorry! We are out of stock!";
// }

// const checkStorage = (storage, item) =>
//   storage.find((product) => product === item.toLowerCase())
//     ? `${item.toLowerCase()} is available to order!`
//     : "Sorry! We are out of stock!";

// const checkStorage = (storage, item) =>
//   storage.some((product) => product === item.toLowerCase())
//     ? `${item.toLowerCase()} is available to order!`
//     : "Sorry! We are out of stock!";

// const checkStorage = (storage, item) =>
//   storage.filter((product) => product === item.toLowerCase()).length
//     ? `${item.toLowerCase()} is available to order!`
//     : "Sorry! We are out of stock!";

const checkStorage = (storage, item) =>
  storage.reduce(
    (acc, product) => (acc ? acc : product === item.toLowerCase()),
    false
  )
    ? `${item.toLowerCase()} is available to order!`
    : "Sorry! We are out of stock!";

const tests = [
  {
    result: checkStorage(["apple", "plum", "pear"], "plum"),
    expected: "plum is available to order!",
  },
  {
    result: checkStorage(["apple", "plum", "pear"], "pLuM"),
    expected: "plum is available to order!",
  },
  {
    result: checkStorage(["apple", "plum", "pear"], "pear"),
    expected: "pear is available to order!",
  },
  {
    result: checkStorage(["apple", "plum", "pear"], "pEAr"),
    expected: "pear is available to order!",
  },
  {
    result: checkStorage(["apple", "plum", "pear"], "orange"),
    expected: "Sorry! We are out of stock!",
  },
  {
    result: checkStorage(["apple", "plum", "pear"], "carrot"),
    expected: "Sorry! We are out of stock!",
  },
];

const isPassing = tests.every((test) => test.result === test.expected);
console.log({ isPassing });
