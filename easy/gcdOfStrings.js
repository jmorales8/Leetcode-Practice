var gcdOfStrings = function(str1, str2) {
  let divisorString = ""
  const str1length = str1.length
  const str2length = str2.length
  const shortString = (str1length == str2length ? str1 : (str1length > str2length) ? str2: str1)
  console.log("i am bruh", shortString)
  const min = Math.min(str1.length, str2.length);

  console.log()
  for(let i = min - 1; i >= 0; i--) {
    console.log(shortString[i])
  }
  return("fart")
};

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))
console.log(gcdOfStrings("AAAAAB", "AAA"))