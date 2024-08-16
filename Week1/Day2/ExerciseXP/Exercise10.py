"""
Exercise 10 : Sandwich Orders
Instructions
Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
We need to prepare the orders of the clients:
Create an empty list called finished_sandwiches.
One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
I made your tuna sandwich
I made your avocado sandwich
I made your egg sandwich
I made your chicken sandwich
"""

"""
I use here solution for the similar problem of removing spam from spam list from Monthy Python sketch that I had in Tim Buchalka's Udemy course. Hope you know the sketch =) If not - please watch, it is a lot of fun.

There are other solutions available (looping backwards through list, etc.), but I think this is the most efficient, please correct me if I am wrong.
"""

# Create the list of orders and declare the empty list of finished sandwiches.
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []

# Print list of orders.
print("Deli Orders List:")
for order in sandwich_orders:
  print(order)

# Print a dashed line of 50 dashes to separate sections of terminal messages.
print("-" * 50)

# Print the message, explaining why we can't prepare all orders.
print("The Deli has run out of Pastrami!")

# Remove all occurrences of "Pastrami sandwich" using its index.
i = 0
while i < len(sandwich_orders):
  if sandwich_orders[i] == "Pastrami sandwich":
    del sandwich_orders[i]  # Remove pastrami at current index.
  else:
    i += 1  # Move to the next element only if not pastrami.

# Create a copy of the remaining list for order processing (preserving order).
orders_to_process = sandwich_orders.copy()

# Prepare sandwich orders (from the copied list).
for sandwich in orders_to_process:
  finished_sandwiches.append(sandwich)
  print(f"I made your {sandwich}.")
  sandwich_orders.remove(sandwich)  # Remove processed sandwich from original list.

# Print a message indicating all orders are completed.
print("\nAll sandwich orders are completed!")