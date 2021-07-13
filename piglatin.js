function translatePigLatin(str) {
  if (str.charAt(0) == "a" || str.charAt(0) == "e" || str.charAt(0) == "i"|| str.charAt(0) == "o"|| str.charAt(0) == "u") {
    return str+"way";
  }
  else {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i"|| str.charAt(i) == "o"|| str.charAt(i) == "u") {
        return str.substring(i) + str.substring (0,i) + "ay";
      }
    }
  }
        return str+"ay";
      }

translatePigLatin("california");
