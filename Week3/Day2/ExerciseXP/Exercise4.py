class Family:
  """Represents a regular family"""

  def __init__(self, last_name, members=[]):
    self.last_name = last_name
    self.members = members

  def born(self, **child_info):
    self.members.append(child_info)
    print(f"Congratulations! A new child has been born to the {self.last_name} family!")

  def is_18(self, name):  
    for member in self.members:
      if member['name'] == name:
        return not member.get('is_child', False) and member.get('age', 0) >= 18
    return False # Member not found

  def family_presentation(self):
    print(f"{self.last_name} Family:")
    for member in self.members:
      adult_status = "is an adult" if self.is_18(member['name']) else "is a child"
      print(f"\t- {member['name']} ({member['age']} years old, {member['gender']}) - {adult_status}")

# Create a Family instance
my_family = Family("Connor", [
  {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
  {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

# Call the methods
my_family.born(name="John", age=0, gender="Male")
my_family.family_presentation() # is_18 is called within family_presentation