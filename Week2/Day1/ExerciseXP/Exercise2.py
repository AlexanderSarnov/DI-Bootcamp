'''
Exercise 2 : Dogs
Instructions
'''

# Create a class called Dog.
class Dog:
    # In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
    def __init__(self, name: str, height: int) -> None:
        self.name = name
        self.height = height  
         
    # Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self) -> None:
        print(f"{self.name} goes woof!")
    
    # Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    def jump(self) -> None:
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

# Outside of the class, create an object called davids_dog. His dog's name is “Rex” and his height is 50cm.
davids_dog = Dog("Rex", 50)



# Print the details of his dog (ie. name and height) and call the methods bark and jump.
print(f"\nDavid's dog name is {davids_dog.name}, and height is {davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()

# Create an object called sarahs_dog. Her dog's name is “Teacup” and his height is 20cm.
sarahs_dog = Dog("Teacup", 20)
print(f"\nSarah's dog name is {sarahs_dog.name}, and height is {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

bigger_dog = davids_dog if davids_dog.height > sarahs_dog.height else sarahs_dog
print(f"\nThe bigger dog is: {bigger_dog.name}") 
