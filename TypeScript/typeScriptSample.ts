class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getDist() {
        return Math.sqrt(this.x * this.x +
        this.y * this.y);
    }
}
var p = new Point(3,4);
var dist = p.getDst();
alert("Hypotenuse is: " + dist);
