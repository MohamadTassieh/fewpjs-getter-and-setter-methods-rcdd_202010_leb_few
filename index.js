// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
get diameter(){
  return this.raddius * 2;
}
get area(){
  return Math.PI * this.radius * this.radius;
}
get circumference(){
    return this.radius *2 * Math.PI;
  }
}
