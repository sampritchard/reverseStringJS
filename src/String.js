function reverse(string) {
  if (string.length <= 1 ) {
    return string;
  } else {
    var newString = "";
    for (var i = string.length -1; i >=0; i--) {
      newString += string[i];
    }
    return newString;
  }
}
