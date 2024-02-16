const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };