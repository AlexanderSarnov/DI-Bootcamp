"""Instructions
Write code that asks the user for a number and determines whether this number is odd or even.
"""
#due to rounding errors had to adjust task to work with integer numbers only
while True:
  try:
    user_number = int(input("Enter an integer number: "))
    break  # Exit the loop if input is valid (integer)
  except ValueError:
    print("Invalid input. Please enter an integer number (whole number).")

# Check if the number is even or odd (after valid integer input)
if user_number % 2 == 0:
  print(f"{user_number} is even.")
else:
  print(f"{user_number} is odd.")