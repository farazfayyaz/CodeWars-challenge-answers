function possiblyPerfect(key,answers) {
  
    let falseCount = 0 // initialize false count
    let trueCount = 0 // initialize true count
    
    for(let i = 0; i < key.length; i++){ //iterate through the length of the key array
      
      //if key[i] is not '_' and not equal to answers[i]
      if(key[i] !== '_' && key[i] !== answers[i]){
        //this compares the blank key value to the answer value in the same index
        falseCount++ //increment false count
        
      // else if key[i] is not '_' and equal to answers[i]
      } else if (key[i] !== '_' && key[i] === answers[i]){
        //this compares all other values to make sure it is correct
        trueCount++ //add to true count
        
      }
      
      //if trueCount is greater than 0 and falseCount is greater than 0
      if(trueCount > 0 && falseCount > 0){
        return false //return false
      }
      
    }
    return true //else default value is true
    
  }