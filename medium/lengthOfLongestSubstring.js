var lengthOfLongestSubstring = function(s) {
  let longestSubString = "";
  let currentString = "";
  const stringLength = s.length
  function longestString() {
    for(let i = 0; i < stringLength; ++i) {
      for(let j = i; j < stringLength; ++j) {
        if(!(currentString.includes(s[j]))) {
          currentString += s[j]
          if(stringLength == currentString.length) longestSubString = currentString
        } else {
          if(longestSubString.length < currentString.length) longestSubString = currentString
          currentString = ""
        }
        if((j + 1== stringLength) && longestSubString.length < currentString.length) {
          longestSubString = currentString
        }
      }
      currentString = ""
    }

    return longestSubString.length
  }

  return stringLength == 1 ? 1 : longestString();
};

console.log(lengthOfLongestSubstring("aab"))

/*
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;
  let left = 0;
  const currentCharacters = new Set();

  for (let right = 0; right < s.length; right++) {
    // If the new character is already in the current substring,
    // remove characters from the left until the duplicate is gone.
    while (currentCharacters.has(s[right])) {
      currentCharacters.delete(s[left]);
      left++;
    }

    currentCharacters.add(s[right]);

    const currentLength = right - left + 1;

    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }

  return longestLength;
};
*/