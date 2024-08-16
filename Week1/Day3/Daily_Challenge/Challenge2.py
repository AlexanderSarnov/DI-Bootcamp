"""
Challenge 2
Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
Sort the list in alphabetical order.
Return “Nothing” if you can’t afford anything from the store.
Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

Examples

The key is the product, the value is the price

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

➞ ["Bread", "Fertilizer", "Water"]

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# instead you can by the Spoon that is $2

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

➞ "Nothing"
"""

def affordable_items(items_purchase, wallet):
  """
  Creates a list of affordable items from a store based on wallet amount,
  prioritizing buying the most items possible.

  Args:
      items_purchase: A dictionary where keys are product names and values are prices as strings.
      wallet: Your wallet amount as a string (e.g., "$300").

  Returns:
      A list of affordable item names (sorted alphabetically) or "Nothing" if nothing is affordable.
  """

  # Clean wallet amount (remove symbols and convert to float)
  wallet_amount = float(wallet.strip("$").replace(",", ""))

  # Clean and convert item prices (with temporary list)
  items_with_prices = []
  for item, price_str in items_purchase.items():
    price = float(price_str.strip("$").replace(",", ""))
    items_with_prices.append((item, price))

  # Sort temporary list by price (ascending) using lambda (interestingly, I didn't manage to avoid error without lambda for sorting it)
  items_with_prices.sort(key=lambda x: x[1])  # Sort by price (index 1)

  # Reassign items and prices to maintain order
  affordable_items = []
  current_amount = wallet_amount
  for item, price in items_with_prices:
    if price <= current_amount:
      affordable_items.append(item)
      current_amount -= price
    else:
      break  # Stop adding items if exceeding budget

  # Sort affordable items alphabetically
  affordable_items.sort()

  # Return result
  return affordable_items if affordable_items else "Nothing"

# Example usage
items_purchase1 = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet1 = "$300"

items_purchase2 = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
wallet2 = "$100"

items_purchase3 = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}
wallet3 = "$1" 

print(affordable_items(items_purchase1, wallet1))  # Output: ["Bread", "Fertilizer", "Water"]
print(affordable_items(items_purchase2, wallet2))  # Output: ["Apple", "Bananas", "Fan", "Honey", "Spoon"]
print(affordable_items(items_purchase3, wallet3))  # Output: Nothing