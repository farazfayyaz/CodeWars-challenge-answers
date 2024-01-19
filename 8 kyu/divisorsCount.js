function getDivisorsCnt(n){
  
    var num=0; //initialize num variable

    if(n==1) return 1; //if n is 1, return 1 = default result
  
    if(n%Math.sqrt(n)==0) num++; //if n is divisble by the square root of itself, increment num
  
    for(var i=1;i<Math.sqrt(n);i++){
      
        if(n%i==0){
            num+=2;
        }
      
    }
  
    return num;
}