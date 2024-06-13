"""
Exercise 4 : Disney Characters
Instructions
Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
Analyse these results :

#1/

>>> print(disney_users_A)
{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/

>>> print(disney_users_B)
{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ 

>>> print(disney_users_C)
{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
Only recreate the 1st result for:
The characters, which names contain the letter “i”.
The characters, which names start with the letter “m” or “p”.
"""

disney_users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Task 1: Name-Index Pairs
disney_users_A = {}
for i in range(len(disney_users)):
    user_name = disney_users[i]
    disney_users_A[user_name] = i

print(disney_users_A)  # Output: {'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}
print()

# Task 2: Index-Name Pairs
disney_users_B = {}
for i in range(len(disney_users)):
    disney_users_B[i] = disney_users[i]

print(disney_users_B)  # Output: {0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}
print()

# Task 3: Index-Name Pairs (Alphabetical Sorting)
disney_users_sorted = sorted(disney_users)  # Sort the list alphabetically
disney_users_C = {user: disney_users_sorted.index(user) for user in disney_users_sorted}

print(disney_users_C)  # Output: {'Ariel': 0, 'Donald': 1, 'Mickey': 2, 'Minnie': 3, 'Pluto': 4}

# Task 4: Only recreate the 1st result for:

# Task 4.1: Characters with "i" in their names

# Filter users with "i" (List Comprehension, case insensitive)
users_with_i = [user for user in disney_users if 'i' in user.lower()]

# Task 4.1: Result (Dictionary Comprehension)
result_i = {user: disney_users.index(user) for user in users_with_i if 'i' in user.lower()}

print(f"\nThe characters, which names contain the letter “i”: {', '.join([f'{k}:{v}' for k, v in result_i.items()])}")

# Task 4.2: Characters starting with "m" or "p"

# Filter users starting with "m" or "p" (List Comprehension, case insensitive)
users_with_m_or_p = [user for user in disney_users if user[0].lower() in ('m', 'p')]

# Task 4.2: Result (Dictionary Comprehension)
result_m_or_p = {user: disney_users.index(user) for user in users_with_m_or_p if user[0].lower() in ('m', 'p')}

print(f"\nThe characters, which names start with the letter “m” or “p”: {', '.join([f'{k}:{v}' for k, v in result_m_or_p.items()])}")