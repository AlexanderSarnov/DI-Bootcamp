import requests
import time

def measure_load_time(url):
  """Measures the load time of a webpage in seconds.

  Args:
    url: The URL of the webpage to measure.

  Returns:
    The load time in seconds.
  """

  start_time = time.time()
  response = requests.get(url)
  end_time = time.time()

  load_time = end_time - start_time

  return load_time

# Example usage
urls = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com", "https://youtube.com/"]

for url in urls:
  load_time = measure_load_time(url)
  print(f"Load time for {url}: {load_time:.2f} seconds")