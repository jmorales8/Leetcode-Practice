var myAtoi = function(s) {
  let cleanedString = ""
  let isNegative = false;
  let hasSeenPlus = false;
  let hasReachInts = false
  let hasSeenOddCombos = false;
  let stages = 0
  for(let i = 0; i < s.length; ++i) {
    const charCode = s[i].charCodeAt(0);
    if(stages == 0) {
      if(s[i] == "-") isNegative = true
      if(s[i] == "+") hasSeenPlus = true
      if(charCode >= 47 && charCode <= 57) {
        stages++;
      }
      if((isNegative && hasSeenPlus)) return 0
      if(isNegative && (s[i] == " " ) || hasSeenPlus && (s[i] == " " || s[i+1] == "+")) return 0
      if((s[i] == "-")&&s[i+1] == "-") return 0
      if(s[i] != "-" && s[i] != "+" && !(charCode >= 47 && charCode <= 57) && s[i] != " ") stages = 2
    }
    if(stages == 1) {
      if (charCode >= 48 && charCode <= 57) {
        cleanedString += s[i]
      } else {
        stages++
      }
    }
  }
  if (Number.isNaN(parseInt(cleanedString))) {
    return 0
  } else {
    const parsedInt = parseInt(cleanedString)
    if(isNegative) {
      return parsedInt * -1 < (2**31) * -1 ? (2**31) * -1 : parsedInt * -1
    } else {
      return parsedInt < ((2**31) - 1) ? parsedInt : (2**31) - 1
    }
  }
};

console.log(myAtoi("0-1"));          // 0
console.log(myAtoi("1337c0d3"));     // 1337
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("   -042"));       // -42
console.log(myAtoi("+123"));          // 123
console.log(myAtoi("-91283472332"));
console.log(myAtoi("+-12"));
console.log(myAtoi("  -  413"))
console.log(myAtoi("-5-"))
console.log(myAtoi(" --2"))