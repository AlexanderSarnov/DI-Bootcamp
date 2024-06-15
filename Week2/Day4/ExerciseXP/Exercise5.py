"""
Exercise 5 : Let’s Create Some Personalized Shirts !
Instructions
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
Call the function make_shirt().

Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
Call the function, in order to make a large shirt with the default message
Make medium shirt with the default message
Make a shirt of any size with a different message.

Bonus: Call the function make_shirt() using keyword arguments.
"""

def make_shirt(size="large", message="I love Python"):
  """Summarizes the size and message printed on a shirt.

  Args:
      size: The size of the shirt (default: "large").
      message: The message printed on the shirt (default: "I love Python").
  """
  print(f"The size of the shirt is {size} and the text is \"{message}\".")

# Calling the function with different arguments
make_shirt()  # Large shirt with default message ("I love Python")
make_shirt(size="medium")  # Medium shirt with default message ("I love Python")
make_shirt("small", "Learning Python is fun!")  # Small shirt with custom message

# Bonus: Calling the function with keyword arguments
make_shirt(message="Python is awesome!", size="medium")