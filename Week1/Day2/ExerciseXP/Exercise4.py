"""
Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

Use another way to generate a sequence of floats
"""


start_value = 1.5
end_value = 5
step_value = 0.5
list_range = int(((end_value - start_value) * step_value) + 1)

# creating a list using list comprehension
floats_list = [int(start_value + i * step_value) if (start_value + i * step_value).is_integer() else (start_value + i * step_value) for i in range(list_range)]

print("The resulting list:",floats_list)