"""
Dogs Exercise
"""

class Dog:
    """Represents a generic dog with a name, age, and weight."""

    def __init__(self, name, age, weight):
        """
        Initializes a Dog object with name, age, and weight.

        Args:
            name (str): The name of the dog.
            age (int): The age of the dog.
            weight (float): The weight of the dog.
        """

        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        """bark: returns a string which states: <dog_name> is barking"""

        return f"{self.name} is barking!"

    def run_speed(self):
        """run_speed: returns the dogs running speed (weight/age*10)."""

        speed_modifier = 10.0
        return self.weight / self.age * speed_modifier

    def fight(self, other_dog):
        """Simulates a fight between two dogs and returns a winner string."""

        my_fight_score = self.run_speed() * self.weight
        other_fight_score = other_dog.run_speed() * other_dog.weight

        if my_fight_score > other_fight_score:
            return f"{self.name} wins the fight!"
        elif my_fight_score < other_fight_score:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie! Both dogs are equally strong."

# Create 3 dog instances and run them through Dog class.
if __name__ == "__main__":
    # Example Usage (modify dog names if needed)
    dog1 = Dog("Max", 3, 20.5)
    dog2 = Dog("Milo", 5, 35.0)
    dog3 = Dog("Rex", 2, 12.0)

    # Get the bark sound (no printing)
    bark_sound = dog1.bark()
    print(f"{bark_sound}")

    # Get the running speed (no printing)
    running_speed = dog2.run_speed()
    print(f"{dog2.name}'s running speed: {running_speed:.2f}")

    # Simulate a fight with a returned winner string (no printing)
    fight_result = dog1.fight(dog3)
    print(fight_result)