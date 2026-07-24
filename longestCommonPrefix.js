// var longestCommonPrefix = function(strs) {
//   let prefixString = strs[0]
//   for(let i = 1; i < strs.length; i++) {
//     let currPrefixString = "";
//     console.log(prefixString)
//     for(let j = 0; j < strs[i].length; j++) {
//       if(strs[i-1][j] == strs[i][j]) {
//         console.log("front and back are the same letters so we add to: ", currPrefixString)
//         currPrefixString += strs[i][j]
//         console.log("now is: after we add it", currPrefixString)
//       } else {
//         console.log("letters dont match it", currPrefixString)
//         if((currPrefixString.length < prefixString.length) && currPrefixString != "") {
//           prefixString = currPrefixString
//         }
//         break;
//       }
//     }
//   }
//   return prefixString
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

var longestCommonPrefix = function(strs) {
  let prefixString = strs[0]
  let longestSub = strs[0].length
  for(let i = 1; i < strs.length; i++) {
    for(let j = 0; j <= longestSub; j++) {
      if(strs[i-1][j] != strs[i][j]) {
        prefixString = strs[i].slice(0,j)
        longestSub = j
        if(j == 0) return ""
        break;
      }
    }
  }
  return prefixString
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["dog"]))
console.log(longestCommonPrefix(["ab", "a"]))
console.log(longestCommonPrefix(["reflower","flow","flight"]))
console.log(longestCommonPrefix(["acc","aaa","aaba"]))