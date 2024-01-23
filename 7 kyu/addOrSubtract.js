function calculate(str) {
    //seperates numbers into array
    let numbers = str.split(/plus|minus/); //checks str for numbers
    //seperates operations into array
    let operations = str.match(/[a-z]+/g); //checks str for plus or minus
    
    let sum = parseInt(numbers[0]); //stores first value into sum
    
    
    for(let i = 0, len = operations.length; i < len; i++){ //iterate the operations
      
      switch(operations[i]){
          
        case "plus":
          sum += parseInt(numbers[i+1]); //if plus then add next number to sum
          break;
        case "minus":
          sum -= parseInt(numbers[i+1]); //if minus then subtract next number from sum
          break;
          
      }
      
    }
    
    return sum+""; //return sum
  }