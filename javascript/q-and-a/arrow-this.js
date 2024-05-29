// // Object as an entity.
// const user = {
//   name: "Stefan",
//   score: 42,
//   addScore() {
//     this.score++;
//     console.log(this.score);
//   },
// };

// user.addScore();

// // Object as a container.
// const min = (...nums) =>
//   nums.reduce((minimum, num) => (num < minimum ? num : minimum), Infinity);

// const max = (...nums) =>
//   nums.reduce((maximum, num) => (num > maximum ? num : maximum), -Infinity);

// const math = {
//   //   min: () => {},
//   min,
//   max,
// };

// console.log(math.min(5, 1, 2, 6, 3, 4));
// console.log(math.max(5, 1, 2, 6, 3, 4));

// Bind

function fnLogName() {
  console.log(this.name);
}

const arrowLogName = () => {
  console.log(this.name);
};

// fnLogName();
// arrowLogName();

const player = {
  name: "Jarek",
  fnLogName,
};

const player2 = {
  name: "Magda",
};

player2.logName = player.fnLogName; //.bind(player2);

arrowLogName.bind(player); // bind doesnt work on arrow functions
arrowLogName();

// player.fnLogName();
// player.arrowLogName();

player2.logName();

class Player {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(this.name);
  }
}

const p1 = new Player("Eustachy");

p1.logName();

const obj = {
  x: 42,
  fn: function () {
    console.log(this.x);
  },
};
