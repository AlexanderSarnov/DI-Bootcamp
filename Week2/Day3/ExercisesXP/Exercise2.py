"""
Exercise 2: Tuple
Instructions
Given a tuple which value is integers, is it possible to add more integers to the tuple?
"""

"""
Tuples are immutable, so we cannot directly add elements
Attempting to add directly will result in a TypeError
sample_tuple.append(6) <- This would cause a TypeError
"""

# Create a sample tuple
sample_tuple = (1, 2, 3, 4, 5)
print("Original tuple:", sample_tuple)

# Convert the tuple to a list (mutable)
sample_list = list(sample_tuple)
print("Converted list:", sample_list)

# Add a new integer to the list
sample_list.append(6)
print("Modified list with added element:", sample_list)

# Convert the modified list back to a tuple (the that the original tuple would not be modified)
new_tuple = tuple(sample_list)
print("New tuple with added element:", new_tuple)
