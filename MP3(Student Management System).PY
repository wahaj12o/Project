name = input("Enter name:")
age =  input("Enter age:")
city = input("Enter city:")
roll_no = input("Enter roll no:")

Stu_Management = [
      {
          "name" : name,
          "age" : age,
          "city" : city,
          "roll_no" : roll_no
      }
]

for s in Stu_Management:
    print(s)


# Search Roll no
search_rollno = input("search roll no:")

if(search_rollno == roll_no):
    print("name", name , "at roll_no" , roll_no)
else:
    print("invaild roll no")



# # Update
# stu1 = {"class" : 13}
# Stu_Management.append(stu1)
# print(Stu_Management)