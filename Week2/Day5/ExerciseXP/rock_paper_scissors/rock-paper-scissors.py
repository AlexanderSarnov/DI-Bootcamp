from game import Game  # Import the Game class

def get_user_menu_choice():
    """
    Displays a menu and gets the user's choice (play, show scores, quit).

    Returns:
        str: The user's menu choice.
    """
    while True:
        choice = input("Enter your choice (p)lay, (s)how scores, or (q)uit: ").lower()
        if choice in ("p", "s", "q"):
            return choice
        else:
            print("Invalid choice. Please enter p, s, or q.")


def print_results(results):
    """
    Prints a summary of the game results.

    Args:
        results (dict): A dictionary containing the game results (wins, losses, draws).
    """
    print("\nGame Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")


def main():
    """
    The main program loop that handles the game menu and results.
    """
    game_results = {"win": 0, "loss": 0, "draw": 0}  # Track game results

    while True:
        choice = get_user_menu_choice()

        if choice == "p":
            game = Game()
            result = game.play()
            game_results[result] += 1  # Update game results

        elif choice == "s":
            print_results(game_results)

        elif choice == "q":
            print_results(game_results) # Display game results before exiting game
            print("Exiting game.")
            break  # Exit the main loop

if __name__ == "__main__":
    main()