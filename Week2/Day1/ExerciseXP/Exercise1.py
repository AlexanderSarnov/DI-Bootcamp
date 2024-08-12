from typing import List # for type hints

'''
Exercise 1: Cats
Instructions
Using this class
'''
# Given class
class Cat:
    def __init__(self, cat_name: str, cat_age: int):
        self.name = cat_name
        self.age = cat_age

'''
Instantiate three Cat objects using the code provided above.
Outside of the class, create a function that finds the oldest cat and returns the cat.
Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
'''
def find_oldest_cat(cats: List[Cat]) -> Cat:
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

# Initialize 3 Cat objects
cat1 = Cat("Whiskers", 7)
cat2 = Cat("Shadow", 14)
cat3 = Cat("Luna", 21)

oldest_cat = find_oldest_cat([cat1, cat2, cat3])

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")