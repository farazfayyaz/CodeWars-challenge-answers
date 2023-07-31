function findNeedle(haystack) {
    return haystack.find(val => val == 'needle') ? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything"
  }