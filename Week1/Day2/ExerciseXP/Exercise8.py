"""
Exercise 8: Who Ordered A Pizza ?
Instructions
Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
As they enter each topping, print a message saying you’ll add that topping to their pizza.
Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
"""

# Define base pizza price
base_price = 10

# Create an empty list to store toppings
toppings = []

# Simulate adding toppings until "quit" is entered
while True:
  topping = input("Enter a pizza topping (or 'quit' to finish): ").lower()
  if topping == "quit":
    break
  toppings.append(topping)
  print(f"Adding {topping} to your pizza.")

# Calculate total price based on toppings
num_toppings = len(toppings)
topping_price = num_toppings * 2.5
total_price = base_price + topping_price

# Print the final pizza details
if toppings:
  print(f"\nYour pizza has the following toppings:")
  for topping in toppings:
    print(f"- {topping}")
  print(f"\nTotal price: ${total_price:.2f}")
else:
  print("\nYou didn't choose any toppings. Your pizza will be classic Margarita.")
  print(f"Total price: ${base_price:.2f}")