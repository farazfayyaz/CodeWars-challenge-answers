
// @ts-check

/**
 * Get the first card in the given deck
 *
 */
export function getFirstCard(deck) {
    return deck[0]
  }
  
  /**
   * Get the second card in the given deck
   *
  export function getSecondCard(deck) {
    return deck[1]
  }
  
  /**
   * Switch the position of the first two cards in the given deck
   *
   */
  export function swapTopTwoCards(deck) {
    [deck[1], deck[0]] = [deck[0], deck[1]]
    return deck
  }
  
  export function discardTopCard(deck) {
    return [deck.shift(), deck]
  }
  
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  export function insertFaceCards(deck) {
    return [deck.shift(), ...FACE_CARDS, ...deck]
  }