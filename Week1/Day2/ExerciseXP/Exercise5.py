"""
Exercise 5: For Loop
Instructions
Use a for loop to print all numbers from 1 to 20, inclusive.
Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
"""
range_values = range(1,21)
list_of_range = list(range_values) # Create a list of numbers in the given range.
even_indexed_elements = list_of_range[2::2] # Start from element indexed 2, to avoid 0-th element.

# Print all elements of the given sequence 1-20, including 20.
for i in range_values:
    print(i)


# Print only even indexed elements.
for i in range_values:
    if i in even_indexed_elements:
        print(i)