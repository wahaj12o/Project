# Store following word meaning in a dictionary
# Dic = {
#     "table": ["a piece of furniture  , list of facts & figure"] ,
#     "cat" : "a small animal"
# } 

# print(Dic["table"])


# You are given a list of subjects for students. Assume one classroom is required for 1 subject. How many classrooms are needed by all students.

# set = {"python" , "java" , "c++" , "python" , "javascript" , "java" , "python" , "java" , "c++" , "c"}
# print(len(set))



# WAP to enter marks of 3 subjects from the user and store them in a dictionary. Start with an empty dictionary & add one by one. Use subject name as key & marks as value

# user1 = input("Enter Eng Marks:")
# user2 = input("Enter Math Marks:")
# user3 = input("Enter Urdu Marks:")

# dic = {}

# # dic ["Eng"] = user1
# # dic ["Math"] = user2
# # dic ["Urdu"] = user3

# dic.update({"Eng": user1})
# dic.update({"Math": user2})
# dic.update({"Urdu": user3})

# print(dic)


# Figure out a way to store 9 and 9.0 as separate values in set.(You can use built-in data types)
values = {
    ("float" , 9.0),
    ("int" , 9)
}
print(values)
