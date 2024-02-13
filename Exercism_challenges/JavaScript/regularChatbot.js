

export function isValidCommand(command) {
    return /^(Chatbot)/i.test(command)
  }
  
  export function removeEmoji(message) {
    let regex = /(emoji[\d]+)/g
    if (regex.test(message) == true) {
      return message.replace(regex, '')
    } else {
      return message
    }
  }
  
  export function checkPhoneNumber(number) {
    let regex = /(\(\+[\d]{2}\) [\d]{3}-[\d]{3}-[\d]{3})/
    if(regex.test(number) == true) {
      return 'Thanks! You can now download me to your phone.'
    } else {
      return `Oops, it seems like I can't reach out to ${number}`
    }
  }
  
  export function getURL(userInput) {
    let regex = /[\w]+\.[\w]{1,3}/g
    return userInput.match(regex)
  }
  
  export function niceToMeetYou(fullName) {
    let nameArr = fullName.split(/,\s/)
    return `Nice to meet you, ${nameArr[1]} ${nameArr[0]}`
  }