import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
# Compute the circle’s area    
    def area(self):
        return math.pi * self.radius**2

# Print the attributes of the circle - use a dunder method
    def __repr__(self):
        return f"Circle(radius={self.radius})"

# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
    def __gt__(self, other):
        return self.radius > other.radius
    def __lt__(self, other):
        return self.radius < other.radius

# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
    def __eq__(self, other):
        return self.radius == other.radius

# Be able to put them in a list and sort them
    @staticmethod
    def sort_circles(circles):
        return sorted(circles)
