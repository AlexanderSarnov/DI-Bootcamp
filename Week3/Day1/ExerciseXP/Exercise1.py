"""
Exercise 1: Cats
Instructions
Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Instantiate three Cat objects using the code provided above.
Outside of the class, create a function that finds the oldest cat and returns the cat.
Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
"""

class Cat:
  def __init__(self, cat_name: str, cat_age: int):
    self.name = cat_name
    self.age = cat_age

def find_oldest_cat(cats):
  """Finds the oldest cat in a list of Cat objects.

  Args:
      cats: A list of cats in Cat objects.

  Returns:
      The oldest cat in Cat object.
  """

  oldest_cat = cats[0]
  for cat in cats:
    if cat.age > oldest_cat.age:
      oldest_cat = cat
  return oldest_cat

# Initiate three Cat objects (can be replaced with user input and data validation, but I have to save time now, sorry)
cat1 = Cat("Red", 3)
cat2 = Cat("Green", 7)
cat3 = Cat("Blue", 1)

# Find the oldest cat
oldest = find_oldest_cat([cat1, cat2, cat3])

# Print the result
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")