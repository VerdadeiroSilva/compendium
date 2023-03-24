(() => {
  a = 3;
  var b = a - 1;
  console.log(b);
  var a; // Perceba que o 'var' sobe o a no escopo, mas não coloca um valor nele.
})();
