const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.isRevert = !bool;
    this.letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyStr = '';
    let count = 0;
    for(let j=0; j<message.length; j++) {
      if(this.letters.indexOf(message[j])!==-1) {
        keyStr += key[count];
        count++;
      } else {
        keyStr += message[j];
      }
      if(count===key.length) {
        count = 0;
      }
    }
    let decryptStr = '';
    for(let i=0; i<message.length; i++) {
      let char;
      if(this.letters.indexOf(message[i])!==-1) {
        char = (this.letters.indexOf(message[i]) + this.letters.indexOf(keyStr[i]));
        char = char >= 26 ? char % 26 : char;
        decryptStr += this.letters[char];
      } else {
        decryptStr += message[i];
      }
    }
    if(this.isRevert) {
      return decryptStr.split('').reverse().join('');
    } else return decryptStr;
    
  }    
  decrypt(message, key) {
    key = key.toUpperCase();
    let keyStr = '';
    let count = 0;
    for(let j=0; j<message.length; j++) {
      if(this.letters.indexOf(message[j])!==-1) {
        keyStr += key[count];
        count++;
      } else {
        keyStr += message[j];
      }
      if(count===key.length) {
        count = 0;
      }
    }
    let decryptStr = '';
    for(let i=0; i<message.length; i++) {
      let char;
      if(this.letters.indexOf(message[i])!==-1) {
        char = (this.letters.indexOf(message[i]) + 26 - this.letters.indexOf(keyStr[i]));
        char = char >= 26 ? char % 26 : char;
        decryptStr += this.letters[char];
      } else {
        decryptStr += message[i];
      }
    }
    if(this.isRevert) {
      return decryptStr.split('').reverse().join('');
    } else return decryptStr;
  }
}

module.exports = VigenereCipheringMachine;
