# Class has methods and attributes
# It's a way to organize data
# Objects are instances of a class with defined attributes that can use the methods of the class
# Red Ford Mustang is an instance of a Car class with attributes: color, constructor, name - e.g.

# Object attributes - Identifiable Characteristics - {shape, size, color, location}
# Object methods - Behaviour - What it can do {move, jump, start, stop, etc...}

# Defining a class (use Capitalized Camel Case)
class DogDoggoDoggy():
    pass # often used as a placeholder, allows to run code without throwing an error

# Defining an object = assigning a class to the variable
specific_dog_breed = DogDoggoDoggy()

# Attributes are like variables, they can be any data type, the only difference is that they belong to an object. To target an attribute, you need to refer to the object (specific_dog_breed), followed by a dot (.) and the name of the attribute. For example:
# specific_dog_breed.color # will access attribute (class related variable) color

# This will refer to the color attribute of the dog. Of course, when you target an object's attribute, you need to target an exesting attribute, else you will have an error.
# To define a new attribute (or modify an existing one), target it and assign it ti his new value with the equal sign (=):
specific_dog_breed.color = "Brown" # assigned value "Brown" to attribute color of the instance specific_dog_breed of the class DogDoggoDoggy.

# The __init__ method
# When an object is created, python automatically runs the __init__() (it has to be called that) method of the class.

# This method must have at least one argument, self (it doesn't have to be called self, but a python convention)

# self refers to the object itself.

class Dog():
    # Initializer / Instance Attributes
    def __init__(self,name,age):
        self.name = name
        self.age = age
        print(f"A new dog has been initialized!\nHis name is {name} and age is {age} year(s)")
    def whats_you_name(self):
        print(self.name)

sally = Dog("Sally", 1)

# Calling a method inside the class
sally.whats_you_name()

spot = Dog("Spot", 13)
spot.whats_you_name()


# Example of usage
class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age
  # It's so called a dunder method (double underscore)  
  def __repr__(self):
    return f"this person's name is {self.name} and his name {self.age}"
  def __add__(self, other): # + this function will replace the sign of operation
    return self.age + other.age

first_person = Person("John", 36)
second_person = Person("Peter", 30)

print(first_person.name)
print(first_person.age)
print(first_person) # when print function is applied to an Object it automatically calls it's __repr__ method
print(first_person + second_person) # Output: 66 (applied dunder method _add_)
#built_in function __repr__ that prints stuff from the class:

# by default there exist no operation to support 5 + '5' but we can define this operation as a method in a class and with rules that will be able to manage it (for example we can convert '5' into a numeric value)

# !Instance Methods

# Instance methods are defined inside a class and are used to describe a function that belongs to a class. For example, in real life, the "bark" function belongs to "Dog" class.

# Instance methods can be used to perform operations with the attributes, get the contents of an instance, and many other things.

# To define a method, use the def keyword inside the class, like we were doing with th __init__ method. All instance methods need to receive self as the first argument; this allows us to play with th object inside the method.

# Let's define the bark method.

class Dog1():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self): # instance method = method that we can use on the object of that class
        print("{} barks ! WAF".format(self.name)) # using .format on string instead of f-string
    def walk(self, number_of_meters):
        print("{} walked {} meters".format(self.name, number_of_meters)) # again using .format on string instead of f-string
    def rename(self, new_name):
        self.name = new_name
        
shelter_dog = Dog1("Rex")
shelter_dog.bark() # we use brackets when we are calling methods and no need for brackets when we referring to the attributes. Output: Rex barks ! WAF
shelter_dog.walk(10) # Output: Rex walked 10 meters

# !Why use .format string:
# 3. Reusability of Format Strings:
# If you need to create a format string once and use it multiple times with different values, .format() can be more convenient.
# Python
format_string = "Hello, {name}! You are {age} years old."
print(format_string.format(name="Alice", age=30))
print(format_string.format(name="Bob", age=25))

shelter_dog.rename("Paul")

# Example and Exercise

#Analyse the code below. What will be the output ?
class Computer():

    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        #Analyse the line below
        print(self) # prints function describes Computer object and it's location in memory?

mac_computer = Computer()
mac_computer.brand = "Apple" # this way we create a new attribute "brand" for the mac_computer Object of Computer Class, but it will not be associated with Class directly, thus calling it from widows_computer using print(-||-.brand) will return an error 'Computer' object has no attribute 'brand'
print(mac_computer.brand)

windows_computer = Computer()
windows_computer.brand = "Microsoft"

print(windows_computer.brand)

dell_computer = Computer()

Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")

