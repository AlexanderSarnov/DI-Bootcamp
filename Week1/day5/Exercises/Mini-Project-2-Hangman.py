import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

### YOUR CODE STARTS FROM HERE ###

# !Core Game Logic
def draw_hangman(incorrect_guesses):
  hangman_stages = [
    """
    _________
    |
    |
    |
    |
    |
    ----
    """,
    """
    _________
    |        |
    |        O
    |
    |
    |
    ----
    """,
    """
    _________
    |        |
    |        O
    |        |
    |
    |
    ----
    """,
    """
    _________
    |        |
    |        O
    |       /|
    |
    |
    ----
    """,
    r"""
    _________
    |        |
    |        O
    |       /|\
    |
    |
    ----
    """,
    r"""
    _________
    |        |
    |        O
    |       /|\
    |       /
    |
    ----
    """,
    r"""
    _________
    |        |
    |        O
    |       /|\
    |       / \
    |
    ----
    """
  ]
  
  print(hangman_stages[incorrect_guesses]) 

def check_guess(guess, word):
  """Checks if the guessed letter is in the word.

  Args:
    guess: The letter guessed by the player.
    word: The actual word to be guessed.

  Returns:
    True if the guess is correct, False otherwise.
  """

  return guess in word

def update_display(guess, word, display):
  """Updates the display of the word based on the guessed letter.

  Args:
    guess: The letter guessed by the player.
    word: The actual word to be guessed.
    display: The current display of the word, containing underscores and guessed letters.

  Returns:
    The updated display.
  """

  for index, letter in enumerate(word):
    if letter == guess:
      display[index] = letter

  return display

def check_win_condition(display):
  """Checks if the player has won the game.

  Args:
    display: The current display of the word, containing underscores and guessed letters.

  Returns:
    True if the player has won, False otherwise.
  """

  return '_' not in display
    
def check_lose_condition(incorrect_guesses, max_guesses):
  """Checks if the player has lost the game.

  Args:
    incorrect_guesses: The number of incorrect guesses made by the player.
    max_guesses: The maximum number of allowed incorrect guesses.

  Returns:
    True if the player has lost, False otherwise.
  """

  return incorrect_guesses >= max_guesses

# !Game Flow and User Interaction
def play_game(wordlist):
  # Game setup
  display = ["_" for _ in word]
  incorrect_guesses = 0
  max_guesses = 6

  while True:
    # Display game state
    draw_hangman(incorrect_guesses)
    print(display)

    # Get user input
    guess = get_user_input()

    # Check guess
    if check_guess(guess, word):
      update_display(guess, word, display)
      if check_win_condition(display):
        print("You win!")
        break
    else:
      incorrect_guesses += 1
      if check_lose_condition(incorrect_guesses, max_guesses):
        draw_hangman(incorrect_guesses)  # Draw the final hangman state
        print("You lose! The word was:", word)
        break

def get_user_input():
  while True:
    guess = input("Guess a letter: ").lower()
    if len(guess) == 1 and guess.isalpha():
      return guess
    else:
      print("Invalid input. Please enter a single letter.")

def display_game_over(win):
  if win:
    print("Congratulations! You won!")
  else:
    print("Game over!")
    
# !Main
def main():
    play_game(wordslist)

if __name__ == "__main__":
    main()