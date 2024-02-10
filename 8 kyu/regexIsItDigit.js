String.prototype.digit = function() {
    return this.length >= 2 ? false : /[\d]/.test(this)
  };