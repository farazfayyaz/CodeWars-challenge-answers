def lovefunc( flower1, flower2 ):
    if ((flower1 % 2) or (flower2 % 2)) and ((flower1 % 2) != (flower2 % 2)):
        return True
    else:
        return False