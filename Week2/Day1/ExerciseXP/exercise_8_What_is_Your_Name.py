"""
Instructions
Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
"""
# declare my name for the future comparison
my_name = "Alexander"

# convert input into string for the later comparison
user_name = str(input("Please enter your name: "))

if my_name.lower() == user_name.lower():
    print(f"Funny message: @{user_name}, you happened to share a name with me! My name is: @{my_name}!")
else:
    print(f"Hello, @{user_name}, it's a pleasure to meet you. My name is @{my_name}") 