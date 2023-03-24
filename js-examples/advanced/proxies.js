const handler = {
  apply: function (target, thisArg, argumentsList) {
    let weird = Array.prototype.concat("weird-concat", [...argumentsList]);
    console.log(weird);
  },
};

let proxy_function = new Proxy(Array.prototype.concat, handler);

let array = ["gonna", "concat"];

console.log(array.concat("normal"));
proxy_function(array, "abc");

// Use para validações

let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) throw new TypeError("not-an-integer");
      if (value > 200) throw new RangeError("200-years-is-too-much");
    }
    obj[prop] = value;

    return true;
  },
};

let person = new Proxy({}, validator);

person.age = '100';
console.log(person.age);
// person.age = 201; -> throw de erro

// Use para extender construtores com novos construtores


