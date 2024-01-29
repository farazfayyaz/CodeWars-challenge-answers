function sumArray(array) {
  
    //check for valid array with more than 2 values
    if(!array || array.length < 3) {
      return 0
    } else {
      let newArr = array.sort((a,b) => a - b) //sort from low to high
      newArr.pop() //remove last value
      newArr.shift() //remove first value
      console.log(newArr) //check new array
      return newArr.reduce((total, num) => total + num) //add all values together
    }
    
  }