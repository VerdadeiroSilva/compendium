// Nessa função, a variável prop 'morre' logo após a chamada
function y(custom) {
  let prop = custom;
  console.log(prop);
}

// console.log(y('te-vejo')); // Eu vejo a prop só dentro da execução
// console.log(y.prop); // Aqui fora não

// Uma function que acesse/modifique o objeto especial this é exposta como uma classe
function ugly(custom) {
  this.prop = "my-prop" + "-" + custom;
}

// Ou seja, ela tem um constructor e pode ser construída com o new
let b = new ugly("custom-prop");

// E as propriedades daquele this ficam acessíveis;
// console.log(b.prop);

// Claro que assim fica mais bonito
class Beautiful {
  constructor(level) {
    this.level = level;
  }
}

let myBeautiful = new Beautiful(12);

console.log(myBeautiful.level);

// Usando Orientação à Objetos

// extendendo classes
class Animal {
  constructor(reader = false, name) {
    this.name = name;
    this.canIRead = reader;
  }
  eat() {
    console.log("yummie!");
  }
  read() {
    if (!this.canIRead) {
      console.log("not every animal can read");
    }
  }
}

class Human extends Animal {
  constructor(name) {
    super(true);
    this.name = name;
  }
  read() {
    console.log("only humans can read");
  }
}

let dog = new Animal(false, "rex");
let me = new Human("arthur");

console.log(me.name);
dog.eat();
me.eat();
dog.read();
me.read();

// Isso pode ser feito com classes old-school:

function oldStyleClass() {
  this.style = "old";
}

oldStyleClass.prototype.oldStyleMethod = function () {
  console.log("old-style");
};

class newStyle extends oldStyleClass {}

let newClass = new newStyle();

newClass.oldStyleMethod();