class Circle {
  constructor (radius){
    this.radius=radius;
    this.PI=3.14;
  }

  perimeter() {return 2 * this.PI * this.radius;}

  area() {return this.PI * (Math.pow(this.radius,2));}

}

module.exports=Circle;
