import random


class Game:
    """
    Represents a Rock-Paper-Scissors game.
    """

    def __init__(self):
        self.choices = ["rock", "paper", "scissors"]

    def get_user_item(self):
        """
        Asks the user for their choice (rock, paper, scissors) and validates it.

        Returns:
            str: The user's chosen item.
        """
        while True:
            user_item = input("Enter your choice (rock, paper, scissors): ").lower()
            if user_item in self.choices:
                return user_item
            else:
                print("Invalid choice. Please enter rock, paper, or scissors.")

    def get_computer_item(self):
        """
        Selects a random item (rock, paper, scissors) for the computer.

        Returns:
            str: The computer's chosen item.
        """
        return random.choice(self.choices)

    def get_game_result(self, user_item, computer_item):
        """
        Determines the winner of the game based on user and computer choices.

        Args:
            user_item (str): The user's chosen item.
            computer_item (str): The computer's chosen item.

        Returns:
            str: "win", "draw", or "loss" depending on the game result.
        """
        # Tie conditions
        if user_item == computer_item:
            return "draw"

        # Winning conditions for user
        if user_item == "rock" and computer_item == "scissors":
            return "win"
        elif user_item == "paper" and computer_item == "rock":
            return "win"
        elif user_item == "scissors" and computer_item == "paper":
            return "win"

        # Loss for user (all other cases)
        return "loss"

    def play(self):
        """
        Plays a single game of Rock-Paper-Scissors.

        Returns:
            str: "win", "draw", or "loss" depending on the game result.
        """
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()

        print(f"You selected {user_item}. The computer selected {computer_item}.")
        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            print("You win!")
        elif result == "draw":
            print("You drew!")
        else:
            print("You lose.")

        return result

