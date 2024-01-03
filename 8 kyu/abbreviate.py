def abbrev_name(name):
    firstName, lastName = name.split(' ')
    
    return (f"{firstName[0].upper()}.{lastName[0].upper()}")