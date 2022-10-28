// Mathematical shapes
const findDiagonal = a => a * Math.sqrt(2);

const areaTriangleDiffSides = (a, b, c) => {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
};

const findCircumAreaCircle = radius => {
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius ** 2;
    return {circumference, area};
};

console.log(findDiagonal(2));
console.log(areaTriangleDiffSides(5, 6, 7));
console.log(findCircumAreaCircle(4));

// Conditional statements and loops
const largerOfTwo = (a, b) => a > b ? a : b;

const evenOrOdd = a => a % 2 === 0 ? 'even' : 'odd';

console.log(largerOfTwo(1, 3));
console.log(evenOrOdd(2));