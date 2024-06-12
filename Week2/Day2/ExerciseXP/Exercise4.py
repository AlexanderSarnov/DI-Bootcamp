"""
Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

Use another way to generate a sequence of floats
"""

# Define sequence by it's parameters
start_value = 1.5
end_value = 5
step_value = 0.5
list_range = int(((end_value - start_value) / step_value) + 1)

# Generate the sequence of floats using list comprehension
floats_list = [start_value + i * step_value for i in range(list_range)]

# Convert elements to integers if they have no decimal part
result_list = [int(num) if num % 1 == 0 else num for num in floats_list]

print("The resulting list:", result_list)

"""
Other ways to generate sequence without hardcoding numbers
will require using numpy or itertools libraries, 
or I don't understand the task proprly.
 
Since we didn't cover the topic of libraries, 
I assume I misunderstand something here.
"""