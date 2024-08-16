"""
Exercise 2 : Cinemax #2
Instructions
A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


How much does each family member have to pay ?

Print out the family’s total cost for the movies.
Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
"""

"""
It was a very hard task for me because of the very many potential issues with user input. I am still not sure if I resolved all. Please advise.
"""

def get_ticket_price(age):
  """
  This function determines the ticket price based on the provided age.

  Args:
      age: The age of the person (can be float or integer).

  Returns:
      The ticket price (float), or None if age is invalid.
  """
  if age < 3:
    return 0
  elif age <= 12:
    return 10
  else:
    return 15

# Initialize empty family dictionary
family = {}

# Loop to get names and ages (sentinel loop)
while True:
  name = input("Enter name (or 'q' to quit): ").title()
  if name == 'Q':
    break  # Exit the loop if user enters 'q' (case-insensitive)

  # Input for age with cancel option
  while True:
    age_input = input(f"Enter age for {name} (or 'c' to cancel): ")
    if age_input == 'c':
      print(f"Cancelling input for {name}.")
      break  # Exit inner loop if user enters 'c'

    try:
      # Convert to float and round to nearest integer
      age = float(age_input)
      age = round(age)
      if age < 0:
        print("Age cannot be negative. Please enter a valid age.")
        continue  # Restart inner loop for negative input
      break  # Exit inner loop if age is valid (numeric and non-negative)
    except ValueError:
      print("Invalid input. Please enter a valid age (number).")

  # Check for cancelled input or valid age
  if age_input == 'c':
    continue  # Skip to next iteration if user cancelled

  family[name] = age  # Store rounded age

# Calculate ticket cost for each family member
total_cost = 0
for name, age in family.items():
  # Removed unnecessary check
  cost = get_ticket_price(age)  # Call the function to get price
  total_cost += cost
  print(f"{name}'s ticket costs ${cost:.2f}")

# Print total family cost
print(f"\nFamily total: ${total_cost:.2f}") 

# Print total family cost
print(f"\nFamily total: ${total_cost:.2f}")