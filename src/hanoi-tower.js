const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secForTurn = 3600/turnsSpeed;
  const turns = Math.pow(2, disksNumber)-1;
  const sec = Math.floor(turns * secForTurn);
  return {
    turns: turns,
    seconds: sec
  }
};
