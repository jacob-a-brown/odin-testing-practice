const capitalize = function(str){
  if (typeof str !== "string" ) {
    throw new Error("argument must be a string");
  } else if (str.length === 0) {
    return "";
  }

  const firstLetter = str.substr(0, 1);
  const otherLetters = str.substr(1);
  return firstLetter.toUpperCase() + otherLetters;
}

const reverseString = function(str) {
  if (typeof str !== "string" ) {
    throw new Error("argument must be a string.");
  }

  const strArray = str.split("");
  strArray.reverse();
  const reversedStr = strArray.join("");
  return reversedStr;
}

class Calculator {

  constructor(){

  }

  static add(a, b){
    return a+b;
  }

  static subtract(a, b) {
    return a-b;
  }

  static divide(a, b){
    return a/b;
  }

  static multiply(a, b){
    return a*b;
  }
}

export { capitalize, reverseString, Calculator }