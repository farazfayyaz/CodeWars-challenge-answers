function createPhoneNumber(numbers) {
    //numbers is an array of numbers
    //template literal
    //slice first 3 nums, next 3 nums, then final 4 nums
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6, 10).join("")}`;
  }