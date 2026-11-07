# class Student:
#     def __init__(self , name):
#         self.name = name

# s1 = Student("wahaj")
# print(s1.name)
# del s1.name
# print(s1.name)


# Private
# class Person:
#     __name = "anonymous"

#     def __hello(self):
#         print("hello person")

#     def welcome(self): # internal unction will access the hello function
#          self.__hello()

# p1 = Person()
# print(p1.welcome())    # kisi cheez ko aap nai private banadiya tou usko access sirf internal functions kar sakte hai class kai bahir access nahi karsakte        


# Inheritance

# Single Inheritance
# class Car:
#     # color = "blue"
#     def __init__(self , type):
#         self.type = type

#     @staticmethod
#     def start():
#         print("Car Started..")

#         @staticmethod
#         def stop():
#             print("Car stopped..")


# class ToyotaCar(Car):
#     def __init__(self, name , type):
#         super().__init__(type)
#         self.name = name
#         super().start()
        

# # car1 = ToyotaCar("fortuner")
# car1 = ToyotaCar("prius" , "electric")
# print(car1.type)

# print(car1.color)

# # Multi Inheritance
# class Fortuner(ToyotaCar):
#     def __init__(self, type):
#        self.type = type


# car1 = Fortuner("diesel")
# car1.start()


# Multiple Inheritance
# class A:
#     varA = "welcome to class A"

# class B:
#     varB = "welcome to class B"

# class C(A , B):
#     varC = "welcome to class C"

# c1 = C() 

# print(c1.varC)
# print(c1.varB)
# print(c1.varA)


# Class Method

# class Student:
#     name = "anonymous"

#     @classmethod
#     def changeName(cls , name):
#         cls.name = name

# s1 = Student()
# s1.changeName("Ali")
# print(s1.name)   


# @Property

# class Student:
#     def __init__(self , phy , chem , math):
#         self.phy = phy
#         self.chem = chem
#         self.math = math
#         # self.percentage = str((self.phy + self.chem + self.math) / 3) + "%"

#     @property
#     def percentage(self):
#         return str((self.phy + self.chem + self.math) / 3) + "%"



# s1 = Student(98 , 95 , 98)
# print(s1.percentage)

# s1.phy = 86
# print(s1.percentage)



# Polymorphism

class Complex:
    def __init__(self, real , img):
        self.real = real
        self.img = img

    def showNumber(self):
        print(self.real ,"i +" , self.img,"j")


    def __add__(self , num2):
        newReal = self.real + num2.real
        newImg = self.img + num2.img
        return Complex(newReal , newImg)




num1 = Complex(1 , 2)
num1.showNumber()         

num2 = Complex(3 , 4)
num2.showNumber()

num3 = num1 + num2
num3.showNumber()