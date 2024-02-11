function vowel2index(str) {
    //code me
   //regex finds vowels
   //second parameter iterates each letter, i is index, return index + 1
   return str.replace(/[aeiou]/ig, (m, i) => i + 1);
 }
 