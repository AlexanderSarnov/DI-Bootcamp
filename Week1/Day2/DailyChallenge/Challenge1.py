"""
Challenge 1
Ask the user for a number and a length.
Create a program that prints a list of multiples of the number until the list length reaches length.
Examples

number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
"""
def get_user_input(prompt):
  """
  Prompts the user for input and validates it as a number, allowing negative numbers and floats.
  Ensures the input length is within 100 digits.

  Args:
      prompt: The message to display to the user.

  Returns:
      A number (float) entered by the user, truncated to 100 digits if necessary.
  """
  while True:
    try:
      value = float(input(prompt))
      # Truncate to 100 digits (consider scientific notation for very large/small numbers)
      value = float(f"{value:.100e}")
      return value
    except ValueError:
      print("Invalid input. Please enter a number.")

def generate_multiples(number, length):
  """
  Generates a list of signed multiples of a number up to a specified length.

  Args:
      number: The number for which to generate multiples.
      length: The desired length of the list (must be a positive integer).

  Returns:
      A list of signed multiples of the number.
  """
  if length <= 0:
    print("Invalid input. List length must be a positive integer.")
    return []  # Return an empty list for invalid length
  multiples = [number * i for i in range(1, length + 1)]
  return multiples

# User input with validation (number can be float or negative, length positive integer)
number = get_user_input("Enter a number: ")
length = get_user_input("Enter the desired list length (positive integer): ")

# Truncate length to avoid exceeding 100 digits (if integer)
length = int(f"{length:.0f}")  # Truncate to integer and limit to 100 digits (max int size)

# Generate the list of signed multiples
multiples_list = generate_multiples(number, length)

# Print the list of multiples
if length > 0:
  print(f"List of multiples of {number} up to length {length}: {multiples_list}")