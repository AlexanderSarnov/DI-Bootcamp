"""
Exercise 7 : Faker Module
Instructions
Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
Create an empty list called users. Tip: It should be a list of dictionaries.
Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.
"""


import faker

# Create a Faker instance
fake = faker.Faker()

# Create an empty list to store user data
users = []


def add_users(num_users):
  """Adds a specified number of users to the users list with fake data using faker.

  Args:
      num_users: The number of users to add.
  """
  for _ in range(num_users):
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.locale()[0],  # Get first element (language code)
    }
    users.append(user)


# Example Usage
num_users_to_add = 5
add_users(num_users_to_add)

# Print the list of users (showing only the first few entries for brevity)
print("First few users:")
for i in range(3):
  print(users[i])