function wordsToMarks(string){
    //your code here
    
    let letters = 'abcdefghijklmnopqrstuvwxyz' //letters
    
    let total = 0 //count
    
    for(let i = 0; i < string.length; i++) { //iterate the string
      total += letters.indexOf(string[i]) + 1 //check index value of each string letter, add to count
    }
    return total //return count
  }