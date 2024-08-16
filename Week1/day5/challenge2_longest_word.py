def longest_word(sentence):
  """Finds the longest word in a sentence. If two or more words are found, returns the first longest word.
  Characters such as apostrophe, comma, period count as part of the word (e.g. O'Connor is 8 characters long)."""
  words_list = sentence.split(" ")
  sorted_words = sorted(words_list, key=len, reverse=True) # Sorting words by length in descending order (thus the longest word will be the first item in the list)
  return sorted_words[0]  # Return the first (longest) word

user_input = input("Enter a sentence: ")

longest = longest_word(user_input)
print(longest)