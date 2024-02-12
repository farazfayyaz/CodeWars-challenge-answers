function isIntArray(arr) {
    //check if arr is an array
    //and check if each value is a number
    //if both is true, return true
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }