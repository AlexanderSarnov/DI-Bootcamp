''' 
Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.
'''

import random

def count_pairs(numbers, target):
  '''
    Counts the number of pairs in the given list that sum to the target value.

    Args:
        numbers: A list of numbers.
        target: The target sum.

    Returns:
        The number of pairs that sum to the target.
  '''
  numbers.sort()  # Sort the list 
  low_index, high_index = 0, len(numbers) - 1 # initialize pointers at index 0 and last accordingly
  count = 0 # initialize counter
  while low_index < high_index: # use while loop to iterate through a sorted list from left and right ends to the center
    current_sum = numbers[low_index] + numbers[high_index] # initialize current sum variable to store the sum of elements of the list at specific indexes from both ends of the list
    if current_sum == target: # the only condition to increase counter and move both pointers simultaneously
      count += 1
      low_index += 1
      high_index -= 1
    elif current_sum < target: # iterate only one of two pointers at a time to catch all the possible pairs
      low_index += 1
    else:
      high_index -= 1
  return count

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

output = count_pairs(list_of_numbers, target_number)
print(f"There are, {output} pairs which sum is {target_number}")