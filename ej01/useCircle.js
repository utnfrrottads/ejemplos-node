let Circle= require('./circle.js');
let geom= require ('./geometry.js');

let circle1= new Circle(3);
console.log(circle1.radius);
console.log(circle1.perimeter());
console.log(circle1.area());

 let circle2= new geom.Circle(4);
 console.log(circle2.radius);
 console.log(circle2.perimeter);
 console.log(circle2.area);

 let rectangle=new geom.Rectangle(2,3);
 console.log(rectangle.perimeter());
 console.log(rectangle.area());

 let square=new geom.Square(2);
 console.log(square.perimeter());
 console.log(square.area());
