var convert = function(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  let rows = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI

console.log(convert("PAYPALISHIRING", 3))