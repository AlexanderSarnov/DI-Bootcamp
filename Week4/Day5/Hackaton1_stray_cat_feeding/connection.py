import psycopg2

class DatabaseConnection:
  """Provides a connection to the PostgreSQL database."""

  def __init__(self, connection_string):
    """Initializes the DatabaseConnection with the connection string.

    Args:
      connection_string: A string containing the PostgreSQL connection details (including password).
    """
    self.connection_string = connection_string
    self.connection = None

  def connect(self):
    """ Establishes a connection to the database. """
    try:
      self.connection = psycopg2.connect(self.connection_string)
    except Exception as error:
      print(f"Error connecting to database: {error}")

  def close(self):
    """Closes the connection to the database if open."""
    if self.connection:
      self.connection.close()