'''
Exercise 2 : Dogs
Instructions
'''
# Create a class called Dog with the following attributes name, age, weight.
class Dog():
    def __init__(self, name: str, age: int, weight: int) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    
#Implement the following methods in the Dog class:
#bark: returns a string which states: “<dog_name> is barking”.
    def bark(self) -> str:
        return f"{self.name} is barking"
#run_speed: returns the dogs running speed (weight/age*10).
    def run_speed(self) -> float: # There can be division by zero exception handling added
        return self.weight / self.age * 10
#fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
    def fight(self, other_dog: "Dog") -> str: # There can be more conditions added
        if (other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight):
            winner = other_dog.name
        else:
            winner = self.name
        return f"In fight between {self.name} and {other_dog.name} the winner is {winner}!"

#Create 3 dogs and run them through your class.
dog_casper = Dog("Casper", 3, 45)
dog_tilde = Dog("Tilde", 13, 2)
dog_spark = Dog("Spark", 7, 15)

print(dog_casper.fight(dog_spark))
print(dog_spark.fight(dog_tilde))