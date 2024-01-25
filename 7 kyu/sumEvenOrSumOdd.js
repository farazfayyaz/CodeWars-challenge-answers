function evenOrOdd(str) {
    let evenNums = 0;
    let oddNums = 0;
  
    // Iterate through each character in the input string
    for (let char of str) {
      // Convert the character to a number
      let num = parseInt(char);
  
      // Check if the number is even or odd
      if (num % 2 === 0) {
        evenNums += num;
      } else {
        oddNums += num;
      }
    }
  
    // Compare the sums of even and odd numbers
    if (evenNums > oddNums) {
      return 'Even is greater than Odd';
    } else if (oddNums > evenNums) {
      return 'Odd is greater than Even';
    } else {
      return 'Even and Odd are the same';
    }
  }