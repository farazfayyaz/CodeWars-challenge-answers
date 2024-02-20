function withdraw(n) {
    //coding and coding..
    
    //initialize money value counters
    let hundred = 0
    let fifty = 0
    let twenty = 0
    
    //while loop runs until the end of calculation
    while(n >= 20) {
      if(n % 100 === 0) { //if divisible by 100, subtract then add to hundred counter
        n-=100
        hundred++
      } else if (n % 50 === 0) { //if divisible by 50, subtract then add to fifty counter
        n-=50
        fifty++
      } else { //else divisible by 20, subtract then add to twenty counter
        n-=20
        twenty++
      }
    }
    return [hundred, fifty, twenty] //return array format
  }
  