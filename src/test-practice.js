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

export { capitalize }