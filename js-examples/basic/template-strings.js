let animals = [
  {
    name: "cow",
    legs: "4",
    eats: "grass",
  },
  {
    name: "snake",
    legs: null,
    eats: "prey",
  },
  {
    name: "chicken",
    legs: "2",
    eats: "corn",
  },
];

animals.forEach((animal) => {
  console.log(
    `${animal.name} has ${animal.legs ? animal.legs : 'no'} legs and eats ${animal.eats}`
  );
});
