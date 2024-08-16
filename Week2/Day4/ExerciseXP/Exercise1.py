import random


def get_words_from_file(filename):
    """
    Reads words from a file and returns them as a list.

    Args:
        filename (str): The name of the file containing the words.

    Returns:
        list: A list of words from the file, or an empty list if there's an error.
    """

    words = []
    try:
        with open(filename, "r") as file:
            # Read all lines from the file and strip leading/trailing whitespace
            for line in file:
                words.append(line.strip())
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    return words


def get_random_sentence(length, words):
    """
    Generates a random sentence with the specified length using words from the list.

    Args:
        length (int): The desired length of the sentence (number of words).
        words (list): A list of words to choose from.

    Returns:
        str: A random sentence with the specified length, or an empty string if there's an error.
    """

    if length < 2 or length > 20:
        raise ValueError("Sentence length must be between 2 and 20 words.")

    # Select random words from the list
    random_words = random.sample(words, length)

    # Join the words with spaces and lowercase the sentence
    sentence = " ".join(random_words).lower()

    return sentence


def main():
    """
    Prompts the user for sentence length, validates input, generates and prints the random sentence.
    """

    print("Welcome to the Random Sentence Generator!")

    while True:
        try:
            # Get user input with validation
            length = int(input("Enter desired sentence length (2-20 words): "))
            if length not in range(2, 21):
                raise ValueError
            break  # Exit loop if valid input received
        except ValueError:
            print("The input must be a number between 2 and 20. Please try again.")
            exit(1) # Exit program with code 1

    # Take words from file saved in exerciseXP directory
    filename = "sowpods.txt"
    words = get_words_from_file(filename)

    if words:  # Check if words were successfully retrieved from the file
        random_sentence = get_random_sentence(length, words)
        print(f"Your random sentence is: {random_sentence}")
    else:
        print("Error: Unable to generate sentence (word list might be empty).")


if __name__ == "__main__":
    main()