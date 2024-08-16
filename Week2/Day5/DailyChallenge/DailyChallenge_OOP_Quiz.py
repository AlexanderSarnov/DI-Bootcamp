# Daily challenge: OOP Quizz
# Instructions
# Part 1 : Quizz :
# Answer the following questions

#! Q: What is a class?
#* A: 
'''
A class 
    is a blueprint for creating objects. 
    It defines attributes (characteristics or properties) and methods (functions) that objects of that class will possess.

An instance 
    is a specific realization of a class. 
    It's a concrete object created from the class blueprint. 
    Each instance has its own set of attribute values and can access and use the methods defined in the class.

Attributes:
    Attributes hold data associated with the object. There are three primary types:

Instance Attributes:
    Unique to each object of a class.
    Defined within the __init__ method.
    Used to store data specific to an individual instance.
Class Attributes:
    Shared by all instances of a class.
    Defined outside the __init__ method.
    Used to store data common to all objects of the class.
Special Attributes:
    Built-in attributes that start and end with double underscores (e.g., __dict__, __module__).
    Provide insights into the object's structure.
Methods
    Methods define the actions that objects can perform. They are functions associated with a class.

Core OOP Concepts
    Classes are fundamental to object-oriented programming (OOP). Four core OOP concepts are:

Encapsulation: 
    Bundling data (attributes) and methods within a single unit (an object).
Abstraction: 
    Focusing on essential features while hiding implementation details.
Inheritance: 
    Creating new classes (subclasses) based on existing classes (superclasses).
Polymorphism: 
    Ability of objects of different types to be treated as if they were of the same type.
'''
#! Q: What is an instance?
#* A: 
'''
An instance 
    is a specific realization of a class. 
    It's a concrete object created from the class blueprint. 
    Each instance has its own set of attribute values and can access and use the methods defined in the class.
    
Key Characteristics of Instances
    Unique Identity: 
        Every instance has a distinct identity, even if they belong to the same class. This identity is managed internally by Python.
    Attribute Ownership: 
        Instances own their instance attributes. Changes to an instance's attributes do not affect other instances of the same class.
    Method Access: 
        Instances can access and invoke methods defined in their class. These methods operate on the instance's data.
    Life Cycle: 
        Instances are created dynamically and can be destroyed when no longer needed. Python's garbage collector handles memory management for instances.

Attributes and Methods access
# Create class Dog with it's attributes within __init__ - thus creating so called Instance Attributes
class Dog:
    def __init__(self, name: str, breed: str) -> None:
        self.name = name
        self.breed = breed

# Create instances (Instantiate objects)
buddy = Dog("Buddy", "Golden Retriever")
max = Dog("Max", "Labrador")


    Attributes access
        Instant Attributes are specific to each instance. They are created and assigned values within the __init__ method.
        
        buddy.age = 3 
        # Adding age attribute to the buddy instance of Dog class with value 3 (or replacing the default value of existing attribute, that will only affect an instance)
    
    Methods access
        Instance methods are accessed using the dot notation on the instance. When called, they implicitly receive the instance itself as the self parameter. (Methods are functions within classes!)
        
        buddy.bark()
        # Calling the bark method on the buddy instance
        
Identity, Type, and Value
    Identity: 
        Refers to the unique address of an object in memory. The id() function returns the identity of an object.
    Type: 
        Represents the class to which an instance belongs. The type() function returns the type of an object.
    Value: 
        The data stored in an instance's attributes.

print(id(buddy))  # Unique memory address
print(type(buddy))  # <class '__main__.Dog'>
print(buddy.name)  # Value of the name attribute

Instance and Class Relationships
    While instances are created from classes, they are distinct entities. 
    Changes to a class do not affect existing instances unless they involve overridden methods or modified class attributes.
'''
#! Q: What is encapsulation?
#* A: 
'''
Encapsulation is 
    a fundamental principle in object-oriented programming (OOP) that involves bundling data (attributes) and methods (functions) that operate on that data within a single unit, called a class.
     
    This concept serves to:
        Protect data integrity: 
            By restricting direct access to attributes, encapsulation prevents accidental modification.
        Increase code maintainability: 
            By hiding implementation details, you make code easier to understand and modify.
        Enhance code reusability: 
            Encapsulated objects can be reused in different parts of the program without worrying about internal details.
            
Encapsulation in Python (comprehension)
    Unlike languages like Java or C++, 
        Python doesn't enforce strict access modifiers (public, private, protected). 
        
    However, it follows a convention to achieve encapsulation:
        Naming Convention: 
            Using a single underscore (_) prefix for an attribute or method indicates that it's intended for internal use only. 
            While not enforced, it's a strong convention to follow.

Example:
    class BankAccount:
        def __init__(self, initial_balance):
            self._balance = initial_balance  
            # Encapsulated attribute _balance
        
        def deposit(self, amount):
            self._balance += amount

        def withdraw(self, amount):
            if self._balance >= amount:
                self._balance -= amount
            else:
                print("Insufficient funds")

        def get_balance(self):
            return self._balance
            
        def set_balance(self, new_balance):
        if new_balance >= 0:
            self._balance = new_balance
        else:
            print("Invalid balance")
            
        # _balance is considered a private attribute,       accessible only within the class. 
        # deposit, withdraw, get_balance and set_balance are public methods providing controlled access to the balance.

From the example : 
    Another core concept of Encapsulation is using Getters and Setters in order to access and modify private attributes.
    Getters are added in order to read the value of the private attribute
    Setters are added in order to reset the value of the private attribute

Encapsulation and Inheritance
    Encapsulation can be combined with inheritance:

    Base classes can define encapsulated attributes and methods.
    Subclasses can access protected attributes (those with a single underscore) but usually shouldn't modify them directly.

Key Points
    Python relies on conventions for encapsulation, primarily using the single underscore prefix.
    Getters and setters can provide controlled access to attributes.
    While not strictly enforced, encapsulation is a valuable principle for writing robust and maintainable code.
'''
#! Q: What is abstraction?
#* A: 
'''
Abstraction is 
    the process of hiding complex implementation details and exposing only the essential features of an object or system. 
    It's about focusing on what something does rather than how it does it. 
    This simplifies the interaction with the system and makes it easier to understand and use.

Abstraction in Python: Abstract Classes
    Python supports abstraction through abstract classes.
    These are classes that cannot be instantiated directly.
    They serve as a blueprint for other classes, defining a common interface that subclasses must implement.
    

To create abstract classes and methods, we use the abc module:
    from abc import ABC, abstractmethod

    class Shape(ABC):
        @abstractmethod
        def area(self):
            pass

        @abstractmethod
        def perimeter(self):
            pass
    
    # Shape is an abstract class.
    # area and perimeter are abstract methods. 
    # Subclasses must implement these methods.

The Mechanism Behind Implementation
    Inheritance: 
        When a class inherits from an abstract class, it implicitly agrees to the contract defined by the abstract methods.
    Method Overriding: 
        To fulfill this contract, the subclass must provide a concrete implementation for each inherited abstract method. 
        This is achieved by defining a method with the same name and parameters in the subclass.
    Polymorphism: 
        Abstract methods enable polymorphism, allowing objects of different subclasses to be treated as if they were of the same type (the abstract class).
    Enforcing Interface: 
        By requiring subclasses to implement abstract methods, the abstract class ensures that all derived classes have a common set of behaviors
    
    Example:
        from abc import ABC, abstractmethod

        class Shape(ABC):
            @abstractmethod
            def area(self):
                pass  # Abstract method

        class Rectangle(Shape):
            def __init__(self, width, height):
                self.width = width
                self.height = height

            def area(self):
                return self.width * self.height

        # Incorrect:
        class InvalidShape(Shape):
            pass  # Missing implementation for area

        # This will raise a TypeError because InvalidShape is still abstract
        invalid_shape = InvalidShape()
    
    In essence, requiring subclasses to implement abstract methods is a mechanism to enforce a consistent interface and ensure that derived classes have the necessary functionality. 
    It promotes code reusability, maintainability, and flexibility.
    
Why Use Abstraction?
    Code Reusability: 
        Define common behavior in the abstract class.
    Enforce Structure: 
        Ensure subclasses implement essential methods.
    Improved Readability: 
        Focus on the what rather than the how.
    Polymorphism: 
        Create objects of different types that can be treated as if they were of the same type.
'''
#! Q: What is inheritance?
#* A: 
'''
Inheritance is 
    a fundamental concept in object-oriented programming (OOP) that allows you to create new classes (subclasses or derived classes or children classes) based on existing classes (superclasses or base classes or parent classes). 
    This promotes code reusability and helps in creating hierarchical relationships between classes.
    
    Although the common practice is not to create an overcomplicated structures it is possible to create multi-level abstraction-object pairs where subclasses will have their own abstraction definitions:
        from abc import ABC, abstractmethod

        class Shape(ABC):
            @abstractmethod
            def area(self):
                pass

        class TwoDimensionalShape(Shape):
            @abstractmethod
            def perimeter(self):
                pass

        class Rectangle(TwoDimensionalShape):
            def __init__(self, width, height):
                self.width = width
                self.height = height

            def area(self):
                return self.width * self.height

            def perimeter(self):
                return 2 * (self.width + self.height)
    Best Practices
        Keep inheritance hierarchies relatively flat.
        Use interfaces or abstract classes judiciously.
        Consider composition over inheritance when appropriate.
        Test your code thoroughly to ensure correct behavior.
    
    Key Concepts
        Base class (superclass or parent class): 
            The original class from which other classes inherit.
        Derived class (subclass or child class): 
            A class that inherits attributes and methods from a base class.
        Syntax
                class BaseClass:
                # Base class attributes and methods
                    pass

                class DerivedClass(BaseClass):
                # Derived class attributes and methods
                    pass
    
    Inheritance Process
        A derived class inherits all attributes and methods from the base class, except for private attributes and methods (those prefixed with double underscores).
        The derived class can add its own attributes and methods.
        The derived class can override methods of the base class to provide specific implementations.
        Private attributes are designed for public methods to work without discouraging the private attributes and thus the inheritance concept allows us to use public methods from our parent classes in a hidden way (example: having hidden variables)

    Inheritance Example
        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                print("Animal speaking")

        class Dog(Animal):
            def bark(self):
                print("Woof!")

        # Create objects
        animal = Animal("Generic Animal")
        dog = Dog("Buddy")

        # Access inherited attributes and methods
        print(dog.name)  # Output: Buddy
        dog.speak()      # Output: Animal speaking
        dog.bark()       # Output: Woof!
    
Types of Inheritance
    Python supports various types of inheritance:

    Single Inheritance: 
        A class inherits from only one base class.
    Multiple Inheritance: 
        A class inherits from multiple base classes.
    Multilevel Inheritance: 
        Involves multiple levels of inheritance.
    Hierarchical Inheritance: 
        Multiple subclasses inherit from a single base class.
    Hybrid Inheritance: 
        Combines multiple types of inheritance.

Method Overriding
    A derived class can provide a specific implementation for a method that is already defined in its base class.
    This is called method overriding.

    Example
    class Animal:
        def speak(self):
            print("Animal speaking")

    class Dog(Animal):
        def speak(self):
            print("Woof!") 
            # Dog will speak "Woof!" while Animal speaks: "Animal speaking" although Dog is a subclass of Animal
    
    Thus defining 
        class without (): 
        class Base: 
        - we are defining a parent class (or Base class) 
        and with (): 
        class Subclass(Base): 
        - we are defining a subclass or child of Base class.

Super() Function
    The super() function in Python returns a temporary object that allows you to access methods of the parent class. It's particularly useful in:

    Calling parent class constructors: 
        Ensuring proper initialization of inherited attributes.
    Method overriding: 
        Calling the parent class's method before or after adding custom behavior.
    Multiple inheritance: 
        Resolving the method resolution order (MRO) correctly.

    class Base:
        def __init__(self):
            print("Base class constructor")

    class Derived(Base):
        def __init__(self):
            super().__init__()
            print("Derived class constructor")
    
    How super() Works
        When we call super() within a method of a subclass, it creates a proxy object that represents the parent class. 
        This proxy object allows us to call methods of the parent class without explicitly naming it.
        
        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                print("Animal speaking")

        class Dog(Animal):
            def __init__(self, name, breed):
                super().__init__(name)  # Call parent constructor
                self.breed = breed

            def speak(self):
                super().speak()  # Call parent's speak method (Animal speaking)
                print("Woof!")
        
        barkley = Dog("Barkley", "Dog")
        barkley.speak()
        # Output: 
        # Animal speaking
        # Woof!
    Thus from this example we see how base class is used to provide a part of the information and child to complete the case within the original method
        
'''
#! Q: What is multiple inheritance?
#* A: 
'''
Example with Multiple Inheritance and MRO:
    class A:
        def show(self):
            print("in A")

    class B(A):
        def show(self):
            print("in B")

    class C(A):
        def show(self):
            print("in C")

    class D(B, C):
        def show(self):
            super().show()
            print("in D")
    # In this example, super().show() will call the show method of the next base class in the MRO, which is B in this case.
    
    D inherits from both B and C.
    The MRO for D is D, B, C, A, object.


'''
#! Q: What is polymorphism?
#* A: 
'''
Polymorphism is a 
    core concept in object-oriented programming that allows objects of different types to be treated as if they were of the same type. It enhances code flexibility, reusability, and maintainability.

Types of Polymorphism in Python
    There are primarily two types of polymorphism in Python:
        1. Method Overriding
        2. Polymorphism through Duck Typing

Method Overriding
    Definition: 
        This occurs when a subclass provides a specific implementation for a method that is already defined in its parent class.

Example:
class Animal:
    def speak(self):
        print("Animal speaking")

class Dog(Animal):
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow!")

animals = [Dog(), Cat()]
for animal in animals:
    animal.speak()  # Output: Woof! \n Meow!

Polymorphism through Duck Typing
    Definition: 
        Python is dynamically typed, allowing objects of different types to be used interchangeably if they have compatible methods. 
        This is often referred to as "duck typing" (if it walks like a duck and quacks like a duck, it's a duck).
Example:
def make_sound(animal):
    animal.make_sound()

class Dog:
    def make_sound(self):
        print("Woof!")

class Cat:
    def make_sound(self):
        print("Meow!")

make_sound(Dog())  # Output: Woof!
make_sound(Cat())  # Output: Meow!
'''
#! Q: What is method resolution order or MRO?
#* A: 
'''
MRO (Method Resolution Order): 
    Python uses the C3 linearization algorithm to determine the order in which base classes are searched for methods.
    
Understanding the MRO
    Determines the order in which base classes are searched for methods when a method is called on an instance.

Diamond Problem: 
    In multiple inheritance, be aware of the diamond problem and use super() carefully to avoid ambiguity.
    
    The diamond problem arises when a class inherits from two or more classes that have a common ancestor. 
    This creates a diamond-shaped inheritance hierarchy.
    When a method is called on an instance of the lowest class, there's ambiguity about which version of the method to use: 
        the one from one parent, the other parent, or the common ancestor.
        
        Base
      /      \
     /        \
Parent1       Parent2
     \        /
      \      /
       Sibling
       
MRO: Sibling, Parent1, Parent2, Base, object
Key Points:
The diamond problem arises in multiple inheritance.
Python's MRO helps resolve the ambiguity. 
Understanding the MRO is crucial for correct method resolution.
'''

import random
# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
cards_suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
cards_values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
# Could be done with a dictionary instead

class Card:
    def __init__(self, suit: str, value: str) -> None:
        self.suit = suit
        self.value = value
    
    def __str__(self):
        return f"{self.value} of {self.suit}"

# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in cards_suits for value in cards_values]
        print(f"Total cards created: {len(self.cards)}")
    
    def shuffle(self):
        """
        Shuffles the deck of cards only if it contains all 52 unique cards.

        Raises a ValueError if the deck is not valid.
        """

        unique_cards = set(card.value + " of " + card.suit for card in self.cards) # creates a set of unique cards from suit/value pairs

        # Check if the number of unique cards is equal to the expected number (52)
        if len(unique_cards) != 52:
            raise ValueError("Deck is not valid. Missing cards or duplicates found.")

        random.shuffle(self.cards)
    
    def deal(self):
        '''
        Deals a card from the deck and removes it
        '''
        if not self.cards:
            return None
        return self.cards.pop()

# Application test
deck = Deck()
deck.shuffle()

card1 = deck.deal()
card2 = deck.deal()

print(card1)
print(card2)