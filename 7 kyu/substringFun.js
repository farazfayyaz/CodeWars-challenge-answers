function nthChar(words){
  
    let index = 0 //index val
    let word = '' //empty str
   
    if(words.length < 1) { //empty array return empty str
      return ''
    } else {
      
        //iterate each word
      words.forEach((x) => {
        
        //find letter in word
        //add into emtpy str
        word += x[index]
    
        index++ //increment index
        
      })
      return word //return word
    }
    
  }