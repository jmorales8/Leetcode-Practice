
function bruh(s, p) {
  let j = 0;
  let incrementJ = false
  function checkAsterick(pattern) {
    console.log("entering checkAsterick Function")
    for(j; j < s.length; j++) {
      console.log("Beginning of asterickLoop, Current j:", j, "Current letter in word:", s[j])
      if(pattern == ".") {
        checkAsterick()
      } else if(s[j] != pattern) {
        console.log("Leaving asterickLoop, Current j:", j, "Current letter in word:", s[j], "which doesnt match up with", pattern)
        break;
      } else {
      }
      if(j == s.length) {
        console.log("fart", j, s.length)
        break
      }
    }
  }

  function checkPeriod() {
    incrementJ = true
  }

  for(let i = 0; i < p.length; ++i) {
    console.log("Beginning of pattern forloop, \nCurrent j:", j, "\nCurrent letter in word:", s[j], "\nCurrent i:", i, "\nCurrent letter in pattern:", p[i])
    if(p[i+1] == undefined || s[j+1] == undefined) {
    console.log("Something is undefined:", p[i], p[i+1], s[j], s[j+1])
      if(p[i+1] == undefined && s[j+1] == undefined) {
        if(p[i] == s[j]) {
          return true
        } else if (p[i] == "." || p[i] == "*") {
          return true
        }
      }
      return false
    }
    if(p[i+1] == "*") {
      checkAsterick(p[i])
      ++i
    } else if(p[i] == ".") {
      checkPeriod()
    } else if(s[j] == p[i]){
      console.log("s[j]", s[j], "p[i]", p[i])
      incrementJ = true
    }
    if(incrementJ) {
      j += 1
      incrementJ = false
    }
    console.log("End of pattern forloop, \nCurrent j:", j, "\nCurrent letter in word:", s[j], "\nCurrent i:", i, "\nCurrent letter in pattern:", p[i])
    // if(p[i+1] == undefined || s[j+1] == undefined) {
    // console.log("Something is undefined:", p[i], p[i+1], s[j], s[j+1])
    //   if(p[i+1] == undefined && s[j+1] == undefined) {
    //     if(p[i] == s[j]) {
    //       return true
    //     } else if (p[i] == "." || p[i] == "*") {
    //       return true
    //     }
    //   }
    //   return false
    // }
  }
  return false
}

// console.log(bruh("aa", "a")) // false
// console.log(bruh("aa", "aa")) // true
// console.log(bruh("aaab", "a*b")) // true
// console.log(bruh("aab", "aa.")) //true
// console.log(bruh("mississippi", "mis*is*ip*.")) //true
// console.log(bruh("abcd", "d*")) // false
console.log(bruh("aaaaa", "a*")) // true
