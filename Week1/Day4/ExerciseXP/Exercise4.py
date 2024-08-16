"""
Exercise 4 : Random
Instructions
Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
"""

import random

def guess_number():
  """Generates a random number between 1 and 100 and compares it to a user-provided guess.

  Displays a success message if they match, otherwise shows a fail message 
  and displays both numbers.
  """

  while True:
    try:
      # Get user input for the guess
      guess_str = input("Enter a guess between 1 and 100 (inclusive): ")
      guess = int(guess_str)

      # Validate guess (within range and integer)
      if 1 <= guess <= 100:
        break  # Exit the loop if guess is valid
      else:
        print("Invalid guess. Please enter an integer between 1 and 100.")
    except ValueError:
      print("Invalid input. Please enter an integer.")

  # Generate a random number between 1 and 100
  random_number = random.randint(1, 100)

  # Compare the numbers and display a message
  if random_number == guess:
    print(f"Success! You guessed the number {random_number}.")
  else:
    print(f"Fail. The random number was {random_number}, but you guessed {guess}.")

# Call the function to execute the guessing simulation
guess_number()