"""
Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

Remove “Banana” from the list.
Remove “Blueberries” from the list.
Add “Kiwi” to the end of the list.
Add “Apples” to the beginning of the list.
Count how many apples are in the basket.
Empty the basket.
Print(basket)
"""
# setting the basket list with the default values
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Here is our fruit basket:", basket)

# removing value "Banana" from the basket list using remove() method
basket.remove("Banana")
print("There are no Bananas in basket:", basket)

# removing value "Blueberries" from the basket list using remove() method
basket.remove("Blueberries")
print("There are no Blueberries in basket:", basket)

# adding "Kiwi" to the end of the list using append() method
basket.append("Kiwi")
print("Added Kiwi to basket:", basket)

# adding "Apples" to the beginning of the list using insert() method
basket.insert(0,"Apples")
print("Basket is now with more apples:", basket)

# count how many "Apples" are in the basket using for loop and an extra variable apple_count to store the result
apple_count = 0

for fruit in basket:
    if fruit == "Apples":
        apple_count += 1

print("Number of apples:", apple_count)

# emptying the basket using clear() method
basket.clear()
print("Basket is now empty:", basket)