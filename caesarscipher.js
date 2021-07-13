function rot13(str) {
  var answer = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
    if (str.charCodeAt(i) < 78) {
    answer += String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else {
      answer += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
    else {
      answer += str.charAt(i);
    }
  }
  return answer;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
