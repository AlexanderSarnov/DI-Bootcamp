"""
Exercise 7: Favorite Fruits
Instructions
Ask the user to input their favorite fruit(s) (one or several fruits).
Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
Store the favorite fruit(s) in a list (convert the string of words into a list of words).
Now that we have a list of fruits, ask the user to input a name of any fruit.
If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
"""
# Get user's favorite fruits (as a string) and converts it to lower case for future comparison.
favorite_fruits_str = input("Enter your favorite fruit(s) separated by spaces (e.g., apple mango cherry): ").lower

# Convert the string of fruits to a list.
favorite_fruits_list = favorite_fruits_str.split()


# Get the user's chosen fruit and converts it to lower case for future comparison.
chosen_fruit = input("Enter the name of a fruit: ").lower

# Check if the chosen fruit is in the favorites list.
if chosen_fruit in favorite_fruits_list:
  print("You chose one of your favorite fruits! Enjoy!")
else:
  print("You chose a new fruit. I hope you enjoy!")