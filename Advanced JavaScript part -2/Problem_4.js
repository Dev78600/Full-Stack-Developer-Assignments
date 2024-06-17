class Shape {
    draw() {
        console.log('Drawing shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing rectangle');
    }
}

const circle = new Circle();
circle.draw();

const rectangle = new Rectangle();
rectangle.draw();
