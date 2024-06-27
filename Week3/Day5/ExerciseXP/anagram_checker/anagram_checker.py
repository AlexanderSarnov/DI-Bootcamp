import collections


class AnagramChecker:
    def __init__(self):
        """
        Loads the word list from the "words_list.txt" file.

        Raises:
            FileNotFoundError: If the word list file is not found.
        """
        self.wordlist = set()
        try:
            with open("words_list.txt", "r") as file:
                for line in file:
                    word = line.strip().lower()  # Convert to lowercase and remove whitespace
                    self.wordlist.add(word)
        except FileNotFoundError:
            print("Error: Word list file not found.")
            raise  # Re-raise the exception for the calling program to handle

    def is_valid_word(self, word):
        """
        Checks if the given word is present in the loaded word list.

        Args:
            word (str): The word to check for validity.

        Returns:
            bool: True if the word is in the word list, False otherwise.
        """
        return word.lower() in self.wordlist

    def is_anagram(self, word1, word2):
        """
        Checks if two words are anagrams.

        Args:
            word1 (str): The first word to compare.
            word2 (str): The second word to compare.

        Returns:
            bool: True if the words are anagrams, False otherwise.
        """
        return collections.Counter(word1.lower()) == collections.Counter(word2.lower())

    def get_anagrams(self, word):
        """
        Finds all anagrams for the given word from the loaded word list.

        Args:
            word (str): The word to find anagrams for.

        Returns:
            list: A list of anagrams for the given word, or an empty list if none are found.
        """
        anagrams = []
        for w in self.wordlist:
            if self.is_anagram(word, w) and word != w:  # Exclude the word itself
                anagrams.append(w)
        return anagrams