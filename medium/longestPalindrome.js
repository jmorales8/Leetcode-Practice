var longestPalindrome = function (s) {
  let longest = "";

  function expandFromCenter(left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === s[right]
    ) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandFromCenter(i, i);
    const evenPalindrome = expandFromCenter(i, i + 1);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
};

console.log(longestPalindrome("babad"));   // "bab"
console.log(longestPalindrome("cbbd"));    // "bb"
console.log(longestPalindrome("baabadb")); // "baab"