const PI=3.14

class Circle {
  constructor (radius){
    this.radius=radius;
  }

  get radius() {return this.__radius;}
  set radius(radius) {this.__radius=radius;}

  get perimeter() {return 2 * PI * this.radius;}

  get area() {return PI * (Math.pow(this.radius,2));}

}

class Rectangle{
  constructor(base, height){
    this.base=base;
    this.height=height;
  }

  perimeter() {return 2*(this.base+this.height);}

  area() {return this.base*this.height}
}

class Square extends Rectangle {
  constructor(side){
    super(side,side);
  }
}

module.exports={PI: PI, Circle: Circle, Rectangle: Rectangle, Square: Square};
