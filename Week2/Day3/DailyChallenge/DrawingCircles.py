import turtle
from DailyChallenge_Circle import Circle  # Import your Circle class

def draw_sorted_circles(circles):
  """Draws sorted circles using Turtle graphics.

  Args:
    circles: A list of Circle objects.
  """

  sorted_circles = Circle.sort_circles(circles) # calls sorting method from Circle class

  t = turtle.Turtle()
  for circle in sorted_circles:
    t.circle(circle.radius)
    t.penup()
    t.forward(circle.radius * 2 + 5)  # Adds some spacing
    t.pendown()

# Example usage:
# Given unordered list of circles
circles = [Circle(radius=50), Circle(radius=30), Circle(radius=20)]

# Draw circles
draw_sorted_circles(circles)
turtle.done()