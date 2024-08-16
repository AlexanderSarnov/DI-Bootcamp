"""
Instructions
Challenge 1
Ask a user for a word
Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

Make sure the letters are the keys.
Make sure the letters are strings.
Make sure the indexes are stored in a list and those lists are values.
Examples

"dodo" ➞ { "d": [0, 2], "o": [1, 3] }

"froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

"grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}
"""

def letter_histogram(word):
  """Creates a dictionary storing letter indexes in a list.

  Args:
      word: The word to analyze (with a hidden maximum length).

  Returns:
      A dictionary where keys are letters and values are lists of their indexes.
  """

  # Hidden maximum length, so user won't overload memory with endless input
  MAX_LENGTH = 100

  if len(word) > MAX_LENGTH:
    word = word[:MAX_LENGTH]  # Truncate word if exceeding limit

  letter_indexes = {}
  for i in range(len(word)):
    letter = word[i]
    if letter not in letter_indexes:
      letter_indexes[letter] = []
    letter_indexes[letter].append(i)
  return letter_indexes

# Get user input
user_word = input("Enter a word: ")

# Create the dictionary using the function
result = letter_histogram(user_word)

# Print the dictionary
print(f"\nLetter indexes for '{user_word}': {result}")