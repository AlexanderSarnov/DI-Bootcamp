"""
Exercise 3: String Module
Instructions
Generate random String of length 5
Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
Hint: use the string module
"""

import random # Import random module to randomize string
import string # Import string module

# Define the character set for the random string
letters = string.ascii_letters

# Generate a random string of length 5
random_string = ''.join(random.choice(letters) for _ in range(5))

# Print the generated string
print(f"Random string (uppercase and lowercase letters): {random_string}")