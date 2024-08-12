from collections import defaultdict # for sort_animals

"""
Exercise 4 : Afternoon At The Zoo
Instructions
Create a class called Zoo.
In this class create a method __init__ that takes one parameter: zoo_name.
It instantiates two attributes: animals (an empty list) and name (name of the zoo).
Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
Create a method called get_animals that prints all the animals of the zoo.
Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
Example

{ 
    1: "Ape",
    2: ["Baboon", "Bear"],
    3: ['Cat', 'Cougar'],
    4: ['Eel', 'Emu']
}


Create a method called get_groups that prints the animal/animals inside each group.

Create an object called ramat_gan_safari and call all the methods.
Tip: The zookeeper is the one who will use this class.
Example
Which animal should we add to the zoo --> Giraffe
x.add_animal(Giraffe)
"""

class Zoo:
  """Represents a zoo with a name and a list of animals."""

  def __init__(self, zoo_name: str):
    """
    Initializes a Zoo object with a given name.

    Args:
        zoo_name: The name of the zoo (str).
    """

    self.animals = []
    self.name = zoo_name

  def add_animal(self, new_animal: str):
    """Adds a new animal to the zoo's list if it's not already present.

    Args:
        new_animal: The name of the animal to add (str).
    """

    if new_animal not in self.animals:
      self.animals.append(new_animal)
      print(f"{new_animal} successfully added to {self.name} zoo.")
    else:
      print(f"{new_animal} already exists in {self.name} zoo.")

  def get_animals(self):
    """Prints all animals in the zoo."""

    if not self.animals:
      print(f"{self.name} zoo has no animals yet.")
    else:
      print(f"\nAnimals at {self.name} zoo:")
      for animal in self.animals:
        print(animal)

  def sell_animal(self, animal_sold: str):
    """Removes an animal from the zoo's list if it exists.

    Args:
        animal_sold: The name of the animal to sell (str).
    """

    if animal_sold in self.animals:
      self.animals.remove(animal_sold)
      print(f"{animal_sold} successfully sold from {self.name} zoo.")
    else:
      print(f"{animal_sold} not found in {self.name} zoo.")

  def sort_animals(self):
    """Sorts animals alphabetically and groups them by their first letter."""

    self.animals.sort()
    grouped_animals = defaultdict(list)  # Use defaultdict for automatic group creation

    for animal in self.animals:
      first_letter = animal[0].upper()
      grouped_animals[first_letter].append(animal)

    return grouped_animals

  def get_groups(self):
    """Prints animal groups based on the first letter of their names."""

    animal_groups = self.sort_animals()

    if not animal_groups:
      print(f"{self.name} zoo has no animals yet.")
    else:
      print(f"\nAnimal groups at {self.name} zoo:")
      for letter, animals in animal_groups.items():
        print(f"\tGroup {letter}:")
        for animal in animals:
          print(f"\t\t- {animal}")

  def add_animal_interactive(self):
    """Prompts the user for a new animal to add and calls the add_animal method."""

    while True:
      new_animal = input("Which animal should we add to the zoo (or 'q' to quit): ")
      if new_animal.lower() == 'q':
        break
      self.add_animal(new_animal)


# Create a Zoo object
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Interactive animal addition (initial)
ramat_gan_safari.add_animal_interactive()

# Animal Management Menu
print(f"\n** {ramat_gan_safari} Animal Management Options **")
print("1. Add Animal")
print("2. Get Animals")
print("3. Sell Animal")
print("4. Sort and Group Animals")
print("5. Exit")

while True:
  choice = input("Enter your choice (1-5): ")
  if choice.lower() == 'q' or int(choice) not in range(1, 6):
    print("Exiting Zoo Management.")
    break

  # Handle menu choices
  if choice == '1':
    ramat_gan_safari.add_animal_interactive()
  elif choice == '2':
    ramat_gan_safari.get_animals()
  elif choice == '3':
    animal_to_sell = input("Enter the animal name to sell: ")
    ramat_gan_safari.sell_animal(animal_to_sell)
  elif choice == '4':
    ramat_gan_safari.get_groups()