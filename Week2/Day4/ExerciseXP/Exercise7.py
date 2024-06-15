"""
Exercise 7 : Temperature Advice
Instructions
Create a function called get_random_temp().
This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
Test your function to make sure it generates expected results.

Create a function called main().
Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
between 16 and 23
between 24 and 32
between 32 and 40

Change the get_random_temp() function:
Add a parameter to the function, named ‘season’.
Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
Now that we’ve changed get_random_temp(), let’s change the main() function:
Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
Use the season as an argument when calling get_random_temp().

Bonus: Give the temperature as a floating-point number instead of an integer.
Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
"""

import random

def get_random_temp(season):
  """Generates a random temperature based on the provided season.

  Args:
      season: The season (winter, spring, summer, autumn).

  Returns:
      A random floating-point temperature within the given range for the season.
  """

  # Set temperature ranges based on season
  if season.lower() == "winter":
    lower_limit = -10.0
    upper_limit = 16.0
  elif season.lower() in ("spring", "autumn"):
    lower_limit = 16.0
    upper_limit = 23.0
  elif season.lower() == "summer":
    lower_limit = 24.0
    upper_limit = 40.0
  else:
    raise ValueError("Invalid season. Please restart the program.")

  # Generate a random temperature within the range
  return round(random.uniform(lower_limit, upper_limit), 1)  # Round to one decimal place

def main():
  """Gets a random temperature based on season and provides user advice."""

  # Get user input for the season
  while True:
    season = input("Enter the season (winter, spring, summer, or autumn): ")
    if season.lower() in ("winter", "spring", "summer", "autumn"):
      break
    else:
      print("Invalid season. Please try again.")

  # Get random temperature based on season
  temperature = get_random_temp(season)

  # Display temperature and advice message
  print(f"The temperature right now is approximately {temperature} degrees Celsius.")

  # Provide advice based on temperature range
  if temperature < 0:
    print("Brrr, that's freezing! Wear some extra layers today.")
  elif temperature < 16:
    print("Quite chilly! Don't forget your coat.")
  elif temperature < 23:
    print("Pleasant weather. A light jacket might be nice.")
  elif temperature < 32:
    print("Warm weather. Enjoy the sunshine!")
  else:
    print("It's hot out there! Stay hydrated and limit outdoors physical activities.")

# Run the main function
if __name__ == "__main__":
  main()