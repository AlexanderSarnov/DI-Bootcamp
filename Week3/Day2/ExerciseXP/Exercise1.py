"""
Cats Exercise
"""

class Pets:
    """Represents a collection of pets."""

    def __init__(self, animals = list):
        """
        Initializes a Pets object with a list of pet instances.

        Args:
            animals (list): A list containing pet objects.
        """

        self.animals = animals

    def walk(self):
        """Simulates walking all the pets in the collection."""

        for animal in self.animals:
            print(animal.walk())  # Call each pet's walk method


class Cat:
    """Represents a generic cat."""

    is_lazy = True

    cat_sounds = {
        "Bengal": "Meeeoww",
        "Chartreux": "Meeoooooow",
        "Siamese": "Meow, Meow, Meooow"
    }

    def __init__(self, name = str, age = int, breed = str):
        """
        Initializes a Cat object with name, age, and breed.

        Args:
            name (str): The name of the cat.
            age (int): The age of the cat.
            breed (str): The breed of the cat.
        """

        self.name = name
        self.age = age
        self.breed = breed.title()  # Ensure breed name is capitalized to match with cat_sounds dictionary

    def walk(self):
        """Simulates a cat's walk behavior."""

        return f'{self.name} is just walking around'

    def sing(self):
        """Simulates a cat's vocalization based on its breed (if defined in cat_sounds dictionary)."""

        if self.breed in self.cat_sounds:
            return f'{self.name} says: {self.cat_sounds[self.breed]}'
        else:
            return f'{self.name} says: (generic cat sound)'  # Default sound for not-specified breeds in cat_sounds dictionary


class Bengal(Cat):
    """Represents a Bengal cat breed (inherits from Cat)."""

    def __init__(self, name, age):

        super().__init__(name, age, "bengal")  # Call parent class constructor with breed


class Chartreux(Cat):
    """Represents a Chartreux cat breed (inherits from Cat)."""

    def __init__(self, name, age):

        super().__init__(name, age, "chartreux")  # Call parent class constructor with breed


class Siamese(Cat):
    """Represents a Siamese cat breed (inherits from Cat)."""

    def __init__(self, name, age):

        super().__init__(name, age, "siamese")  # Call parent class constructor with breed


# Create cat instances
bengal_cat = Bengal("Luna", 2)
chartreux_cat = Chartreux("Milo", 4)
siamese_cat = Siamese("Bella", 1)

# List of all cats
all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Sara's pets (using the all_cats list)
sara_pets = Pets(all_cats)

# Take the cats for a walk (as per the exercise)
sara_pets.walk()

# Make the cats sing (using the `sing` method)
print(bengal_cat.sing())
print(chartreux_cat.sing())
print(siamese_cat.sing())