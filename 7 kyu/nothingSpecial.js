function nothingSpecial(str) {
    //your code here
    if(typeof str != "string") {
      return 'Not a string!'
    } else {
      let regex = /[^a-z\d\s]/gi
      return str.replace(regex, '')
    }
  }