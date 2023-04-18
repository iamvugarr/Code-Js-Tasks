function divideNumber(eded) {
    for (; eded!== 1; ) {
      if (eded% 2 === 0) {
        eded/= 2;
      } else {
        eded= (eded+ 1) / 2;
      }
    }
    return num;
  }
  

  console.log(divideNumber(9))