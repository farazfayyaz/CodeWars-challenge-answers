"""Functions for tracking poker hands and assorted card tasks.

Python list documentation: https://docs.python.org/3/tutorial/datastructures.html
"""


def get_rounds(number):
    """Create a list containing the current and next two round numbers.

    :param number: int - current round number.
    :return: list - current round and the two that follow.
    """
    list_of_num = [number, number + 1, number + 2]
    return list_of_num

    pass


def concatenate_rounds(rounds_1, rounds_2):
    """Concatenate two lists of round numbers.

    :param rounds_1: list - first rounds played.
    :param rounds_2: list - second set of rounds played.
    :return: list - all rounds played.
    """
    list = rounds_1 + rounds_2
    return list

    pass


def list_contains_round(rounds, number):
    """Check if the list of rounds contains the specified number.

    :param rounds: list - rounds played.
    :param number: int - round number.
    :return: bool - was the round played?
    """
    if number in rounds:
        return True
    else:
        return False

    pass


def card_average(hand):
    """Calculate and returns the average card value from the list.

    :param hand: list - cards in hand.
    :return: float - average value of the cards in the hand.
    """
    return sum(hand)/len(hand)

    pass


def approx_average_is_average(hand):
    """Return if an average is using (first + last index values ) OR ('middle' card) == calculated average.

    :param hand: list - cards in hand.
    :return: bool - does one of the approximate averages equal the `true average`?
    """
    average = card_average(hand)

    first_last = (hand[0] + hand[len(hand) - 1]) / 2
    median = hand[int(len(hand) / 2)]

    if first_last == average or median == average:
        return True
    else:
        return False

    pass


def average_even_is_average_odd(hand):
    """Return if the (average of even indexed card values) == (average of odd indexed card values).

    :param hand: list - cards in hand.
    :return: bool - are even and odd averages equal?
    """
    average = card_average(hand)
    even = hand[::2]
    odd = hand[1::2]

    if (sum(even) / len(even)) == average or (sum(odd) / len(odd)) == average:
        return True
    else:
        return False

    pass


def maybe_double_last(hand):
    """Multiply a Jack card value in the last index position by 2.

    :param hand: list - cards in hand.
    :return: list - hand with Jacks (if present) value doubled.
    """
    print(f"Entered Hand: {hand}")

    for i in hand:
        print(i)
        if i == 11 and hand[len(hand) - 1] == 11:
            print("This is true")
            hand[len(hand) - 1] = 22
    print(f"New Hand: {hand}")
    return hand

    pass