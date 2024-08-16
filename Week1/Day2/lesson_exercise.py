list1 = [5, 10, 15, 20, 25, 50, 20]

# for element in range(len(list1)):
#  if list1[element] == 20:
#   list1[element] *= 10
#   break
 
# print(list1)

# for element, value in enumerate(list1):
#  if value == 20:
#   list1[element] *= 10
#   break
 
# print(list1)

location_20 = list1.index(20)

list1[location_20] *= 10

print(list1)