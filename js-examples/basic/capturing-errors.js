let example = (val) => {
  if (!val) {
    throw new Error("no-value");
  } else {
    console.log("only-with-value: ", val);
    return;
  }
};

try {
  example(1);
} catch (error) {
  console.log(`error throwed 1: ${error.message}`);
}

try {
  example();
} catch (error) {
  console.log(`error throwed 2: ${error.message}`);
}

example(3);

example(null)