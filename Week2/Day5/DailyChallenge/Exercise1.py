"""
Challenge 1 : Sorting
Instructions
Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
Use List Comprehension
Example:

Suppose the following input is supplied to the program: without,hello,bag,world
Then, the output should be: bag,hello,without,world
"""
def sort_comma_separated_words(words):
  """
  Sorts a comma-separated string of words alphabetically.

  Args:
      words: A string containing comma-separated words.

  Returns:
      A string with the words sorted alphabetically and comma-separated, 
      or an empty string for invalid input.
  """
  if not isinstance(words, str):
    print("Error: Invalid input. Please enter a comma-separated list of words.")
    return ""

  # Check length without specifying limit (user-friendly)
  if len(user_input) > 1000:
    print("Error: The input you provided is too long. Please enter a shorter list of words.")
    return ""  # Return empty string for invalid input exceeding limit

  # Slice after length check to limit to 1000 symbols (corrected)
  words = words[:1000]

  # Split the comma-separated string into a list of words
  word_list = words.strip().split(",")

  # Sort the list of words using list comprehension
  sorted_words = sorted([word.strip() for word in word_list])

  # Join the sorted words into a comma-separated string
  return ",".join(sorted_words)

# Get user input for comma-separated words
user_input = input("Enter comma-separated words: ")

# Sort and display the words
sorted_string = sort_comma_separated_words(user_input)
print(f"Sorted words: {sorted_string}")
