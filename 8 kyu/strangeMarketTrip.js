function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    //pattern checker regex
    let pattern = /tree fiddy|\$3\.50/g
    return pattern.test(s) == true ? true : false
  }