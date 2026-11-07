# class Student:
#     #  college_name = "Bahria"
#     #  name = "anonymous"
#      def __init__(self , Fullname , marks):
#       self.name = Fullname # object attribute precidence > class attribute
#       self.marks = marks

#      def welcome(self):
#        print("welcome students" , self.name)
      
#      def get_marks(self):
#       return self.marks

# s1 = Student("wahaj" , 97)
# print(s1.name , s1.marks)
# s1.welcome()
# print(s1.get_marks())
 

# s2 = Student("kashan" , 95)
# print(s2.name , s2.marks) 


# class Car:
#     color = "blue"
#     brand = "mercedes"

# c1 = Car()
# print(c1.color) 
# print(c1.brand)   


# OOPS Pilar
# 1) Abstraction (hide unnecessary details)

class Car:
   def __init__(self):
      self.acc = False,
      self.brk = False,
      self.clutch= False

   def start(self):
      self.clutch = True,
      self.acc = True
      print("car started..")

car1 = Car()
car1.start()         