class SmartCalculator {
  constructor(initialValue) {
    this.value = String(initialValue);
  }

  toString(){
    return eval(this.value);
  }

  add(number) {
    this.value = `${this.value} + ${number}`;
    return this;
  }

  subtract(number) {
    this.value = `${this.value} - ${number}`;
    return this;
  }

  multiply(number) {
    this.value = `${this.value} * ${number}`;
    return this;
  }

  devide(number) {
    this.value = `${this.value} / ${number}`;
    return this;
  }

  pow(number) {
    this.value = `${this.value} ** ${number}`;
    return this;
  }
}
module.exports = SmartCalculator;