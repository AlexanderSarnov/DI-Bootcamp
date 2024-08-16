import psycopg2


class LoginManager:
  """Manages user login functionality."""

  def __init__(self, connection_string):
    """Initializes the LoginManager with a connection string.

    Args:
      connection_string: A string containing the PostgreSQL connection details (including password).
    """
    self.connection_string = connection_string

  def login(self, username, password):
    """Attempts to login a user based on username and password (plain text - NOT RECOMMENDED).

    Args:
      username: The username entered by the user.
      password: The password entered by the user (plain text).

    Returns:
      A boolean indicating successful login (True) or failure (False).
    """

    try:
      connection = psycopg2.connect(self.connection_string)
      cursor = connection.cursor()

      # Prepare query to retrieve password for the user
      cursor.execute("SELECT user_password FROM volunteers WHERE user_name = %s", (username,))
      user_data = cursor.fetchone()

      connection.commit()  # Commit the query

      if user_data:
        stored_password = user_data[0]  # Assuming user_password is the last column

        # Compare plain text passwords
        return password == stored_password
      else:
        return False  # User not found

    except Exception as error:
      print(f"Error during login: {error}")
      return False  # Login failed due to error
    finally:
      if connection:
        connection.close()


# Example usage (replace with your actual connection details)
connection_string = f"host=localhost port=5432 dbname=cat_care_db user=postgres password=1488"

# Create LoginManager instance
login_manager = LoginManager(connection_string)

# Example login attempt
username = input("Enter username: ")
password = input("Enter password: ")

if login_manager.login(username, password):
  print("Login successful!")
else:
  print("Invalid username or password.")