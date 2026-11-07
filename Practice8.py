# Practice Q1
# class Student:
#     def __init__(self , name , marks):
#       self.name = name # object attribute precidence > class attribute
#       self.mark = marks


#     def get__avg(self):
#         sum = 0
#         for val in self.mark:
#             sum += val
#         print("hi" , self.name , "your average score is" , sum/3) 

# s1 = Student("wahaj" , [97 , 95 , 98])
# # print(s1.name , s1.mark)
# s1.get__avg()

# Practice Q2

class Account:

   def __init__(self , bal , acc):
      self.balance = bal
      self.account = acc

   def debit(self , amount):
      self.balance -= amount
      print("Rs." , amount , "was debited")
      print("Total Balance" , self.get_balance())

   def credit(self , amount):
         self.balance += amount
         print("Rs." , amount , "was credited") 
         print("Total Balance" , self.get_balance())

   def get_balance(self):
       return self.balance  
         


acc1 = Account(10000 , 197635)
acc1.debit(1000)
acc1.credit(500)
