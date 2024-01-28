function wave(str){
  
    let newArr = []; //empty array
    
    for (let i = 0; i < str.length; i++) { //iterate each letter
      
      let copy = str.split(''); //copy str into array of letters
      
      if(copy[i] !== ' ') {
        
        //converts the letter to upper then joins, then push into array
        copy[i] = copy[i].toUpperCase() 
        newArr.push(copy.join(''))
        
      }
      
    }
    
    return newArr //return new array
  }