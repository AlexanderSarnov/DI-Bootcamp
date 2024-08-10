import functools
import math

# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
my_list = [10, 20, 30, 40]
index = 2
item = 25

my_list.insert(index, item)

print(f"Exercise 1 output: This script inserted item {item} at index {index} in {my_list}\n")

# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
string_with_spaces = "A string with spaces"
count_spaces = 0

for space in string_with_spaces:
    if space == " ":
        count_spaces += 1

print(f"Exercise 2 output: There is {count_spaces} spaces in '{string_with_spaces}'\n")

# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.
string_with_lower_and_upper_case = "Hello, World!"
count_upper, count_lower = 0, 0

for char in string_with_lower_and_upper_case: # makes sure to count only letters, not white spaces or symbols
    if char.isupper():
        count_upper += 1
    elif char.islower():
        count_lower += 1

print(f"Exercise 3 output:\nIn '{string_with_lower_and_upper_case}':\nNumber of upper case letters is: {count_upper}.\nNumber of lower case letters is: {count_lower}.\n") 

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

#     >>>my_sum([1,5,4,2])
#     >>>12
def sum_array(arr):
  """Calculates the sum of elements in an array.

  Args:
    arr: The input array.

  Returns:
    The sum of the elements in the array.
  """

  total = 0
  for num in arr:
    total += num
  return total

# Example usage:
my_sum = [1, 5, 4, 2]
sum_result = sum_array(my_sum)
print("Exercise 4 output:", sum_result, "\n")  # Output: 12

# Exercise 5
# Instructions
# Write a function to find the max number in a list

#     >>>find_max([0,1,3,50])
#     >>>50
def find_max(numbers):
    max_num = max(numbers)
    return max_num

list_of_numbers = [0,1,3,50]
max_output = find_max(list_of_numbers)

print("Exercise 5 output:", max_output, "\n")  # Output: 50

# Exercise 6
# Instructions
# Write a function that returns factorial of a number

#     >>>factorial(4)
#     >>>24
def factorial(n):
  if n < 0:
    raise ValueError("Factorial is not defined for negative numbers")
  return functools.reduce(lambda x, y: x * y, range(1, n + 1), 1)

number = 4
factorial_of = factorial(number)
print("Exercise 6 output:", factorial_of, "\n")

# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):

#     >>>list_count(['a','a','t','o'],'a')
#     >>>2
def list_count(items, target):
  """Counts the occurrences of an iterable in a list (using generator expressions)

  Args:
    items: The input list.
    target: The element to count.

  Returns:
    The number of occurrences of the target element in the list of items.
  """
  return sum(1 for item in items if item == target)

letters = ['a','a','t','o']
element = 'a'

count_element = list_count(letters, element)
print("Exercise 7 output:", count_element, "\n")

# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

#     >>>norm([1,2,2])
#     >>>3
def norm(numbers):
  """Calculates the L2-norm of a list of numbers.

  Args:
    numbers: A list of numbers.

  Returns:
    The L2-norm of the list.
  """

  sum_of_squares = sum(num * num for num in numbers)
  return math.sqrt(sum_of_squares)

numbers_to_L2_norm = [1, 2, 2]
L2_norm = norm(numbers_to_L2_norm)
print("Exercise 8 output:", L2_norm, "\n")

# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)

#     >>>is_mono([7,6,5,5,2,0])
#     >>>True

#     >>>is_mono([2,3,3,3])
#     >>>True

#     >>>is_mono([1,2,0,4])
#     >>>False
def is_mono(numbers):
    """Checks if an array is monotonic (sorted either ascending or descending).
    
    Args:
      numbers: A list of numbers.
      
    Returns:
      True if the array is monotonic, False otherwise.
    """
    if len(numbers) <= 1: # edge case with array of 0 or 1 element shall always be True
        return True
    
    # initial check between the first two elements to choose version
    increasing = numbers[1] >= numbers[0] 
    decreasing = numbers[1] <= numbers[0]

    for i in range(2, len(numbers)):
        if increasing and numbers[i] < numbers[i - 1]: # check if next number is smaller than previous for ascending
            return False
    if decreasing and numbers[i] > numbers[i - 1]: # check if next number is bigger than previous for descending
        return False

    return True # if numbers maintain monotonicity returns true

numbers_1 = [7,6,5,5,2,0]
numbers_2 = [2,3,3,3]
numbers_3 = [1,2,0,4]

monotonicity_test_1 = is_mono(numbers_1)
monotonicity_test_2 = is_mono(numbers_2)
monotonicity_test_3 = is_mono(numbers_3)

print(f"Exercise 9 output:\nTest 1: Are the following numbers {numbers_1} monotonic: {monotonicity_test_1}\nTest 2: Are the following numbers {numbers_2} monotonic: {monotonicity_test_2}\nTest 3: Are the following numbers {numbers_3} monotonic: {monotonicity_test_3}\n")

# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.
def longest_word(words):
    """Finds the longest word in a list.
    
    Args:
      words: A list of words.
      
    Returns:
      The longest word in a list.
    """
    if not words:
        return None # Handle empty list
    
    longest = max(words, key=len)
    
    return longest

words_list = ["Hello", "World"]
longest_word_of_words_list = longest_word(words_list)

print(f"Exercise 10 output:\nThe longest word of the list {words_list} is {longest_word_of_words_list}\n")

# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
def split_list(items):
    ''' Splits a list into two lists, one of integers and another one of strings.
    
    Args:
        items: A list of strings and integers
        
    Returns:
        A tuple of two lists: (integers, strings)
    '''
    
    integers = []
    strings = []    
    
    for item in items:
        if isinstance(item, int):
            integers.append(item)
        else:
            strings.append(item)
            
    return integers, strings

