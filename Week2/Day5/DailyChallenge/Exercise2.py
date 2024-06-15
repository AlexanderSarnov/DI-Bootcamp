"""
Challenge 2 : Longest Word
Instructions
Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
Examples

longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") ➞ "forever."

longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
"""

def find_longest_word(sentence):
  """
  Finds the longest word in a sentence, considering punctuation.

  Args:
      sentence: A string containing the sentence.

  Returns:
      The longest word found in the sentence, or an empty string if the input is invalid.
  """
  if not isinstance(sentence, str):
    print("Error: Invalid input. Please enter a sentence.")
    return ""

  # Split the sentence into words, preserving punctuation
  words = sentence.split()


  # Find the word with the longest length (first one in sentence if several are of the same length)
  longest_word = ""
  for word in words:
    if len(word) > len(longest_word):
      longest_word = word

  return longest_word

# Get user input for the sentence
user_sentence = input("Enter a sentence: ")

# Find and display the longest word
longest = find_longest_word(user_sentence)
if longest:
  print(f"The longest word is: {longest}")
else:
  print("No words found in the sentence.")