function getAreaOfRectangle (width,length) {
    const area = width * length;
    console.log(area);
    return area;
}

const area = getAreaOfRectangle(5,10);
console.log(area);

function getAreaOfCircle (radius) {
    const area = 3.14 * radius**2;
    return area;
}

const circle = getAreaOfCircle(6);
console.log(circle);

function getCircumferenceOfCircle (radius) {
    const circumference = 3.14 * radius * 2;
    return circumference;
}

const circumference = getCircumferenceOfCircle(10);
console.log(circumference);

function getAreaOfSquare (side) {
    const area = side * side;
    return area;
}

const square = getAreaOfSquare(4);
console.log(square);

function getAreaOfTriangle (base, height) {
    const area = .5 * base * height;
    return area;
}

const triangle = getAreaOfTriangle(3,6);
console.log(triangle);
