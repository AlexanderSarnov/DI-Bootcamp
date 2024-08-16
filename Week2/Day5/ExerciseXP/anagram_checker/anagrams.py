from anagram_checker import AnagramChecker


def main():
    """
    The main program loop that handles user interaction and anagram checking.
    """

    checker = AnagramChecker()  # No need to pass the word list file explicitly

    while True:
        print("\nAnagram Checker")
        print("1. Enter a word")
        print("2. Exit")
        choice = input("Enter your choice (1/2): ")

        if choice == "1":
            word = input("Enter your word: ").strip().lower()
            if " " in word:
                print("Error: Only a single word is allowed.")
                continue
            if not word.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"\nYOUR WORD: '{word.upper()}'")
                print(f"This is a valid English word.")
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}")
                else:
                    print("No anagrams found for your word.")
            else:
                print(f"'{word}' is not a valid English word.")

        elif choice == "2":
            print("Exiting program.")
            break

        else:
            print("Invalid choice. Please enter 1 or 2.")


if __name__ == "__main__":
    main()