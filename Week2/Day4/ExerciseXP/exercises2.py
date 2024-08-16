import json

# Sample JSON string
sample_json = """{ 
  "company":{ 
    "employee":{ 
      "name":"emma",
      "payable":{ 
        "salary":7000,
        "bonus":800
      }
    }
  }
}"""

# Load the JSON string into a Python dictionary
data = json.loads(sample_json)

# Access the nested "salary" key
salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

# Add a new key "birth_date" with an empty value
data["company"]["employee"]["birth_date"] = None

# Save the modified dictionary as JSON to a file
with open("sample.json", "w") as outfile:
    json.dump(data, outfile, indent=4)  # Indent for readability

# Print the modified JSON with indentation
print("JSON data after modification:")
print(json.dumps(data, indent=4)) 