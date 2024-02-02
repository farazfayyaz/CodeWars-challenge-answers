function maskify(cc) {
    if(cc.length <= 4) {
      return cc
    } else {
      let lastFour = cc.slice(-4)
      let hash = '#'
      return `${hash.repeat(cc.length - 4)}${lastFour}`
    }
  }