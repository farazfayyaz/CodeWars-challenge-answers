def enough(cap, on, wait):
    # Your code here
    
    if (on + wait) <= cap: #check if On Bus and Wait Line adds to the Capacity. If yes, return 0
        return 0
    else: #if On Bus and Wait Line overexceed Capacity, 
        #subtract total of On Bus and Wait Line from the Capacity... This finds the amount of acceptable passengers to meet cap
        return (on + wait) - cap