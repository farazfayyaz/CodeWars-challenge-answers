function replaceAll(seq, find, replace) {
    //check if seq is array
    //map over array, change 'find' into 'replae'
    //else make an array then add the replacement
    return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
  }