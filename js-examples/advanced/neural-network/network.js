import Perceptron from "./perceptron.js";

let myNeuron = new Perceptron({}, true);

myNeuron.api.train([1, 1, 1], 1);
myNeuron.api.train([0, 0, 1], 1);
myNeuron.api.train([0, 1, 0], 1);
myNeuron.api.train([1, 0, 0], 1);
myNeuron.api.train([1, 0, 1], 1);
myNeuron.api.train([1, 1, 0], 1);
myNeuron.api.train([0, 0, 0], 0);

while(!myNeuron.api.retrain()) {}

console.log(myNeuron.api.perceive([1,0,1]));
