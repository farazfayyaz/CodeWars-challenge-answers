function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ').sort((a,b) => Number(b) - Number(a))
    return `${arr[0]} ${arr[arr.length - 1]}`
  }