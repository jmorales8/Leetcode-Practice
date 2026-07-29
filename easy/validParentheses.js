const validMatching = {
  ")": "(",
  "]": "[",
  "}": "{"
}
var isValid = function(s) {
  let savedPattern = "";
  for(let i = 0; i < s.length; i++) {
    if(s[i] == "(" || s[i] == "{" || s[i] == "[") {
      savedPattern += s[i]
    } else {
      if(validMatching[s[i]] == savedPattern[savedPattern.length - 1]) {
        savedPattern = savedPattern.slice(0, -1)
      } else {
        return false
      }
    }
  }
  if(savedPattern == "") {
    return true
  } else {return false}
};

console.log(isValid("()[]{}"))
console.log(isValid("()"))
console.log(isValid("(]"))
console.log(isValid("([])"))
console.log(isValid("([{}]())("))
console.log(isValid("([)]"))