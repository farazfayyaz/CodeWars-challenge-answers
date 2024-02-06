function isItANum(str) {
    // your code here;
      let newStr = str.replace(/\D/gi, '')
      if(/^[0]\d{10}$/.test(newStr) == true) {
        return newStr
      } else {
        return 'Not a phone number'
      }
    }