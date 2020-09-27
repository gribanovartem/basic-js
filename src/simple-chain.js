const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    // this.arr.push('( ' + this.arr.length + ' )');
    return this.arr.length;
  },
  addLink(value) {
    if(typeof value !== 'undefined') {
      this.arr.push('( ' + value + ' )');
    } else {
      this.arr.push('(  )');
    }
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error('THROWN');
    } else {
      this.arr.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const finishString = this.arr.join('~~');
    this.arr = [];
    return finishString;
  }
};

module.exports = chainMaker;
