function findShort(s){
    let arr = s.split(' ') //split string into array of words
    let shortWord = arr.sort((a,b) => b.length - a.length).pop() //sort arr by length size, find short word
    return shortWord.length //return short word length
  }