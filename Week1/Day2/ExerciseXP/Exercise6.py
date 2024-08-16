"""
Exercise 6 : While Loop
Instructions
Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
"""

# Define my name
my_name = "Alexander"

# Creating loop with the way to exit it (endless, unescapable loops are bad practice)
while True:
  user_name = input("Enter your name (or 'exit' to quit): ")
  if user_name.lower() == "exit":
    print("Goodbye!")
    break  # Exit the loop if user enters "exit"
  elif user_name.lower() == my_name.lower():  # Case-insensitive comparison
    print(f"Hello, {my_name}! That's my name too.")
    break  # Exit the loop if names match
  else:
    print(f"Hello, {user_name}. That's not my name. Please try again. (Type 'exit' to quit)")

print("See you later!")
