# Exercise 1
# Draw the following pattern using for loops:
#   *
#  ***
# *****

rows_1 = 3
cols_1 = 5

print(f"\nExercise 1 section 1 output:\n")

for i in range(rows_1):
    # Calculate the number of spaces and stars for each row
    spaces = (cols_1 - (2 * i + 1)) // 2
    stars = 2 * i + 1

    # Print spaces
    print(" " * spaces, end="")

    # Print stars
    print("*" * stars)
    
# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****

rows_2 = 5
cols_2 = 5

print(f"\nExercise 1 section 2 output:\n")

for i in range(rows_2):
    # Print spaces
    print(" " * (cols_2 - i - 1), end="")

    # Print stars
    print("*" * (i + 1))
    
# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

rows_3 = 5

print(f"\nExercise 1 section 3 output:\n")
# Print the upper part of the diamond shape
for i in range(rows_3):
    print("*" * (i + 1))
    
# Print the lower part of the diamond shape
for i in range(rows_3, 0, -1):
    print(" " * (rows_3 - i) + "*" * i)
    
# Exercise 2
# Instructions
# Analyse this code before executing it. Write some comments next to each line. 
# Write the value of each variable and their changes, and add the final output. 
# Try to understand the purpose of this program.

print(f"\nExercise 2 output:\n")

my_list = [2, 24, 12, 354, 233]
print(f"Initial list: {my_list}")

# The Selection Sort Algorithm
for i in range(len(my_list) - 1): # Iterate through the list based on the number of its elements (iteration ends at len -1 which represents the second to last element)
    minimum = i # initialize variable minimum with the value of i = 0 (default value of for loop)
    for j in range( i + 1, len(my_list)): # iterates through the same list but with increment + 1 and ending at the last element of the list (but not including it)
        if(my_list[j] < my_list[minimum]): # compares the value of the element at index j with the value of the element at index i in the list
            minimum = j # replaces the value of minimum variable with the one that was found in the comparison
            if(minimum != i): # conditional reason to perform the following operation
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # effectively switches the pair of values at indexes i,j if value at i is bigger than value at j
            print(f"List after iteration {j}: {my_list}")  # Add print statement after replacing values
    print(f"End of pass {i+1}: {my_list}")  # Add print statement after inner loop
print(my_list) # prints the ordered list (ascending)