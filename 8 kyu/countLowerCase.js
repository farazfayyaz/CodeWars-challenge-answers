function lowercaseCount(str){
    //How many?
  let total = 0
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    if (/[a-z]/.test(str[i]) == true) {
      total++
    }
  }
  return total
}