// Funções síncronas com tempo médio
const timeout1 = () => {
  setTimeout(() => {
    console.log("a1");
  }, 1000);
};
const timeout2 = () => {
  setTimeout(() => {
    console.log("a2");
  }, 2000);
};

// Funções praticamente imediatas
const imediate1 = () => {
  console.log("n1");
};
const imediate2 = () => {
  console.log("n2");
};
const imediate3 = () => {
  console.log("n3");
};

// Função lenta
const slowCalc = async () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
};


// Exemplo inicial

const all = async () => {
  //sync, muito rápida
  imediate1();

  // async, muito lenta
  // o await só solta a execução de all quando a Promise é completada/rejeitada
  await slowCalc().then((sum) => console.log(sum));

  //sync, médio
  timeout1();

  //sync, muito rápido
  imediate2();

  //sync, médio, mais lento que o 1
  timeout2();

  // sync, muito rápido
  imediate3();
};

// all();

// Nesse exemplo, como all é async, ele só "espera" o que você falar pra ele esperar (await)
// Então imediate1, espera um tempão até que slowCalc seja resolvida
// timeout1 é aberta, mas ela espera 1s para executar, enquanto isso você não mandou all esperar
// Então, imediate2, rapidinho faz o console.log
// timeout2 já abre (enquanto isso, imediate1 tá rodando o relogio tb)
// Mas imediate3 tb executa muito mais rapido que os timeOuts, console.log vai pra tela
// Só quando termina o primeiro timeOut faz o "a1", e um segundo depois, "a2"

// Vamos declarar all() de forma diferente:
// Sem async
const all2 = () => {
  // mesma ordem:
  imediate1();

  // nesse caso, não podemos usar await
  slowCalc().then((sum) => {
    console.log(sum);
  });

  timeout1();

  imediate2();

  timeout2();

  imediate3();
};

// all2();

// Chamando all2(), função síncrona, a execução será feita em ordem
// A sua pergunta foi: porque os logs aparecem na ordem, mas só depois do tempão de slowCalc?
// É porque temos o .then(), que só é executado após a promessa (demorada) ser completa/rejeitada
// Vamos criar um all3, pra clarear:

const all3 = () => {
    // tb mesma ordem:
    imediate1();
  
    // nesse caso, sem o .then
    console.log(slowCalc());
  
    timeout1();
  
    imediate2();
  
    timeout2();
  
    imediate3();
  };

all3();