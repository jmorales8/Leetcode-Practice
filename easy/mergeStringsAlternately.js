var mergeAlternately = function(word1, word2) {
  let i = 0
  let mergedWord = ""
  while(i < bruh && i < word2.length) {
    mergedWord += word1[i] + word2[i]
    i++
  }
  if(i < word1.length) {
    for(let k = i; k < word1.length; k++) mergedWord += word1[k]
  } else {
    for(let k = i; k < word2.length; k++) mergedWord += word2[k]
  }
  return mergedWord
};

console.log(mergeAlternately("abcd","pq"))