// Um callback é uma função passada por parâmetro para outra função
// e então invocada, geralmente p/ completar algum processo

function iNeedCallbacks(value, cb) {
  // primeiro executa isso aui
  console.log(value);

  // e depois completa com isso aqui
  cb("aquilo-ali");
}

let callback = (val) => {
  if (!val) {
    console.log("bye-bye-no-catchers...");
    throw new Error("você-não-quer-lidar-com-isso-sem-as-promises");
  }
  console.log("parece bom, mas completando com");
  console.log(val);
  console.log("melhora\n\n");
};

// Aqui, a função 'iNeedCallbacks recebe uma string e uma função completar, que
// será executada dentro da primeira:
// iNeedCallbacks("isso-aqui", callback);

// Quando os deuses astronautas ensinaram javascript aos incas, investir nesse tipo de arquitetura
// fazia algum sentido. Mas e quando você precisar passar um callback para o callback de uma função assíncrona que recebe
// dois callbacks e um vetor de callbacks... Você entrou no 'callback-hell';

//Pra transformar isso, use Promises!
const iPromiseYou = (value) => {
  return new Promise((resolve, reject) => {
    iNeedCallbacks(value, () => {
      try {
        console.log("mais");
        callback(value);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
};

iPromiseYou("promessas")
  .then()
  .catch(() => {
    console.log("assim é mais fácil lidar com possíveis erros");
  });
iPromiseYou(false)
  .then()
  .catch((err) => {
    console.log("olha mãe, sem callbacks!");
  });

// Se você não usar o .catch, coisas ruins acontecem...

/*
iPromiseYou(false)
  .then(() => {
    console.log("isso nunca vai acontecer");
  })
  .catch(() => {});
//   .catch((err) => {
//     console.log(`é por ISSO -> \n\n ${err.message}  \n que eu uso promises...`);
//   });
*/

// Mas ainda assim, coisas do tipo:
let quick, slow, medium, hasty;

quick = new Promise((resolve) => {
  setTimeout(resolve, 100, "quick");
});

slow = new Promise((resolve) => {
  setTimeout(resolve, 800, "slow");
});

medium = new Promise((resolve) => {
  setTimeout(resolve, 500, "medium");
});

hasty = new Promise((resolve) => {
  resolve("blazingly-fast");
});

// São bem mais simples de pensar...

quick
  .then(hasty.then((value) => console.log("***", value)))
  .then(slow)
  .then((value) => {
    console.log("---", value);
  })
  .finally(() => {
    console.log("after-all");
  });

// Essa cadeia não segue uma ordem e não expõe diretamente os resultados,
// mas a interface Promises tá aí pra ser usada

Promise.all([quick, hasty, slow, medium]).then((value) => console.log(value));

// Faz os console.log
Promise.race([quick, hasty, slow, medium]).then((value) => console.log(value));

// Promise.any(), Promise.allSettled();
