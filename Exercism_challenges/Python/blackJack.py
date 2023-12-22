"""Functions to help play and score a game of blackjack.

How to play blackjack:    https://bicyclecards.com/how-to-play/blackjack/
"Standard" playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
"""


def value_of_card(card):
    """Determine the scoring value of a card.

    :param card: str - given card.
    :return: int - value of a given card.  See below for values.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """
    face_cards = ['J', 'Q', 'K']

    if card in face_cards:
        return 10
    elif card == 'A':
        return 1
    elif int(card) >= 2 and int(card) <= 10:
        return int(card)

    pass


def higher_card(card_one, card_two):
    """Determine which card has a higher value in the hand.

    :param card_one, card_two: str - cards dealt in hand.  See below for values.
    :return: str or tuple - resulting Tuple contains both cards if they are of equal value.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """
    face_cards = ['J', 'Q', 'K']
    card1 = 0
    card2 = 0

    if card_one in face_cards:
        card1 = 10
    elif card_one == 'A':
        card1 = 1
    elif int(card_one) >= 2 and int(card_one) <= 10:
        card1 = int(card_one)


    if card_two in face_cards:
        card2 = 10
    elif card_two == 'A':
        card2 = 1
    elif int(card_two) >= 2 and int(card_two) <= 10:
        card2 = int(card_two)

    print(f"Card One is {card1}, Card Two is {card2}") #check statement


    if card1 > card2:
        return card_one
    elif card1 < card2:
        return card_two
    elif card1 == card2:
        return (card_one, card_two)

    pass


def value_of_ace(card_one, card_two):
    """Calculate the most advantageous value for the ace card.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: int - either 1 or 11 value of the upcoming ace card.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    if card_one == 'A':
        card1 = 11
    else:
        card1 = value_of_card(card_one)

    if card_two == 'A':
        card2 = 11
    else:
        card2 = value_of_card(card_two)
        
    target = 21

    print(f"Card One is {card1}, Card Two is {card2}")

    if card1 + card2 + 11 > 21:
        return 1
    else:
        return 11

    pass


def is_blackjack(card_one, card_two):
    """Determine if the hand is a 'natural' or 'blackjack'.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: bool - is the hand is a blackjack (two cards worth 21).

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    face_cards = ['J', 'Q', 'K']

    print(f"Card One is {card_one}, Card Two is {card_two}")
    
    if((card_one in face_cards or card_one == '10') and card_two == 'A') or (card_one == 'A' and (card_two in face_cards or card_two == '10')):
        return True
    else:
        return False

    pass


def can_split_pairs(card_one, card_two):
    """Determine if a player can split their hand into two hands.

    :param card_one, card_two: str - cards dealt.
    :return: bool - can the hand be split into two pairs? (i.e. cards are of the same value).
    """
    face_cards = ['J', 'Q', 'K']

    if (card_one in face_cards) and (card_two in face_cards):
        return True
    elif (card_one == 'A') and (card_two == 'A'):
        return True
    elif (card_one == card_two):
        return True
    else:
        return False
    

    pass


def can_double_down(card_one, card_two):
    """Determine if a blackjack player can place a double down bet.

    :param card_one, card_two: str - first and second cards in hand.
    :return: bool - can the hand can be doubled down? (i.e. totals 9, 10 or 11 points).
    """
    card1 = value_of_card(card_one)
    card2 = value_of_card(card_two)
    total_val = card1 + card2
    
    print(f"Card One is {value_of_card(card_one)} and Card Two is {value_of_card(card_two)}. The Total is {value_of_card(card_one) + value_of_card(card_two)}")
    
    if (card_one == 'A' and card_two == 'A'):
        return False
    else:
        if (total_val >= 9 and total_val <= 11):
            return True
        else:
            return False

    pass