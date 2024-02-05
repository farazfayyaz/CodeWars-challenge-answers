//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    
    if(arr.length < 1) {
      return 0
    } else {
      
      arr.forEach((x) => {
        let regex = /[:|;][~|-]?[)|D]/g
      
        if(regex.test(x) == true) {
          count++
        }
      })
      
    }
    
    return count
  }