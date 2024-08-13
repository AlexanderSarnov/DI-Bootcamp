# Week 2 Day 2 
# *OOP Inheritance, Encapsulation, Polymorphism And Multiple Inheritance

# *Inheritance
# Inheritance is the process by which one class takes on the attrivutes and methods of another. Newly formed classes are called child classes, and the classes that child classes are derived from are called parnt classes.
'''
|-> Inheritance
   |-> Parent
     |-> Child
'''
# Example of Inheritance:
class Animal():
    def __init__(self, name):
        self.name = name

class Dog(Animal): # Class Dog inherits from class Animal (Class Dog is a child of Animal parent Class)
    def bark(self):
        print("{} barked, WAF !".format(self.name))


# *Multiple Inheritance Examples and real life experience
# Multiple Inheritance
# In multiple inheritance, the derived class is derived from more than one base class. The general syntax for multiple class inheritance is:

class BaseClass1:
  # Base class1 body
  pass
class BaseClass2:
  # Base class2 body
  pass
class DerivedClass(BaseClass1,BaseClass2): # Multiple Inheritance
  # Derived class body
  pass
'''
Benefits Of Class Inheritance
Here are a few main advantages of using Inheritance:

Reusability Of Code
Since the derived class inherits features from the base class, adding new features to it. This results in re-usability of code. This makes the code more scalable.

Structured Code
By dividing the code into classes, we can structure our software better by dividing functionality into classes.
'''

# Exercise: Class Attribute
class Circle:
    color = "red"
    shape = "circle"

class NewCircle(Circle):
    color = "blue"
    # print(shape)

nc = NewCircle
print(nc.color) # Output: blue - from NewCircle class

class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter) # 1

nc.grow()

print(nc.diameter) # 1*2*2=4
# >> What will be the output

# *Overriding Parent Methods

# When you create the same method inside the child class, you override the parent class method.

# It's important to note that child classes override or extend the functionality of parent classes. The child class will have all the parent class'’'s functions, plus his functions.

# *The Super() Function

# With the super() function, you can gain access to inherited methods that have been overwritten in a class object.
class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

class Dog(Animal):
    def __init__(self, type, number_legs, sound, fetch_ball):
        super().__init__(type, number_legs, sound)
        # Or : Animal.__init__(self,type, number_legs, sound)
        self.fetch_ball = fetch_ball
# We use super() function before __init__() method. We want to pull the content of __init__() method from the parent class into the child class.

# You can also specify from which class you want to use the super() function.        
class MyClass(object):
    def func(self):
        print("I'm being called from the Parent class")


class ChildClass(MyClass):
    def func(self):
        print("I'm actually being called from the Child class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()

my_instance_2 = ChildClass()
my_instance_2.func()

# Exercise
'''
Try to recreate the class explained below:

We have a class called Door that has an attribute of is_opened declared when an instance is initiated.

We can create a class called BlockedDoor that inherits from the base class Door.

We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.
'''
class Door():
    def __init__(self, is_opened: bool) -> None:
        self.is_opened = is_opened
        
    def open_door(self) -> None:
        self.is_opened = True

    def close_door(self) -> None:
        self.is_opened = False

class BlockedDoor(Door):
    def open_door(self):
        raise ValueError("Blocked door cannot be opened")

    def close_door(self):
        raise ValueError("Blocked door cannot be closed")

try:
    door = Door(True)
    door.open_door()
    door.close_door()
    door = BlockedDoor(True)
    door.open_door()
    door.close_door()
except ValueError as error:
    print(error)
    print("The door is blocked")
    
# *Encapsulation
# _method - means it shall be only used in the class
class Computer():

    def __init__(self):
        self.name = "Apple Computer" # public
        self.__max_price = 900 # private

    def sell(self):            # public method
        print(f"Selling Price: {self.__max_price}")

    def __sell(self):          # private method
      print('This is private method')

    def set_max_price(self, price): # setter method to access private method
        self.__max_price = price

c = Computer()
c.sell()
#c.__sell() # AttributeError: 'Computer' object has no attribute '__sell'. Did you mean: 'sell'?


# change the price
c.__max_price = 1000
c.sell()
# >> The private attribute __max_price cannot be changed
# >> Selling Price: 900

# using setter function
c.set_max_price(1000)
c.sell()
# >> Selling Price: 1000

# *Polymorphism

# In programming, polymorphism means different or related classes that use the same names for their functions.

# Polymorphism allows the ability to use a standard interface for multiple forms or data types.

# Let’s define two classes, Parrot and Penguin, both with functions called fly and swim and then we’ll call these functions with the flying_test(bird) function.

class Parrot():

    def fly(self):
        print("Parrot can fly")

    def swim(self):
        print("Parrot can't swim")

class Penguin():

    def fly(self):
        print("Penguin can't fly")

    def swim(self):
        print("Penguin can swim")

# common interface
def flying_test(bird):
    bird.fly()

#instantiate objects
blu = Parrot()
peggy = Penguin()

# passing the object
flying_test(blu)
# >> Parrot can fly

flying_test(peggy)
# >> Penguin can't fly

'''
In the next section we learn that a child class (AlienDog) inherits all the methods from the parent class (Dog). However, in some situations, the method inherited from the parent class doesn't quite fit into the child class (because of different attributes and characteristics). In such cases, you will have to re-implement the method in the child class.
'''

# *Multiple Inheritance

# A class can inherit from two different classes; in this case, the order of the parent class in a class definition will decide what will be inherited. The first parent class will prioritize classes below (meaning the functions last to be inherited can override functions from the parent class).

class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print("{} barked, WAF !".format(self.name))

class AlienDog(Alien, Dog):
    def bark(self):
        print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))


my_normal_dog = Dog("Roger")
my_normal_dog.sleep()
# >> zzzZZZZZ

my_normal_dog.bark()
# >> Roger barked, WAF !

my_alien_dog = AlienDog("Rex", "Neptune")
print(my_alien_dog.planet)
# >> Neptune

my_alien_dog.fly()
# >> Rex is flying!

my_alien_dog.sleep()
# >> Aliens don't sleep

my_alien_dog.bark()
# >> Rex barked, 0ul10ul0u (that's how aliens dogs bark..) !

'''
Here I have created two new classes, Alien and AlienDog, AlienDog inherit from Alien and Dog, but both classes have an __init__ and a sleep method. However, the functions of Alien will be transferred to AlienDog because Alien is before Dog in the class definition (class AlienDog(Alien, Dog)).
'''

class A():

    def dothis(self):
        print("doing this in A")


class B(A):
    pass


class C():
    def dothis(self):
        print("doing this in C")


class D(B, C):
    pass

d_instance = D()
d_instance.dothis()