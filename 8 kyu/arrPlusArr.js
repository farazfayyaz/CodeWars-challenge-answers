function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((accum, current) => accum + current) + arr2.reduce((accum, current) => accum + current)
  }