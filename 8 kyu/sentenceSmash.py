def smash(words):
    if words == []:
        return ""
    else:
        newStr = ""
        for i in words:
            newStr += i + " "
    
    print(newStr)
    return newStr.strip()
    