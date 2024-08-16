import datetime
import psycopg2
import logging

# Configure logging (optional, adjust log level as needed)
logging.basicConfig(level=logging.INFO)

def transfer_and_clear_feeding_data(connection_string):
  """Transfers data from daily_feeding to daily_feeding_archive and clears daily_feeding.

  Args:
    connection_string: A string containing the PostgreSQL connection details (including password).
  """

  try:
    connection = psycopg2.connect(connection_string)
    cursor = connection.cursor()

    # Fetch data from daily_feeding (modify query if needed)
    cursor.execute("SELECT * FROM daily_feeding")
    feeding_data = cursor.fetchall()

    # Prepare insert statement for daily_feeding_archive
    insert_stmt = """
      INSERT INTO daily_feeding_archive (
        feeding_date,
        morning_feeding_time,
        evening_feeding_time,
        volunteer_id,  -- Assuming volunteer_id exists in daily_feeding_archive
        stray_cat_location_id,
        food_provided,
        morning_food_quantity,
        evening_food_quantity,
        notes,
        archived_on
      )
      VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    # Insert data into daily_feeding_archive
    cursor.executemany(insert_stmt, feeding_data)

    # Clear daily_feeding table (consider backup strategy if needed)
    cursor.execute("DELETE FROM daily_feeding")

    connection.commit()

    logging.info(f"Successfully transferred {len(feeding_data)} feeding entries to archive and cleared daily_feeding table.")

  except Exception as error:
    logging.error(f"Error transferring and clearing data: {error}")
    # Consider rolling back the insert operation if an error occurs during deletion
    connection.rollback()
  finally:
    if connection:
      connection.close()
      logging.info("Database connection closed.")

# Replace with your actual connection details (including password)
connection_string = f"host=localhost port=5432 dbname=cat_care_db user=postgres password=1488"

transfer_and_clear_feeding_data(connection_string)