class Circle:
    def __init__(self , circle , radius):
        self.circle = circle
        self.radius = radius

    def Area(self):
        area = 3.142 * self.radius * self.radius
        print(area)


area1 = Circle(8 , 2)
area1.Area()

        
        
             
