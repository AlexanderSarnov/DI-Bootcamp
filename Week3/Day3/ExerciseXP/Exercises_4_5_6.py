import datetime
from datetime import datetime, timedelta, date


def get_current_date():
  """Returns the current date in YYYY-MM-DD format."""
  today = date.today()
  return today.strftime("%Y-%m-%d")

def get_time_left_until_jan_1st_2025():
  """Calculates and returns a formatted string representing the time left until January 1st of the year 2025. It is too complex task to do it for any given year within this course.

  - Considers the current date and time (the year is 2024).

  Returns:
      A string representing the time left until January 1st, 2025.
  """
  now = datetime.now()

  # Ensure the current year is 2024 (assuming this is the intended scenario)
  if now.year != 2024:
    raise ValueError("This function is designed for the year 2024. Please adjust the code if needed.")

  new_years_day = datetime(2025, 1, 1)  # January 1st of 2025

  time_left = new_years_day - now
  days_left = time_left.days
  hours_left = time_left.seconds // 3600  # Convert seconds to hours (assuming non-leap year)
  minutes_left = (time_left.seconds % 3600) // 60

  return f"Time left until January 1st, 2025: {days_left} days, {hours_left} hours, {minutes_left} minutes"

def approximate_minutes_lived(birthdate_str):
  """Calculates the approximate number of minutes lived based on a given birthdate string.

  Args:
      birthdate_str: A string representing the birthdate in a chosen format ( YYYY-MM-DD).

  Returns:
      An integer representing the approximate number of minutes lived.
  """
  try:
    # Attempt to convert the birthdate string to a datetime object
    birthdate = date.fromisoformat(birthdate_str)
  except ValueError:
    raise ValueError("Invalid birthdate format. Please use YYYY-MM-DD.")

  today = date.today()
  time_lived = today - birthdate
  minutes_lived = time_lived.days * 24 * 60  # Approximate assuming non-leap years
  return minutes_lived

# Example Usage
# Exercise 4
current_date_str = get_current_date()
print(f"Current date: {current_date_str}")

# Exercise 5
time_left_str = get_time_left_until_jan_1st_2025()
print(time_left_str)

# Exercise 6
birthdate_str = "1987-12-11"  # Birthdate in YYYY-MM-DD format
try:
  minutes_lived = approximate_minutes_lived(birthdate_str)
  print(f"You have lived approximately {minutes_lived} minutes.")
except ValueError as e:
  print(e)