var maxDepth = function(s) {
  let depth = 0;
  let maxdepth = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] == "(") {depth += 1;}
    if(s[i] == ")") {depth -= 1}
    if(depth > maxdepth) maxdepth = depth
  }
  return maxdepth
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))

console.log(maxDepth("(1)+((2))+(((3)))"))

console.log(maxDepth("()(())((()()))"))