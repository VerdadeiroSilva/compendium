export default class Perceptron {
    weights = [];
    threshold = 1;
    learningRate = 0.1;
    bias = 0;
    data = [];
    api = {};
    debug = false;
    constructor(opts, debug) {
      // Making sure that we have an object to deal with...
      if (!opts) {
        opts = {};
      }
  
      // If overwriting something...
      this.weights = "weights" in opts ? opts.weights.slice() : [];
      this.threshold = "threshold" in opts ? opts.threshold : this.threshold;
      this.learningRate =
        "learningRate" in opts ? opts.learningRate : this.learningRate;
      this.bias = "bias" in opts ? opts.bias : 1;
      this.debug = debug;
  
      // Constructing the perceptron API
      this.api = {
        ...this.api,
        weights: this.weights,
  
        retrain: () => {
          let length = this.data.length;
          let success = true;
          for (var i = 0; i < length; i++) {
            let training = this.data.shift();
            success = this.api.train(training.input, training.target) && success;
          }
          return success;
        },
        train: (inputs, expected) => {
          while (this.weights.length < inputs.length) {
            this.weights.push(Math.random());
          }
          if (this.weights.length === inputs.length) {
            this.weights.push("bias" in opts ? opts.bias : 0.5);
          }
          let result = this.api.perceive(inputs);
          this.data.push({
            input: inputs,
            target: expected,
            prev: result,
          });
  
          if (this.debug) {
            console.log(
              `> training ${inputs}, expecting: ${expected} got: ${result}`
            );
          }
  
          if (result === expected) {
            return true;
          } else {
            if (this.debug) {
              console.log(`> adjusting weights: ${this.weights}, ${inputs}`);
            }
            for (let i = 0; i < this.weights.length; i++) {
              let input = i == inputs.length ? this.threshold : inputs[i];
              this.api.adjust(result, expected, input, i);
            }
            if (this.debug) {
              console.log(" -> weights:", this.weights);
            }
            return false;
          }
        },
        adjust: (result, expected, input, index) => {
          let d = this.api.delta(result, expected, input, this.learningRate);
          this.weights[index] += d;
          if (isNaN(this.weights[index])) {
            throw new Error(`weights[${index}] went to NaN `);
          }
        },
        delta: (actual, expected, input, learningRate) => {
          return (expected - actual) * learningRate * input;
        },
        // Classification Function
        perceive: (inputs, net) => {
          let result = 0;
          for (let i = 0; i < inputs.length; i++) {
            result += inputs[i] * this.weights[i];
          }
          result += this.threshold * this.weights[this.weights.length - 1];
  
          // Here, we decide the class of the input
          return net ? result : result > 0 ? 1 : 0;
        },
      };
    }
  }
  