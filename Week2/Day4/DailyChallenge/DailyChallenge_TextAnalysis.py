# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. 
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
from collections import Counter
import string
from nltk.corpus import stopwords

class Text:
    def __init__(self, text: str) -> None:
        self.text = text
        
# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
    def words_frequency(self, word: str) -> int:
        """Calculates the frequency of a given word in the text.

        Args:
            word: The word to count.

        Returns:
            The frequency of the word in the text.
        """
        
        words = self.text.lower().split()
        return words.count(word.lower())
    
# a method that returns the most common word in the text.
    def most_frequent(self) -> str:
        """Returns the most common word in the text.

        Returns:
            The most common word.
        """

        word_counts = Counter(self.text.lower().split())
        return word_counts.most_common(1)[0][0]
        
# a method that returns a list of all the unique words in the text.
    def words_list(self) -> list:
        """Returns the list of all the unique words in the text (set of words).

        Returns:
            The list of all the uniqe words in the text (set of words).
        """
        words = self.text.lower().split()
        return list(set(words))

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:
#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
    @classmethod
    def from_file(cls, filename: str) -> 'Text':
        """Creates a Text instance from a file.

        Args:
            filename: The path to the file.

        Returns:
            A Text instance containing the file's content.
        """

        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)
    
# a method that returns the text without any punctuation.    
    def remove_punctuation(self) -> str:
        """Removes punctuation from the text.

        Returns:
            The text without punctuation.
        """
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)
    
# a method that returns the text without any english stop-words (check out what this is !!).
    def remove_stop_words(self) -> str:
        """Removes English stop words from the text.

        Returns:
            The text without stop words.
        """
        stop_words = set(stopwords.words('english'))
        words = self.text.lower().split()
        filtered_words = [word for word in words if word not in stop_words]
        return ' '.join(filtered_words)

# a method that returns the text without any special characters.
    def remove_special_characters(self) -> str:
        """Removes special characters from the text.

        Returns:
            The text without special characters.
        """
        allowed_chars = string.ascii_letters + string.digits + ' '
        return ''.join(char for char in self.text if char in allowed_chars)

# Now, use the provided the_stranger.txt file and try using the class you created above.
if __name__ == "__main__":
    text_obj = Text.from_file('the_stranger.txt')
    
# Testing different methods
    print("Most frequent word:", text_obj.most_frequent())
    print("Text without punctuation:", text_obj.remove_punctuation()[:50])  # Print first 50 characters
    print("Text without stop words:", text_obj.remove_stop_words()[:50])  # Print first 50 characters
    print("Text without special characters:", text_obj.remove_special_characters()[:50]) # Print first 50 characters