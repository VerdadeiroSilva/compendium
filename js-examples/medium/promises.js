// Promises, como tudo por aqui, são objetos.
let quick, slow, hasty;

let errorPromise;

// Elas, em específico, são classes, e tem um constructor.
quick = new Promise((resolve) => {
  setTimeout(resolve, 100, "quick");
});

slow = new Promise((resolve) => {
  setTimeout(resolve, 800, "slow");
});

medium = new Promise((resolve) => {
  // No constructor dela, você deve passar um 'executor';

  // O 'setTimeOut', vocês sabem, se escreve assim:
  // setTimeOut(handler, timeout, ...arguments),
  // Nesse caso, vamos chamar resolve("slow") depois de 500ms

  setTimeout(resolve, 500, "medium");
});

hasty = new Promise((resolve) => {
  //no time to time-outs, bro
  resolve("blazingly-fast");
});

errorPromise = new Promise((resolve, reject) => {
  // E um método reject();
  reject("error-rejection");
});

// E você pode fazer coisas normais com ela
let prArray = [quick, medium, hasty];

// Você pode renomear o executor de uma Promise
// mas ele sempre será uma function que recebe duas functions como argumento:
// executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void
let minimal = new Promise((a,b)=>{
    setTimeout(a, 500, 'minimal')
})


weirdPromise("some-shit").then((value) => {
  console.log("dude, you are weird...", value);
});

// Todas as Promises possuem três métodos:
// .then() -> Executado quando a Promise é preenchida
// .finally() -> Executado depois que a Promise termina
// .catch() -> Pra pegar erros e rejeições

// Só resolve com todas promessas resolvidas.
// Perceba que o tipo desse value é um array, com as promessas todas
Promise.all(prArray).then((value) => {
  console.log(value, "-> all");
});

// Resolve com alguma das promessas resolvidas.
Promise.any(prArray).then((value) => {
  console.log(value, "-> any");
});

// Resolve com a primeira promessa resolvida.
Promise.race(prArray).then((value) => {
  console.log(value, "-> race");
});

// Qual a diferença entre .race e .any???

// Esse .race, sem um catch(), estoura um erro fatal de "unhandled rejection", caso o reject de uma das promessas ocorra antes
// do resolve das outras... ou seja, se você precisar de uma 'corrida' de promessas, e uma delas puder estourar um erro (throw)
// você tem que usar um catch(), ou sua aplicação vai parar.

Promise.race([slow, errorPromise])
  .then((value) => {
    console.log(value, "-> race with error");
  })
  .catch((err) => {
    console.log("que bom que eu uso catch");
  });

// Já isso, resolve com alguma das promessas resolvidas, a vida não é uma corrida.
// Ou seja, se alguma das promessas for rejeitada, a promessa-resultado continua esperando outras pra resolver
Promise.any([quick, slow, errorPromise]).then((value) => {
  console.log(value, "-> any with error");
});

// Promise.any([slow, quick, errorPromise]).then((value) => {
//   console.log(value, "-> any with error");
// });
