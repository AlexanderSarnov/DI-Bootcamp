"""
Exercise 2 : Dogs
Instructions
Create a class called Dog.
In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
Create a method called bark that prints the following string “<dog_name> goes woof!”.
Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
Print the details of his dog (ie. name and height) and call the methods bark and jump.
Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
Print the details of her dog (ie. name and height) and call the methods bark and jump.
Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
"""

class Dog:
  """Represents a dog via name and height."""

  def __init__(self, name: str, height: int): # int for height for simplicity
    """
    Initializes a Dog object with the given name and height.

    Args:
        name: The name of the dog (str).
        height: The height of the dog in centimeters (int).
    """

    self.name = name
    self.height = height

  def bark(self: str):
    """Prints a message indicating the dog barking."""

    print(f"{self.name} goes woof!")

  def jump(self: str):
    """Prints a message indicating the dog jumping and its jump height."""

    jump_height = self.height * 2
    print(f"{self.name} jumps {jump_height} cm high!")


# Create David's dog object
davids_dog = Dog("Rex", 50)

# Print David's dog details and call methods
print(f"David's dog:")
print(f"\tName: {davids_dog.name}")
print(f"\tHeight: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

# Create Sarah's dog object
sarahs_dog = Dog("Teacup", 20)

# Print Sarah's dog details and call methods
print(f"\nSarah's dog:")
print(f"\tName: {sarahs_dog.name}")
print(f"\tHeight: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Dogs size comparison
bigger_dog = davids_dog if davids_dog.height > sarahs_dog.height else sarahs_dog
print(f"\nThe bigger dog is: {bigger_dog.name}")