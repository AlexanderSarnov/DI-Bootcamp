# The task of the exercise
"""
1. Create a set called my_fav_numbers with all your favorites numbers.

2. Add two new numbers to the set.

3. Remove the last number.

4. Create a set called friend_fav_numbers with your friend’s favorites numbers.

5. Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

"""
# Create a set called my_fav_numbers with my favorite numbers
my_fav_numbers = {0, 1, 99, 98}  

# Add two new numbers to the set (using update for efficiency)
two_new_numbers = {2, 97}
my_fav_numbers.update(two_new_numbers)
print("Updated my_fav_numbers:", my_fav_numbers)

# Remove the last element from the set (sets are unordered, so we can't remove the last element)
removed_number = my_fav_numbers.pop()  # Removes and returns an arbitrary element
print("Removed number:", removed_number)
print("Updated my_fav_numbers after removal:", my_fav_numbers)

# Create a set called friend_fav_numbers with your friend's favorite numbers
friend_fav_numbers = {1, 5, 9, 98} 

# Concatenate (combine) my_fav_numbers and friend_fav_numbers into a new set called our_fav_numbers
# Sets don't support concatenation. Instead use the union method to combine them. Thus repeating numbers won't appear twice as per set definition
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Combined our_fav_numbers:", our_fav_numbers)
