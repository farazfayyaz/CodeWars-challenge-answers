def descending_order(num):
    # Bust a move right here
    listForNum = [] #create empty list
    for i in str(num): # for each value in num:
        listForNum.append(i) # append each value into empty list
        
    listForNum.sort(reverse = True) #sort list into descending order
    
    return int("".join(listForNum)) #return a joined number and convert into int