const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    const newArr = members.map((item)=> {
      if(typeof item === 'string') {
        return item.trim()[0].toUpperCase();
      }
    });
    return newArr.sort().join('');
  } else return false;
  
};
