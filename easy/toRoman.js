function bruh(num) {
  console.log(num);
  let temp = "";
  while (num > 0) {
    if (num >= 4) {
      if(num >= 10) {
        if(num >= 40) {
          if(num >= 50) {
            if(num >= 90) {
              if(num >= 100) {
                if(num >= 400) {
                  if(num >= 500) {
                    if(num >= 900) {
                      if(num >= 1000) {
                        num -= 1000;
                        temp += "M";
                        continue;
                      }
                      num -= 900;
                      temp += "CM";
                      continue;
                    }
                    num -= 500;
                    temp += "D";
                    continue;
                  }
                  num -= 400;
                  temp += "CD";
                  continue;
                }
                num -= 100;
                temp += "C";
                continue;
              }
              num -= 90;
              temp += "XC";
              continue;
            }
            num -= 50;
            temp += "L";
            continue;
          }
          num -= 40;
          temp += "XL";
          continue;
        }
        num -= 10;
        temp += "X";
        continue
      }
      if ((num - 9) % 10 === 0) {
        num -= 9;
        temp += "IX";
        continue;
      }
      if((num - 4) % 10 === 0) {
        num -= 4;
        temp += "IV";
        continue;
      }
      num -= 5;
      temp += "V";
      continue;
    }
    if (num >= 1) {
      num -= 1;
      temp += "I";
    }
  }

  return temp;
}


console.log(bruh(1994));
