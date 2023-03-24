let vector = [
  { id: "abc", name: "crash", reason: "internet" },
  { id: "def", name: "johannes", result: "200" },
  { id: "xyz", name: "kepler", result: "401" },
];

// Repositórios implementam updateByMany([ids])

function updateByManyIds(ids) {
  ids.forEach((el, index) => {
    console.log(el, ` index: ${index}`);
  });
}

let vectorIds = vector.map((o) => o.id);

updateByManyIds(vectorIds);

//map coloca uma posição vazia se o.algo não existir, como no caso do id:abc
let resultVector = vector.map((o) => o.result);

console.log(`Result Ids: ${resultVector}`);

let resultFilteredIds = vector.filter((el) => el.result === "401");
console.log(`Result Filtered Ids: ${resultFilteredIds[0].name}`);

const map = new Map([
  [
    "abc",
    (check) => {
      if (check) console.log("easy as 123");
      else console.log("babadabadada")
    },
  ],
  [
    "do-re-mi",
    () => {
      console.log("you and me girl!");
    },
  ],
]);

map.get("abc")();
map.get("abc")(true);