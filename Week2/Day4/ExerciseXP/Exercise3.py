"""
Exercise 3 : Some Geography
Instructions
Write a function called describe_city() that accepts the name of a city and its country as parameters.
The function should print a simple sentence, such as "<city> is in <country>".
For example “Reykjavik is in Iceland”
Give the country parameter a default value.
Call your function.
"""
def describe_city(city, country="Iceland"):
  """Prints a message about a city and its country. With default county Iceland."""
  print(f"{city} is in {country}.")

# Call the function with a city name and country (optional)
describe_city("Reykjavik")  # Using default country "Iceland"
describe_city("Tokyo", "Japan")  # Using another country and city