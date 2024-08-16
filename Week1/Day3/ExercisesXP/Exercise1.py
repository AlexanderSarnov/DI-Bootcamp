"""
Exercise 1 : Convert Lists Into Dictionaries
Instructions
Convert the two following lists, into dictionaries.
Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
Expected output:
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
"""
# Declare given lists
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Create a dictionary using zip method
numbers_dict = dict(zip(keys, values))

# Print the dictionary
print(numbers_dict)