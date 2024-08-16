"""
Challenge 2
Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
Examples

user's word : "ppoeemm" ➞ "poem"

user's word : "wiiiinnnnd" ➞ "wind"

user's word : "ttiiitllleeee" ➞ "title"

user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
Notes
Final strings won’t include words with double letters (e.g. “passing”, “lottery”).
"""

def remove_consecutive_duplicates(word):
  """Removes consecutive duplicate letters from a string.

  Args:
      word: The string to process (limited to 100 symbols).

  Returns:
      A new string with consecutive duplicate letters removed, or an empty string for invalid input.
  """
  if not isinstance(word, str):
    print("Error: Invalid input. Please enter a string.")
    return ""  # Return empty string for non-string input
  elif len(word) > 100:
    print("Error: Input exceeds 100 symbols. Please try again.")
    return ""  # Return empty string for invalid input

  result = ""
  prev_char = None
  for char in word:
    if char != prev_char:
      result += char
    prev_char = char
  return result

# Get user input for the word (limited to 100 symbols)
while True:
  user_word = input("Enter a word (maximum 100 symbols): ")
  if len(user_word) <= 100:
    user_word = user_word[:100]  # Slice after length check to avoid memory overload
    break  # Exit loop if input length is valid
  else:
    print("Error: Input exceeds 100 symbols. Please try again.")

# Remove consecutive duplicates and display the result
duplicate_letters_removed = remove_consecutive_duplicates(user_word)
print(f"Original word: {user_word}, Unique word: {duplicate_letters_removed}")