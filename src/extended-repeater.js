const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!options) {
    if(typeof str !== 'string') {
      return str.toString();
    }
    else return str;
  }
  if(typeof str !=='string' && str!==null) {
    str = str.toString();
  }
  if(str===null) {
    str='null';
  }
  if(options.addition===false) {
    options.addition = 'false';
  }
  if(options.addition===null) {
    options.addition = 'null';
  }
  if(typeof options.addition !== 'string' && options.addition===null) {
    let aaa = options.addition;
    aaa = aaa.toString();
    options.addition = aaa;
  }
  let newStr = [];
  let newAddition = [];
  let separator = '+';
  let additionSeparator = '|';
  if(options.addition) {
    let addCount = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    for(let i=0; i<addCount; i++) {
      if(options.additionRepeatTimes>1 && i<addCount-1) {
        newAddition.push(options.addition +(options.additionSeparator || additionSeparator));
      } else {
        newAddition.push(options.addition);
      }
    }
  }
  const finalAddition = newAddition.join('');

  if(options.repeatTimes && options.repeatTimes>1) {
    for(let i=0; i<options.repeatTimes; i++) {
      if(i!==0) {
        newStr.push((options.separator || separator) + str);
      } else {
        newStr.push(str);
      }
    }
  } else {
    newStr.push(str);
  }
  const finalStr = (newStr.length>1)?(newStr.join(finalAddition)+(finalAddition || '')): newStr.concat(finalAddition).join('');
  return finalStr;
};
  