# !Classes and Objects. Code Examples
class BankAccount:
    def __init__(self, owner, balance=0):
        # Initialize the owner and balance attributes
        self.owner = owner
        self.balance = balance
        self.transaction = []
    
    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        # Add the amount to the balance if it's positive, otherwise print an error
        if amount > 0:
            self.balance += amount

            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Error: Deposit amount must be positive.")

    def withdraw(self, amount):
        # Subtract the amount from the balance if it's within the available funds, otherwise print an error
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdraws ${amount}. New balance: ${self.balance}")
        elif amount <= 0:
            print("Error: Withdrawal amount must be positive.")
        else:
            print("Error: Insufficient funds.")

    def check_balance(self):
        # Print the current balance
        print(f"{self.owner}'s balance: ${self.balance}")
    
    def __repr__(self):
        return f"BankAccount('{self.owner}',{self.balance})"
    
    def view_transacrion(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

# Usage Example
account = BankAccount("Alice")
account.deposit(100)
account.withdraw(30)
account.check_balance()

class BankAccountActual:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

# !Usage Example
# Take from the recording of the lesson

# !Using class inside class
# Inventory management System
class Item:
    def __init__(self,name,price,quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def update_quantity(self,amount):
        self.quantity += amount
    
    def calculate_total_value(self):
        return self.price * self.quantity
    
    def __repr__(self) -> str:
        return f"Item('{self.name}', {self.price}, {self.quantity})"
    
class Inventory:
    def __init__(self) -> list:
        self.items = []
    
    def add_item(self,item):
        self.items.append(item)
        print(f"Added {item.name} to inventory")
    
    def remove_item(self, item_name):
        self.items = [item for item in self.items if item.name != item_name] # requires deeper explanation and step-in debugging to see how it evaluates
        print(f"Removed {item_name} from inventory")
    
    def get_inventory_value(self):
        values = [item.calculate_total_value() for item in self.items] # requires deeper explanation and quntization
        print(f"Inventory Value: {sum(values)}")
        return sum(values)
    
    def __repr__(self):
        return "\n".join(str(item) for item in self.items) # requires deeper explanation and quntization
    
item1 = Item("Bananas", 10, 100)
item2 = Item("Peaches", 2, 5)

inventory = Inventory()
inventory.add_item(item1)
inventory.add_item(item2)
inventory.get_inventory_value()
print(inventory)
inventory.remove_item("Bananas")
inventory.get_inventory_value()
print(inventory)

# !End of class exercise
# Exercise: Implementing a Student Grade Management System
# In this exercise, you'll create a system to manage student grades. The system will allow you to add students, record their grades for different subjects, calculate their average grades, and display student information. You will use dictionaries to store the grades for each subject.
# Step-by-Step Instructions:
# 1. *Define the Student Class:*
#    - Create a class called Student.
#    - In the __init__ method, define two attributes: name (the name of the student) and grades (a dictionary to hold the subjects as keys and the corresponding grades as values).
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades
            
# 2. *Create a Method to Add or Update Grades:*
#    - Define a method called add_grade that accepts a subject and a grade as parameters.
#    - The method should add the subject and grade to the grades dictionary or update the grade if the subject already exists.
    def add_grade(self, subject, grade):
        self.grades[subject] = grade

# 3. *Create a Method to Calculate the Average Grade:*
#    - Define a method called calculate_average that calculates and returns the average grade across all subjects.
    def calculate_average(self):
        if not self.grades: # handling empty dictionary (no grades case)
            return 0
        
        total = sum(self.grades.values())
        count = len(self.grades)
        return total / count
# 4. *Override the __str__ Method:*
#    - Customize the string representation of the Student class to display the student's name and their grades in each subject.
    def __str__(self):
        grade_strings = [f"{subject}: {grade}" for subject, grade in self.grades.items()]
        return f"Student {self.name} - Grades:\n  * {', '.join(grade_strings)}"
# 5. *Define the Gradebook Class:*
#    - Create a class called Gradebook.
#    - In the __init__ method, define an attribute called students, which should be an empty list that will hold Student objects.
# 6. *Create a Method to Add a Student:*
#    - Define a method called add_student that accepts a Student object and adds it to the students list.
# 7. *Create a Method to Find a Student by Name:*
#    - Define a method called find_student that accepts a student's name and returns the Student object if found. If not found, return a message indicating that the student is not in the gradebook.
# 8. *Create a Method to Display All Students' Information:*
#    - Define a method called display_all_students that prints the information of all students using their string representation.
# 9. *Test the Classes:*
#    - Create instances of the Student class and add them to a Gradebook instance.
#    - Add or update grades for each student.
#    - Calculate the average grades and display all students' information.
# Challenge Additions:
# - *Add a Remove Grade Feature:* Implement a method in the Student class to remove a grade for a specific subject.
# - *Advanced Search:* Modify the find_student method in the Gradebook class to handle partial matches (e.g., searching for "Ali" should find "Alice").
# - *Class Rank:* Implement a method in the Gradebook class to rank students based on their average grades.