function removeSmallest(numbers) {
    let copy = numbers.slice(0) // copy of numbers array, no mutation
    let removeNum = numbers.indexOf(Math.min(...numbers)) //find the smallest value in array
    copy.splice(removeNum, 1) //return array without the smallest element
    return copy;
  }