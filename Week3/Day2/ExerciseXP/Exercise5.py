from Exercise4 import Family  # Import Family class from Exercise4.py

class TheIncredibles(Family):
    """Represents The Incredible family"""

    def __init__(self, last_name, members=[]):
        super().__init__(last_name, members)
        for member in members:  # Add default incredible_name if missing
            member.setdefault('power', 'Unknown Incredible Power')
            member.setdefault('incredible_name', 'Unknown Incredible Name')

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name and self.is_18(name):
                print(f"{name} uses their power: {member['power']}")
                return
        raise Exception(f"{name} is not yet 18 years old and cannot use their powers!")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        print(f"{self.last_name} Family:")

        # Iterate through members and print details including power and incredible name (handle missing keys gracefully)
        for member in self.members:
            incredible_name = member.get('incredible_name', 'Unknown Incredible Name')  # Use get() with default
            power = member.get('power', 'Unknown Incredible Power')  # Use get() with default
            print(f"\t- {member['name']} ({member['age']} years old, {member['gender']}) - {incredible_name} ({power})")

# Create an Incredibles instance
incredibles = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

# Call incredible_presentation
incredibles.incredible_presentation()

# Add Baby Jack using born method from Family
incredibles.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")

# Call incredible_presentation again
incredibles.incredible_presentation()

# Test use_power exception for underaged
incredibles.use_power("Jack") # Raise exception