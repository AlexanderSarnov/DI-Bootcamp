import random
import datetime
import psycopg2

def populate_feeding_archive(connection_string, sample_data):
  """Populates a sample feeding archive with pre-generated data.

  Args:
    connection_string: A string containing the PostgreSQL connection details (including password for demonstration).
    sample_data: A list of lists, where each inner list represents a row of data to be inserted.
  """

  try:
    connection = psycopg2.connect(connection_string)
    cursor = connection.cursor()

    # Insert all sample data in one execution
    cursor.executemany("""
      INSERT INTO daily_feeding_archive (
        feeding_date,
        morning_feeding_time,
        evening_feeding_time,
        volunteer_name,
        stray_cat_location_id,
        food_provided,
        morning_food_quantity,
        evening_food_quantity,
        notes,
        archived_on
      )
      VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, sample_data)

    connection.commit()
    print("Sample data successfully populated!")

  except Exception as error:
    print("Error populating data:", error)
  finally:
    if connection:
      connection.close()
      print("Database connection closed.")

# Replace with your actual connection details (including password)
connection_string = f"host=localhost port=5432 dbname=cat_care_db user=postgres password=your_actual_password"

def generate_random_time(start_hour=0, end_hour=23, minutes=0):
  """Generates a random time within the specified hour range (inclusive) and optional minute offset.

  Args:
    start_hour: The starting hour (inclusive) for the random time (default 0).
    end_hour: The ending hour (inclusive) for the random time (default 23).
    minutes: The optional number of minutes to offset the generated time (default 0).

  Returns:
    A datetime.time object representing the randomly generated time.
  """

  hour = random.randint(start_hour, end_hour)
  minute = minutes
  return datetime.time(hour=hour, minute=minute)

volunteers = ["1", "2", "3", "4", "5"]
locations = ["1", "2", "3"]

# Sample data (replace with this logic)
sample_data = []

for day in range(6):  # Loop for 6 days
  feeding_date = datetime.date.today() - datetime.timedelta(days=day)
  for _ in range(5):  # Loop to generate 5 entries per day
    # Generate random data for each entry (adjust as needed)
    random_volunteer_index = random.randint(0, len(volunteers) - 1)
    random_location_index = random.randint(0, len(locations) - 1)
    morning_feeding_time = generate_random_time(start_hour=6, end_hour=9)
    evening_feeding_time = generate_random_time(start_hour=18, end_hour=23)
    morning_food_quantity = random.randint(2, 5)
    evening_food_quantity = random.randint(2, 5)

    # Append a single entry with generated data
    sample_data.append((
      feeding_date,
      morning_feeding_time,
      evening_feeding_time,
      volunteers[random_volunteer_index],
      locations[random_location_index],
      "Wet Food",  # Replace with your desired food type
      morning_food_quantity,
      evening_food_quantity,
      "Sample notes for feeding",
      datetime.datetime.now()
    ))

populate_feeding_archive(connection_string, sample_data)