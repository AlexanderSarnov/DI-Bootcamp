# Tuples are like lists but are not mutable - cannot be changed (no extension, no replacement of values)

# used to store variable values - to put some sensitive data and store them.

a_tuple = ("yossi", 2024-33, "Tel Aviv")

print(a_tuple)

# also a sequence, you can loop through them, index them, slice them and save in other variables the results. check if element is inside the tuple

print(33 in a_tuple)

# use to store constants.

'''
change a tuple into a list
'''
b_tuple = (1, 2, 3, 4)
b_tuple = list(b_tuple)
b_tuple.append(5)

b_tuple = tuple(b_tuple)

print(b_tuple)