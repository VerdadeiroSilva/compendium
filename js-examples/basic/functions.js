function namedFunction() {
    console.log('named');
    console.log(arguments.callee);
}

let semiAnon = function () {
    console.log('semi-anom');
    console.log(arguments.callee);
};

// anonymous arrow function
() => {
    console.log('anom');
    console.log(arguments.callee);
};
