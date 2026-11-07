# Dictionary

# Info = {
   
#   "name" : "Wahaj Nabi",
#   "cgpa" : 98,
#   "subjects" : ["Eng" , "Urdu" , "Math"],
#   "Age" : 19

# }

# print(Info["name"])
# print(Info["cgpa"])
# print(Info["subjects"])


# Null_Dic = {}
# Null_Dic["name"] = "Ali"
# print(Null_Dic)


# Nested Dic

# Dic = {
#     "Name" : "Wahaj Nabi",
#     "Age" : 19,
#     "Subjects":{
#         "Eng": 98,
#         "Isl": 95,
#         "Math": 97
#     }
# }

# print(Dic["Subjects"]["Eng"])



# Dict Methods

Dic = {
    "Name" : "Wahaj Nabi",
    "Age" : 19,
    "Subjects":{
        "Eng": 98,
        "Isl": 95,
        "Math": 97
    }
}

pairs = list(Dic.items())
print(pairs[0])


# Update method

# Dic = {
#     "Name" : "Wahaj Nabi",
#     "Age" : 19,
#     "Subjects":{
#         "Eng": 98,
#         "Isl": 95,
#         "Math": 97
#     }
# }

# new_Dic = {"city" : "Karachi"}
# Dic.update(new_Dic)
# print(Dic)

# Dic.update({"city" : "karachi"})
# print(Dic)



# Sets

# sets = {1 , 2 , 2 , 2, "Hello" , "World" , 5}  # store unique values
# print(sets)
# print(len(sets))


# collection = {} // syntax is for dictionary
# print(type(collection))

# collection = set() # empty set
# print(type(collection))



# Methods OF sets
# Sets are mutable
# But its elements are immutable

# Set = {1 , 2 , 3 , 4}
# Set.add(5)
# Set.add(6)
# Set.remove(6)
# Set.add((6 , 7 , 8 , 9 , 10)) # Tuple
# Set.clear()
# print(Set)

#hashable => immutable values
# It is a specific method or algorithm that change original value and convert it into another type
# Inko ek dafa value assign kardi tou unki values change nahi hote 


# collect = {"hello" , "apna" , "college" , "world" , "coding"}
# print(collect.pop())
# print(collect.pop())



# set1 = {1 , 2 , 3 }
# set2 = {2 , 3 , 4 }
# print(set1.union(set2))
# print(set1.intersection(set2))