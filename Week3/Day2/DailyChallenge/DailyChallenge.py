# Daily Challenge : Pagination

# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

class Pagination:
  """
  This class handles Pagination of a list of items.
  """

  def __init__(self, items=None, page_size=10):
    """
    Initializes the Pagination class.

    Args:
      items (list): The list of items to paginate. Defaults to None.
      page_size (int): The number of items to show in each page. Defaults to 10.
    """

    if items is None:
      self.items = []  # Empty list if items not provided
    else:
      self.items = items.copy()  # Copy to avoid modifying the original list

    self.page_size = page_size
    self.current_page = 1
    self.total_pages = self.get_total_pages()

  def get_total_pages(self):
    """
    Calculates the total number of pages based on the number of items and page size.

    Returns:
      int: The total number of pages.
    """
    if not self.items:
      return 0
    return (len(self.items) // self.page_size) + (1 if len(self.items) % self.page_size else 0)

  def get_visible_items(self):
    """
    Returns the list of items for the current page.

    Returns:
      list: A list of items for the current page.
    """
    return self.get_page(self.current_page)

  def get_page(self, page_number=None):
    """
    Fetches a specific page of items.

    Args:
      page_number (int): The page number to fetch. Defaults to None, which fetches the current page.

    Returns:
      list: A list of items for the specified page.
    """
    if page_number is None:
      page_number = self.current_page

    # Validate page number within bounds (ensure at least page 1)
    if page_number < 1:
      page_number = 1

    start_index = (page_number - 1) * self.page_size
    end_index = min(start_index + self.page_size, len(self.items))
    self.current_page = page_number
    return self.items[start_index:end_index]

  def next_page(self):
    """
    Moves to the next page if available.

    Returns:
      list: A list of items for the next page, or None if on the last page.
    """
    if self.has_next_page():
      self.current_page += 1
      return self.get_page(self.current_page)
    else:
      return None

  def has_next_page(self):
    """
    Checks if there is a next page available.

    Returns:
      bool: True if there is a next page, False otherwise.
    """
    return self.current_page < self.total_pages

# Exercise example tests
def test_pagination():
  alphabet_list = list("abcdefghijklmnopqrstuvwxyz")
  p = pagination(alphabet_list, 4)

  # Test get_visible_items on first page
  assert p.get_visible_items() == ["a", "b", "c", "d"]
  print("Test 1 passed: ", p.get_visible_items())  # Prints the results of test action for Debugging

  # Test next_page and get_visible_items
  p.next_page()
  assert p.get_visible_items() == ["e", "f", "g", "h"]
  print("Test 2 passed: ", p.get_visible_items())  # Prints the results of test action for Debugging

  # Test last_page (replaced with next_page until total pages reached)
  p.next_page()
  p.next_page()
  p.next_page()
  p.next_page()
  p.next_page()
  assert p.get_visible_items() == ["y", "z"]
  print("Test 3 passed: ", p.get_visible_items())  # Prints the results of test action for Debugging

if __name__ == "__main__":
  test_pagination() # Runs function when Run Python File is used in IDE