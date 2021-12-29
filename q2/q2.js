const PI = 3.14

class Circle{
          constructor(r){
             this.r = r 
          }
          getArea(){
              return `Area: ${PI * (this.r**2)}`
          }
          getPerimeter(){
              return `Permiter: ${2 *PI * this.r}`
          }

}

let circy = new Circle(11)
console.log(circy.getArea())
//___________________________
circy = new Circle(4.44)
console.log(circy.getPerimeter())