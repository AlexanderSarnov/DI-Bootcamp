import random
'''
Exercise 3 : Dogs Domesticated
Instructions
'''
# Create a new python file and import your Dog class from the previous exercise.
from Exercise2_Dogs import Dog

# In the new python file, create a class named PetDog that inherits from Dog.
class PetDog(Dog):
    
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    def __init__ (self, name: str, age: int, weight: int, trained: bool=False) -> None:
        super().__init__(name, age, weight)
        self.trained = trained
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
    def train(self) -> None:
        print(self.bark())
        self.trained = True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
    def play(self, *args: "Dog") -> None:
        dog_names = [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.
    def do_a_trick(self) -> None:
        tricks = [
        f"{self.name} does a barrel roll",
        f"{self.name} shakes your hand.",
        f"{self.name} stands on his back legs.",
        f"{self.name} plays dead."
        ]
        
        random_trick = random.choice(tricks)
        print(random_trick)

# Implementation
dog_names = ["Max", "Milo", "Rex"]  # List of all dog names (can be replaced with user input)

dog_pets = []  # Empty list to store PetDog instances
for name in dog_names:
    # Function to retrieve dog info (name, age, weight)
    dog_info = {"name": name, "age": random.randint(1, 7), "weight": random.uniform(3.0, 40.0)}
    dog_pets.append(PetDog(dog_info["name"], dog_info["age"], dog_info["weight"]))

# Playing 
PetDog.play(*dog_pets)   

# Train and do a trick
for pet_dog in dog_pets:
    pet_dog.train()
    pet_dog.do_a_trick()       
