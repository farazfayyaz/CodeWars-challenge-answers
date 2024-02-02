function getNumberFromString(s) {
    let num = s.replace(/[a-z]|\D/gi, '')
    return (Number(num));
  }