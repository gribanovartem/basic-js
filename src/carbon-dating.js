const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != 'string' || typeof (Number(sampleActivity)) != 'number' || sampleActivity <=0 || sampleActivity > 10 || isNaN(Number(sampleActivity))) {
    return false;
  } else {
    const k = Math.log(2)/HALF_LIFE_PERIOD;
    return Math.ceil((Math.log(MODERN_ACTIVITY/Number(sampleActivity)))/k);
  }
};
