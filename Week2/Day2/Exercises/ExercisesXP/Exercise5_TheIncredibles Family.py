from Exercise4_Family import Family

'''
Exercise 5 : TheIncredibles Family
Instructions
'''
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
class TheIncredibles(Family):
    def __init__(self, last_name: str, members=...) -> None:
        super().__init__(last_name, members)
    

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
    def use_power(self, name: str) -> None:
        for member in self.members:
            if member['name'] == name and self.is_18(name): 
                print(f"{name} uses their power: {member['power']}")
            return
        raise Exception(f"{name} is not yet 18 years old and cannot use their powers!")

# Add a method called incredible_presentation which :
    def incredible_presentation(self) -> None:
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
        print("*Here is our powerful family**")
        print(f"{self.last_name} Family:")
        
        for member in self.members:
            incredible_name = member.get('incredible_name', 'Unknown Incredible Name')  # Use get() with default
            power = member.get('power', 'Unknown Incredible Power')  # Use get() with default
            print(f"\t- {member['name']} ({member['age']} years old, {member['gender']}) - {incredible_name} ({power})")

# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
incredibles = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

# Call the incredible_presentation method.
incredibles.incredible_presentation()

# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
incredibles.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")

# Call the incredible_presentation method again.
incredibles.incredible_presentation()