function validateTime(time) {
    res =  /^([0-1]?\d|2[0-3]):[0-5]\d$/g.test(time)
    return res
  }