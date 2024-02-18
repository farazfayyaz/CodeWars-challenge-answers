
export function seeingDouble(deck) {
 return deck.map((x) => x * 2)
}

export function threeOfEachThree(deck) {
 return deck.reduce((result, card) => {
   if(card == 3){
     result.push(3, 3, 3)
   } else {
     result.push(card)
   }
   return result
 }, [])
}

export function middleTwo(deck) {
 return deck.slice(4,6)
}

export function sandwichTrick(deck) {
 const half = deck.length / 2
 deck.splice(half, 0, deck.pop())
 deck.splice(half, 0, deck.shift())
 console.log(deck)
 return deck
}

export function twoIsSpecial(deck) {
 return deck.filter((x) => x == 2)
}

export function perfectlyOrdered(deck) {
 let sort = deck.sort((a,b) => a - b)
 return sort
}

export function reorder(deck) {
 return deck.reverse()
}