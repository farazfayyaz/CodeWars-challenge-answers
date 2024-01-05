def is_isogram(string):
    #your code here
    string = string.lower() # make string all lowercase
    for letter in string: # iterate through each letter
        if string.count(letter) > 1: return False #checks for how often the letter appears in the string
    return True