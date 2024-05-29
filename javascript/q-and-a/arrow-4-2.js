/*
Napisz funkcję calcAverageCalories(days), która zwraca średnią dzienną wartość liczby kalorii, które sportowiec spożywał w ciągu tygodnia.

Funkcja oczekuje jednego parametru: days — tablicy obiektów.

Każdy obiekt opisuje dzień tygodnia oraz liczbę kalorii calories, spożytych przez sportowca tego dnia.

Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.
*/

// const calcAverageCalories = (days) => {
//   const totalCalories = days.reduce((acc, day) => {
//     return acc + day.calories;
//   }, 0);

//   // console.log(totalCalories);
//   const avg = totalCalories / days.length;

//   return avg;
// };

// const calcAverageCalories = (days) =>
//   days.reduce((acc, day) => acc + day.calories, 0) / days.length;

const avg = (nums) => nums.reduce((sum, num) => sum + num, 0) / nums.length;

const calcAverageCalories = (days) => avg(days.map((day) => day.calories));

// Tests
const testCases = [
  {
    days: [
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 },
    ],
    expected: 3180,
  },
  {
    days: [
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 },
    ],
    expected: 2270,
  },
];

const allTestsPassing = testCases.every(
  (testCase) => testCase.expected === calcAverageCalories(testCase.days)
);

console.log({ allTestsPassing });
