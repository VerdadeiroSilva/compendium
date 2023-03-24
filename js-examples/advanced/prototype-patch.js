function mock() {
  this.useful = () => {
    return "useful";
  };
}

// Acesse e modifique o prototype
mock.prototype.patchedMethod = function () {
  return 'patched-method-returns-whatever';
};

let patched = new mock();

// E tenha esse método acessível
console.log("patched: ", patched.patchedMethod());

// Ou faça loucuras:
Number.prototype.toString = ()=>{
    return 'not-implemented-to-you'
}
let weirdNumber = new Number(2);
console.log(weirdNumber.toString());

