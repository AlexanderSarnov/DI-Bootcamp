"""
Exercise 6 : Magicians …
Instructions
Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

Create a function called show_magicians(), which prints the name of each magician in the list.
Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
Call the function make_great().
Call the function show_magicians() to see that the list has actually been modified.
"""

def show_magicians(magicians):
  """Prints the name of each magician in a list."""
  for magician in magicians:
    print(magician)

def make_great(magicians):
  """Modifies a list of magicians by adding 'the Great' to each name in-place."""
  # Modify the original list in-place (as instructed in the prompt)
  for i in range(len(magicians)):
    magicians[i] = magicians[i] + " the Great"  # Modify elements directly

  return magicians  # Return the modified list (not strictly necessary here)

# List of magician names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Show the original list before modification
print("Original List:")
show_magicians(magician_names)

# Make the magicians great
great_magicians = make_great(magician_names)

# Show the modified list after the function call
print("\nModified List:")
show_magicians(magician_names)