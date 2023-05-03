function divideNumber(eded) {
    while ( eded!== 1 ) {
      if (eded% 2 === 0) {
        eded/= 2;
        console.log(eded);
      } else {
        eded= (eded+ 1) / 2;
        console.log(eded);

      }
    }
    return eded;
  }
  

  console.log(divideNumber(12));