"""
Instructions
Given a “Matrix” string:

    7ii
    Tsx
    h%?
    i #
    sM 
    $a 
    #t%
    ^r!


The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
A grid means that you could potentially break it into rows and columns, like here:

7	i	i
T	s	x
h	%	?
i		#
s	M	
$	a	
#	t	%
^	r	!


Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
To reproduce the grid, the matrix should be a 2D list, not a string



To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

Using his technique, try to decode this matrix.

Hints:
Use
● lists for storing data
● Loops for going through the data
● if/else statements to check the data
● String for the output of the secret message
"""

def decode_matrix(matrix_string):
  """
  Decodes a hidden message from a matrix string.

  Args:
      matrix_string: A string representing the matrix in multiple rows.

  Returns:
      The decoded message as a string.
  """
  # Split the matrix string into rows
  rows = matrix_string.strip().splitlines()  # Remove leading/trailing whitespaces and split

  # Get the number of columns (if all rows are of the same length)
  num_cols = len(rows[0])

  # Create an empty 2D list to store the characters as a matrix
  matrix = []
  for _ in range(num_cols):
    matrix.append([])

  # Transpose the matrix (rows become columns)
  for row in rows:
    for col_idx, char in enumerate(row):
      matrix[col_idx].append(char)

  # Decode the message by reading columns and joining alpha characters
  decoded_message = ""
  for col in matrix:
    # Initialize flag to track encountering an alpha character
    in_word = False
    word = ""
    for char in col:
      if char.isalpha():
        in_word = True
        word += char
      elif in_word:  # Append space after encountering a non-alpha character within a word
        decoded_message += word + " "
        word = ""
        in_word = False
    # Add the last word if it exists
    if in_word:
      decoded_message += word

  return decoded_message.strip()  # Remove leading/trailing spaces

# Example matrix string
matrix_string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

# Decode the message and display the result
decoded_message = decode_matrix(matrix_string)
print(f"Decoded message: {decoded_message}")