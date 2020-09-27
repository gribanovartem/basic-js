const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('THROWN');
  }
  let newArr = [];
  for(let i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if(arr[i+2] ==='--discard-prev' || arr[i+2] ==='--double-prev') {
          i += 2;
        } else {
          i++;
        }
        break;
      case '--discard-prev':
        if(newArr.length!==0) {
          newArr.pop();
        }
        break;
      case '--double-next':
        if(typeof (arr[i+1])!=='undefined') {
          newArr.push(arr[i+1]);
        }
      break;
      case '--double-prev':
        if(newArr.length!==0 && arr[i-2]!=='--discard-next') {
          newArr.push(newArr[newArr.length-1]);
        }
      break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  return newArr;
};
