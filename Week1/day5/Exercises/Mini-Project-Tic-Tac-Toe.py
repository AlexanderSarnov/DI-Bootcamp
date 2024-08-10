playerSymbol = "X" # initiate player with symbol X to have first move
winner = None # initiate end game condition

# !Functions
def createBoard():
  """
  Creates an empty 3x3 Tic-Tac-Toe board.

  Returns:
    A 3x3 list representing the empty board.
  """
  return [[' ' for _ in range(3)] for _ in range(3)]

def printBoard(board):
  """
  Prints the current state of the Tic-Tac-Toe board.

  Args:
    board: A 3x3 list representing the game board.
  """

  print("*****************") # top border
  print(f"*   {board[0][0]} | {board[0][1]} | {board[0][2]}   *") # first row
  print("*  ---|---|---  *") # inner border 1
  print(f"*   {board[1][0]} | {board[1][1]} | {board[1][2]}   *") # second row
  print("*  ---|---|---  *") # inner border 2
  print(f"*   {board[2][0]} | {board[2][1]} | {board[2][2]}   *") # third row
  print("*****************") # bottom border

def printTurn(playerSymbol):
  """Prints a message indicating whose turn it is."""
  print(f"Player {playerSymbol}'s turn...")

def userMove(board, playerSymbol):
  """
  Handles user input for a Tic-Tac-Toe move.

  Args:
    board: A 3x3 list representing the game board.
    playerSymbol: The symbol of the current player ('X' or 'O').

  Returns:
    True if the move was successful, False otherwise.
  """

  move = input("Enter your move (1-9, numeration starts at the top left corner): ")

  try:
    move = int(move)
    if 1 <= move <= 9:
      row = (move - 1) // 3
      col = (move - 1) % 3
      if board[row][col] == ' ':
        board[row][col] = playerSymbol
        return True
      else:
        print("That space is already taken.")
        return False
    else:
      print("Invalid input. Please enter a number between 1 and 9.")
  except ValueError:
    print("Invalid input. Please enter a number.")

def checkForWinningCondition(board, playerSymbol):
    """
  Checks for a win condition in a Tic-Tac-Toe game.

  Args:
    board: A 3x3 list representing the game board.
    playerSymbol: The symbol of the current player ('X' or 'O').

  Returns:
    The symbol of the winning player ('X', 'O'), 'Tie' if there's a tie, or None if no winner yet.
  """
    # Check Rows (using list comprehension and all function)
    for row in board:
        if all(cell == playerSymbol for cell in row):
            return playerSymbol
       
    # Check Columns (using list comprehension and all function)
    for col in range(3): # iterates through indeces 0-2
        if all(row[col] == playerSymbol for row in board):
            return playerSymbol
    
    # Check Diagonals (straightforward approach)
    # Check the main diagonal (top-left to bottom-right)
    if board[0][0] == playerSymbol and board[1][1] == playerSymbol and board[2][2] == playerSymbol:
        return playerSymbol

    # Check the other diagonal (top-right to bottom-left)
    if board[0][2] == playerSymbol and board[1][1] == playerSymbol and board[2][0] == playerSymbol:
        return playerSymbol
    
    # Check for a tie (using list comprehension method to flatten the board into a single list and then check if there are any empty spaces)
    if all(cell != " " for row in board for cell in row):
        return "Tie"
    
    return None # No winner yet
         

# !Main Program
board = createBoard() # calls create board fuction
printBoard(board) # initial state of game - prints empty board

# Game Loop (ctrl+c to interrupt the endless loop)
while winner == None:
    """
  Game loop continues until there's a winner or a tie.
  """
    printTurn(playerSymbol)
    
    if userMove(board, playerSymbol):
        # Print the updated board
        printBoard(board)

        # Check for the win or tie
        winner = checkForWinningCondition(board, playerSymbol)
    
        # Switch player only if the move was successful and there is no winner yet
        playerSymbol = "O" if playerSymbol == "X" else "X"

# End game conditions        
if winner == "Tie":
    print("Tie game!")
else:
    print(f"Player '{winner}' has won the game!")