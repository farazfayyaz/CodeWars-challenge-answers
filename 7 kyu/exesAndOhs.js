function XO(str) {
    let strArr = str.toLowerCase().split('')
    let xCount = 0
    let oCount = 0
    console.log(strArr)
    strArr.forEach((x) => {
      if (x === 'x') {
        xCount++
      } else if (x === 'o') {
        oCount++
      }
    })
  
  if(xCount == oCount) {
    return true
  } else {
    return false
  }
}