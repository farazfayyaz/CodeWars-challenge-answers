function inviteMoreWomen(L) {
    //coding and coding..
    
    let men = 0
    let women = 0
    
    L.forEach((x) => {
      if(x == 1) {
        men++
      } else if(x == -1) {
        women++
      }
    })
    
    if (men > women) {
      return true
    } else if (men < women) {
      return false
    } else {
      return false
    }
}