
"""
A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

Ask a family the age of each person who wants a ticket.

Store the total cost of all the family’s tickets and print it out.

A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
At the end, print the final list.
"""
# Part 1.
def calculate_ticket_price(age):
  """Calculates ticket price based on age."""
  if age < 3:
    return 0
  elif age <= 12:
    return 10
  else:
    return 15

# Initialize total cost
total_cost = 0

# Loop indefinitely until user enters 'done'
while True:
  age_input = input("Enter the age of a family member (or 'done' to finish): ")
  if age_input.lower() == 'done':
    break  # Exit the loop if 'done' (case-insensitive) is entered

  try:
    age = int(age_input)  # Convert input to integer (if valid number)
    ticket_price = calculate_ticket_price(age)
    total_cost += ticket_price
  except ValueError:
    print("Invalid input. Please enter a number or 'done' (case-insensitive).")

# Print total cost
print(f"Total ticket cost for the family: ${total_cost:.2f}")

# Part 2.
def check_age_restriction(age, restricted_min, restricted_max):
  """Checks if age is within the restricted range."""
  return not (restricted_min <= age <= restricted_max)

# Restricted age range for the movie
restricted_min_age = 16
restricted_max_age = 21

# Sample list of teenager names (accordingly to convention of names lists samples)
teenager_names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Create a copy of the original list to avoid modifying it directly
permitted_teenagers = teenager_names.copy()

# Iterate through names and check ages (forward loop)
permitted_teenagers_copy = permitted_teenagers.copy()  # Create a copy for modification

for i in range(len(permitted_teenagers_copy)):
  age = int(input(f"{permitted_teenagers_copy[i]}, enter your age: "))
  if check_age_restriction(age, restricted_min_age, restricted_max_age):
    permitted_teenagers.remove(permitted_teenagers_copy[i])  # Remove from original list
    print(f"{permitted_teenagers_copy[i]} is not permitted to watch this movie due to age restrictions.")

# Print final list of permitted teenagers
print("\nTeenagers permitted to watch the movie:")
for name in permitted_teenagers:
  print(name)