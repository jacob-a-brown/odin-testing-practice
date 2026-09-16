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

const caesarCypher = function(str, num){
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  lowerCaseLetters = lowerCaseLetters.split("");
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  upperCaseLetters = upperCaseLetters.split("");

  const strArray = str.split("");
  const caesarArray = [];

  console.log(lowerCaseLetters);

  strArray.forEach((char) => {
    let currentIndex;
    let cypherIndex;

    if(lowerCaseLetters.includes(char)){
      currentIndex = lowerCaseLetters.findIndex((letter) => letter === char)
      cypherIndex = (currentIndex + num) % 26;
      caesarArray.push(lowerCaseLetters[cypherIndex])
    } else if (upperCaseLetters.includes(char)) {
      currentIndex = upperCaseLetters.findIndex((letter) => letter === char)
      cypherIndex = (currentIndex + num) % 26;
      caesarArray.push(upperCaseLetters[cypherIndex])
    } else {
      caesarArray.push(char)
    }
  })

  return caesarArray.join("");

}

const analyzeArray = function(arr) {
  const average = arr.reduce((prev, cur) => prev + cur) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}

export { capitalize, reverseString, Calculator, caesarCypher, analyzeArray }