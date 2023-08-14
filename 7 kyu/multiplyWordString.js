function modifyMultiply (str,loc,num) {
    let arrStr = str.split(' ')
    let word = arrStr[loc]
    let newArr = []
    for (let i = 0; i < num; i++) {
      newArr.push(word)
    }
    return newArr.join('-')
  } 