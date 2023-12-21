def convert(number):

    rain_drop = ""

    # if number % 7 == 0:
    #     rain_drop += "Plong"

    #     if number % 5 == 0:
    #         rain_drop += "Plang"
            
    #         if number % 3 == 0:
    #             rain_drop += "Pling"
                
    #     elif number % 3 == 0:
    #         rain_drop += "Pling"

    # elif number % 5 == 0:
    #     rain_drop += "Plang"

    #     if number % 3 == 0:
    #         rain_drop += "Pling"
        
    # elif number % 3 == 0:
    #     rain_drop += "Pling"
        
    # else:
    #     rain_drop += str(number)

    if number % 3 == 0:
        rain_drop += "Pling"
        
        if number % 5 == 0:
            rain_drop += "Plang"

            if number % 7 == 0:
                rain_drop += "Plong"
            
        elif number % 7 == 0:
            rain_drop += "Plong"
            
    elif number % 5 == 0:
        rain_drop += "Plang"

        if number % 3 == 0:
            rain_drop += "Pling"

            if number % 7 == 0:
                rain_drop += "Plong"
            
        elif number % 7 == 0:
            rain_drop += "Plong"
            
    elif number % 7 == 0:
        rain_drop += "Plong"
        
    else:
        rain_drop += str(number)

    return rain_drop

    
    pass