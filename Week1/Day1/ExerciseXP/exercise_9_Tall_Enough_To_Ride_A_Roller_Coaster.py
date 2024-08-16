"""
Instructions
Write code that will ask the user for their height in centimeters.
If they are over 145cm print a message that states they are tall enough to ride.
If they are not tall enough print a message that says they need to grow some more to ride.
"""
hight_lower_limit = float(145)

while True:
  try:
    user_height = float(input("Please enter your height in centimeters: "))
    break # Exit the loop if input is valid (float)
  except ValueError:
    print("Invalid input. Please enter an integer number (whole or decimal number).")

grow_required = hight_lower_limit - user_height
if user_height < hight_lower_limit:
    print(f"Your height is below {hight_lower_limit}cm, you are not tall enough. You need to grow some more to ride: {grow_required}cm")
else:
    print("You are tall enough to ride")
