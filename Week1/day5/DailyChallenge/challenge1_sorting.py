def sort_words(words_string):
  """Sorts words in a comma-separated string alphabetically and returns a sorted string."""
  words_list = words_string.split(",") # Create a list from a comma-separated string
  sorted_words = sorted(word for word in words_list)  # List comprehension for sorting a list of words
  sorted_string = ",".join(sorted_words) # Create a comma-separated string of words from a list
  return sorted_string

# Get user input
user_input = input("Enter comma-separated words: ")

# Sort and format user input
sorted_output = sort_words(user_input)

print(sorted_output)