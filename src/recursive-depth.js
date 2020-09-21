const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1) {
    let locDepth = depth;
    array.forEach((item, i) => {
      if (Array.isArray(item)) {
        let subDepth = this.calculateDepth(item, depth + 1);
        if (subDepth > locDepth) {
          locDepth = subDepth;
        }
      }
    })
    return locDepth;
  }
};