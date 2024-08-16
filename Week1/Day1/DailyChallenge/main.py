import random

user_input = "0"
low_value = 10
high_value = 10
"""
These variables define the initial user input,
to make sure it is a string,
and low and high brackets.
"""

def input_function():
  """
  This function prompts the user for a string, validates its length to be within set interval, 
  builds and prints the string with shuffled characters
  and prints the first and last characters if it's 10 characters long.
  """
  while True:
    user_input = input("Enter a string (10 characters): ")
    if len(user_input) < low_value:
      print("String not long enough.")
    elif len(user_input) > high_value:
      print("String too long.")
    else:
      
    # Build and print the string with shuffled characters
      for i in range(len(user_input)):
        current_string = list(user_input[:i+1])  # Convert to list for shuffling
        random.shuffle(current_string)  # Shuffle the characters in-place
        shuffled_string = ''.join(current_string)  # Join back into a string
        print(f"Line {i+1}: {shuffled_string}")

      print("Perfect string")
      # Access and print first and last characters
      first_char = user_input[0]
      last_char = user_input[-1]
      print(f"First character: {first_char}")
      print(f"Last character: {last_char}")
      break  # Exit the loop if the string is valid (10 characters)

input_function()