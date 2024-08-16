import psycopg2
from connection import DatabaseConnection

class LocationManager:
  """Manages retrieval of location data."""

  def __init__(self, connection_string):
    """Initializes the LocationManager with a connection string.

    Args:
      connection_string: A string containing the PostgreSQL connection details (including password).
    """
    self.connection_string = connection_string
    self.db_connection = DatabaseConnection(connection_string)

  def get_locations(self):
    """Fetches available locations from the database.

    Returns:
      A list of dictionaries containing location details (id and name) or an empty list if none found.
    """

    locations = []
    try:
      self.db_connection.connect()
      cursor = self.db_connection.connection.cursor()

      cursor.execute("SELECT id, name FROM stray_cats_locations")
      rows = cursor.fetchall()

      for row in rows:
        locations.append({"id": row[0], "name": row[1]})

      return locations

    except (Exception, psycopg2.Error) as error:
      print(f"Error fetching locations: {error}")
      return []  # Empty list on error

    finally:
      self.db_connection.close()