list_to_split = [1, "a", 2, "b", 3, "c"]
integers, strings = split_list(list_to_split)

print(f"Exercise 11 output:\nFrom list {list_to_split}\nIntegers are: {integers}\nStrings are: {strings}\n")

# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:

#     >>>is_palindrome('radar')
#     >>>True

#     >>>is_palindrome('John)
#     >>>False
def is_palindrome(word):
    '''Checks if a string is a palindrome.
    
    Args:
        string: The input string.
    
    Returns:
        True if the string is a palindrome, False otherwise.
    '''
    # Remove non-alphanumeric characters and convert to lowercase
    cleaned_string = ''.join(char.lower() for char in word if char.isalnum())
    
    # Check if the cleaned string is equal to its reverse
    return cleaned_string == cleaned_string[::-1]

word_to_check = "radar"
word_is_palindrome = is_palindrome(word_to_check)

print(f"Exercise 12 output:\nIs word {word_to_check} a palindrome: {word_is_palindrome}\n")

# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:

sentence = 'Do or do not there is no try'
k=2

def sum_over_k(sentence, k):
  """Counts the number of words in a sentence with length greater than k.

  Args:
    sentence: The input sentence.
    k: The minimum word length to count.

  Returns:
    The number of words with length greater than k.
  """

  words = sentence.split()
  count = 0
  for word in words:
    if len(word) > k:
      count += 1
  return count 

words_of_k_len_and_more = sum_over_k(sentence, k)

print(f"Exercise 13 output:\nIn the sentence '{sentence}' there are {words_of_k_len_and_more} words that are longer than {k} letters\n")

# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):

#     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
#     >>>3
def dict_avg(dictionary):
  """Calculates the average value of a dictionary.

  Args:
    dictionary: A dictionary with numeric values (assumption by exercise).

  Returns:
    The average of the dictionary values.
  """

  total = sum(dictionary.values())
  count = len(dictionary)
  return total / count

dictionary = {'a': 1,'b':2,'c':8,'d': 1}
average = dict_avg(dictionary)

print(f"Exercise 14 output:\nThe average of values of dictionary {dictionary} is {average}\n")

# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:

#     >>>common_div(10,20)
#     >>>[2,5,10]

# As the common divisors of two numbers are precisely the divisors of their greatest common divisor (GCD) we will first find it and after all of its divisors
def gcd(a, b):
  """Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm."""
  while b != 0:
    a, b = b, a % b
  return a

def common_div(number_1, number_2):
  """Finds the common divisors of two numbers."""
  common_divisors = []
  gcd_value = gcd(number_1, number_2)

  for i in range(1, gcd_value + 1):
    if gcd_value % i == 0:
      common_divisors.append(i)

  return common_divisors

number_1 = 10
number_2 = 20

common_divisors = common_div(number_1, number_2)

print(f"Common divisors of {number_1} and {number_2} are {common_divisors}\n")

# Exercise 16
# Instructions
# Write a function that test if a number is prime:

#     >>>is_prime(11)
#     >>>True
def is_prime(number):
  """Checks if a number is prime.

  Args:
    num: The number to check.

  Returns:
    True if the number is prime, False otherwise.
  """
  # Handle base cases: numbers less than or equal to 1 are not prime
  if number <= 1:
    return False

  # Handle the special cases of 2 and 3, which are prime
  if number <= 3:
    return True

  # Check divisibility by 2 and 3
  if number % 2 == 0 or number % 3 == 0:
    return False
  # Check divisibility by numbers of the form 6k ± 1 up to the sqrt of the number
  i = 5
  while i * i <= number:
    if number % i == 0 or number % (i + 2) == 0:
      return False
    i += 6

  return True

number = 11

if is_prime(number):
    print(f"Exercise 16 output:\nNumber {number} is Prime\n")
else: 
    print(f"Exercise 16 output:\nNumber {number} is not Prime\n")

# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4]
def weird_print(numbers):
  """Prints elements of a list if the index and the value are even.

  Args:
    numbers: The input list.
  """

  weird_numbers = []
  for index, number in enumerate(numbers):
    if index % 2 == 0 and number % 2 == 0:
      weird_numbers.append(number)
  print(f"Exercise 17 output:\nFrom list {numbers} the weird numbers are {weird_numbers}\n")

weird_print([1,2,2,3,4,5])

# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2
def type_count(**kwargs):
  """Counts the occurrences of different data types in keyword arguments.

  Args:
    **kwargs: Arbitrary keyword arguments.

  Returns:
    A dictionary containing the count of each data type.
  """

  type_counts = {}
  for value in kwargs.values():
    data_type = type(value)
    type_counts[data_type] = type_counts.get(data_type, 0) + 1
  return type_counts

dictionary = {'a': 1, 'b': 'string', 'c': 1.0, 'd': True, 'e': False}

count_types = type_count(**dictionary)

print(f"Exercise 18 output:\n{count_types}")

# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
def my_split(string, separator=" "):
  """Mimics the built-in split function for strings.

  Args:
    string: The string to be split.
    separator: The delimiter to use for splitting. Defaults to whitespace.

  Returns:
    A list of substrings.
  """

  separated_list = []
  word = ""

  for char in string:
    if char == separator:
      separated_list.append(word)
      word = ""
    else:
      word += char

  # Append the last word if it doesn't end with a separator
  if word:
    separated_list.append(word)

  return separated_list

string_to_split = "A string to split"
separator = " "

result = my_split(string_to_split, separator)
print("Exercise 19 output:", result, "\n")

# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"
def mask_password(password):
  """Masks a password with asterisks.

  Args:
    password: The password to be masked.

  Returns:
    A string of asterisks with the same length as the password.
  """

  return "*" * len(password)

password = "mypassword"
masked_password = mask_password(password)
print("Exercise 20 output:", masked_password)