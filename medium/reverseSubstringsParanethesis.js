var reverseParentheses = function(s) {
  for(let i = 0; i < s.length; i++) {
    if(s[i] == ")") {
      let currString = ""
      let j = i - 1;
      while (s[j] != "(") {
        currString += s[j]
        j -= 1
      }
      s = s.slice(0, j) + currString + s.slice(i+1)
      i -= 2
    }
  }
  return s
}
console.log(reverseParentheses("(abcd)"))
// console.log(reverseParentheses("(u(love)i)"))
// console.log(reverseParentheses("(ed(et(oc))el)"))