import psycopg2
from connection import DatabaseConnection
from location_manager import LocationManager

class FeedingInputManager:
  """Manages volunteer input for daily cat feeding data."""

  def __init__(self, connection_string):
    """Initializes the FeedingInputManager with a connection string.

    Args:
      connection_string: A string containing the PostgreSQL connection details (including password).
    """
    self.connection_string = connection_string

  def get_feeding_data(self):
    """Prompts the volunteer for feeding data and performs validation.

    Returns:
      A dictionary containing validated feeding data or None if user cancels.
    """

    try:
      # Connect to database (assuming connection.py exists)
      connection = DatabaseConnection(self.connection_string)
      connection.connect()

      # Get location choices from database (assuming location_manager.py exists)
      location_manager = LocationManager(connection)
      locations = location_manager.get_locations()
      if not locations:
        print("Error: No locations found.")
        return None

      # Display location options
      print("Available locations:")
      for i, location in enumerate(locations):
        print(f"{i+1}. {location['name']}")
      print(f"{len(locations)+1}. Cancel")

      while True:
        choice = input("Enter your choice (1-{} or {}): ".format(len(locations), len(locations)+1))
        if choice.isdigit() and 1 <= int(choice) <= len(locations) + 1:
          break
        else:
          print("Invalid choice. Please enter a number within the range.")

      if int(choice) == len(locations) + 1:
        return None  # User canceled

      location_id = locations[int(choice) - 1]['id']  # Get ID from chosen location

      # Get feeding time (morning or evening)
      feeding_time = self._get_feeding_time_choice()
      if feeding_time is None:
        return None  # User canceled input

      # Get number of food cans
      num_cans = self._get_int_input("Enter number of food cans: ")
      if num_cans is None:
        return None  # User canceled input

      # Get optional food quantity (if applicable)
      food_quantity = self._get_optional_food_quantity(feeding_time)

      # Return validated data
      return {
          "location_id": location_id,
          "feeding_time": feeding_time,
          "num_cans": num_cans,
          "food_quantity": food_quantity if food_quantity is not None else 0,  # Set 0 for non-applicable time
      }

    except (Exception, psycopg2.Error) as error:
      print(f"Error: {error}")
      return None  # Error during data retrieval

  # ... remaining methods for getting feeding time, integer input, and optional food quantity (unchanged)

def _get_feeding_time_choice():
  while True:
    choice = input("Enter feeding time (morning or evening): ").lower()
    if choice in ("morning", "evening"):
      return choice
    else:
      print("Invalid choice. Please enter 'morning' or 'evening'.")

def _get_int_input(prompt):
  while True:
    try:
      value = int(input(prompt))
      return value
    except ValueError:
      print("Invalid input. Please enter a number.")

def _get_optional_food_quantity(feeding_time):
  if feeding_time == "morning":
    choice = input("Enter food quantity (optional, leave blank for none): ")
    return None if choice.strip() == "" else float(choice)
  else:
    while True:
      try:
        value = float(input("Enter food quantity: "))
        return value
      except ValueError:
        print("Invalid input. Please enter a number.")