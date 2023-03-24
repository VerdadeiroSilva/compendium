eval('console.log("isso é perigoso...");');

let f = new Function('msg', 'return `${msg}, é o que eu te digo`');

console.log(f('é perigoso'));

