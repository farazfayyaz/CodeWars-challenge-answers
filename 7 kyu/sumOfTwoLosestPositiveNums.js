function sumTwoSmallestNumbers(numbers) {  
    let sortedNum = numbers.sort((a , b) => a - b) //sort array from smallest to largest number
    return sortedNum[0] + sortedNum[1] //adds first lowest number and 2nd lowest number
  }