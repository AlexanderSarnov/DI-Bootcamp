from Exercise2 import Dog  # Import Dog class from Exercise2.py
import random


class PetDog(Dog):
    """Represents a pet dog that inherits from the Dog class and has a trained flag."""

    def __init__(self, name, age, weight, trained=False):
        """
        Initializes a PetDog object with name, age, weight, and a trained flag (default False).

        Args:
            name (str): The name of the pet dog.
            age (int): The age of the pet dog.
            weight (float): The weight of the pet dog.
            trained (bool, optional): Whether the dog is trained (default False).
        """

        super().__init__(name, age, weight)  # Call parent class constructor
        self.trained = trained

    def train(self):
        """Simulates training the dog and updates the trained flag."""

        # Call the bark method from Dog
        bark_sound = self.bark()
        print(f"{bark_sound}")
        self.trained = True
        print(f"{self.name} is now trained!")

    def play_together(*dog_names):
        """Prints a message listing all dog names playing together."""
        print(f"{', '.join(dog_names)} all play together!")

    def do_a_trick(self):
        """Performs a random trick if the dog is trained."""

        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}!")
        else:
            print(f"{self.name} isn't trained yet. Teach him some tricks!")

# Implementation
dog_names = ["Max", "Milo", "Rex"]  # List of all dog names (can be replaced with user input)

dog_pets = []  # Empty list to store PetDog instances
for name in dog_names:
    # Function to retrieve dog info (name, age, weight)
    dog_info = {"name": name, "age": random.randint(1, 7), "weight": random.uniform(3.0, 40.0)}
    dog_pets.append(PetDog(dog_info["name"], dog_info["age"], dog_info["weight"]))

# Playing 
PetDog.play_together(*dog_names)   

# Train and do a trick
for pet_dog in dog_pets:
    pet_dog.train()
    pet_dog.do_a_trick()