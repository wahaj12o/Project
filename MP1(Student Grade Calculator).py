# Student Grade Calculator

name = input("Enter your name:")
sub1 = int(input("Enter your English marks:")) 
sub2 = int(input("Enter your Physics marks:")) 
sub3 = int(input("Enter your Computer marks:")) 
sub4 = int(input("Enter your Maths marks:")) 

total = sub1 + sub2 + sub3 + sub4
percentage = (total/400)*100

if(percentage >= 90):
    grade = "A+"
elif(percentage >= 80 and percentage < 90):
    grade = "A"
elif(percentage >= 70 and percentage < 80):
    grade = "B+"
elif(percentage >= 60 and percentage < 70):
    grade = "B"
elif(percentage >= 50 and percentage < 60):
    grade = "C"
else:
    grade = "Fail"

print("\n name:" , name , "\n percentage:" , percentage , "\n grade:" , grade)