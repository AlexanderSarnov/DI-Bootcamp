'''
Exercise 4 : Family
Instructions
'''
# 1. Create a class called Family and implement the following attributes:
class Family:

# members: list of dictionaries
# last_name : (string)
    def __init__(self, last_name: str, members = []) -> None:
        self.last_name = last_name
        self.members = members
        
# 2. Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    def born(self, **kwargs) -> None:
        self.members.append(kwargs)
        print(f"Conngratulations! A new child has been born in a {self.last_name} family")
        
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
    def is_18(self, name: str) -> bool:
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18
        return False
            
# family_presentation: a method that prints the family’s last name and all the members’ details.
    def family_presentation(self) -> None:
        print(f"{self.last_name} Family:")
        for member in self.members:
            age_status = "is an adult" if self.is_18(member['name']) else "is a child"
            print(f"\t-{member['name']} ({member['age']} years old), {member['gender']} - {age_status}")

# 3. Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
'''
    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
'''
connor_family = Family("Connor", [
  {'name': 'Kyle', 'age': 35, 'gender': 'Male', 'is_child': False},
  {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

# Call the methods
connor_family.born(name="John", age=0, gender="Male")
connor_family.family_presentation() # is_18 is called within family_presentation