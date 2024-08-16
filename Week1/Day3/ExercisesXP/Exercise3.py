"""
Exercise 3: Zara
Instructions
Here is some information about a brand.
name: Zara 
creation_date: 1975 
creator_name: Amancio Ortega Gaona 
type_of_clothes: men, women, children, home 
international_competitors: Gap, H&M, Benetton 
number_stores: 7000 
major_color: 
    France: blue, 
    Spain: red, 
    US: pink, green


2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
3. Change the number of stores to 2.
4. Print a sentence that explains who Zaras clients are.
5. Add a key called country_creation with a value of Spain.
6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
7. Delete the information about the date of creation.
8. Print the last international competitor.
9. Print the major clothes colors in the US.
10. Print the amount of key value pairs (ie. length of the dictionary).
11. Print the keys of the dictionary.
12. Create another dictionary called more_on_zara with the following details:

creation_date: 1975 
number_stores: 10 000


13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
14. Print the value of the key number_stores. What just happened ?
"""

# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values). The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
brand = {
    "name": "Zara",
    "creation_date": 1975, 
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 3. Change number of stores
brand["number_stores"] = 2

# 4. Print a sentence that explains who Zaras clients are.
zara_clients = "#4: Zara targets a broad customer base, offering apparel for men, women, and children."
print(zara_clients)

# 5. Add country_creation
brand["country_creation"] = "Spain"

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
international_competitors = brand.get("international_competitors")
if international_competitors:
    international_competitors.append("Desigual")
    # Print competitors (updated)
    print(f"#6: International Competitors updated:", ', '.join(international_competitors))

# 7. Delete creation date
del brand["creation_date"]

# 8. Last international competitor
print(f"#8: Zara's last added international competitor is {international_competitors[-1]}.")

# 9. Major clothes colors in US
us_colors = brand["major_color"]["US"]
print(f"#9: Major clothes colors in US for Zara are: {', '.join(us_colors)}.")

# 10. Key-value pair count
num_key_value_pairs = len(brand)
print(f"#10: Zara dictionary has {num_key_value_pairs} key-value pairs.")

# 11. Print keys
print(f"#11: Keys of the Zara dictionary: {', '.join(brand.keys())}")

# 12. Create another dictionary called more_on_zara
more_info = {
    "number_stores": 10000
}

# 13. Add information using update method
brand.update(more_info)

# 14. Print number of stores (updated)
print(f"#14: Total number of stores for Zara: {brand['number_stores']}")