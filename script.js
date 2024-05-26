let result = document.getElementById("result");
function triangleArea(){
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;
    const area = (0.5 * base * height);
    result.innerHTML = `The area of triangle is: ${area}cm²`;
}
function circleArea(){
    const radius = document.getElementById("radius").value;
    const area = (Math.PI * (radius ** 2));
    result.innerHTML = `The area of circle is: ${area}cm²`;
}
function addTwoNum(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const sum = Number(num1) + Number(num2);
    result.innerHTML = `The sum of those numbers is: ${sum}`;
}
function subTwoNum(){
    const subnum1 = document.getElementById("subnum1").value;
    const subnum2 = document.getElementById("subnum2").value;
    const sub = Number(subnum1) - Number(subnum2);
    result.innerHTML = `The subtraction of those numbers is: ${sub}`;
}
function mulTwoNum(){
    const mulnum1 = document.getElementById("mulnum1").value;
    const mulnum2 = document.getElementById("mulnum2").value;
    const mul = Number(mulnum1) * Number(mulnum2);
    result.innerHTML = `The multiplication of those numbers is: ${mul}`;
}
function divTwoNum(){
    const divnum1 = document.getElementById("divnum1").value;
    const divnum2 = document.getElementById("divnum2").value;
    const div = Number(divnum1) / Number(divnum2);
    result.innerHTML = `The Division of those numbers is: ${div}`;
}
function interest(){
    const cost = document.getElementById("fnum").value;
    const sell = document.getElementById("snum").value;
    let profit = (sell - cost) / cost * 100;
    let limitProfit = profit.toFixed(3);
    result.innerHTML = `The interest: ${limitProfit}%`;
}
function remainder(){
    const divident = document.getElementById("divident").value;
    const divisor = document.getElementById("divisor").value;
    const reamainder = Number(divident) % Number(divisor);
    result.innerHTML = `The remainder is: ${reamainder}`;
}
function far2cels(){
    const far = document.getElementById("far").value;
    const cels = (5/9 * (Number(far)- 32)).toFixed(4);
    result.innerHTML = `${Number(far)}° Fahrenheit = ${cels}° Celsius`;
}
function cels2far(){
    const cels = document.getElementById("cels").value;
    const far = (cels * (9/5) + 32).toFixed(4);
    result.innerHTML = `${Number(cels)}° Celsius = ${far}° Fahrenheit`;
}
function rectangleArea(){
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
    const area = length * width;
    result.innerHTML = `The area of rectangle is: ${area}cm²`;
}
function squareArea(){
    const arm = document.getElementById("arm").value;
    const area = arm ** 2;
    result.innerHTML = `The area of square is: ${area}cm²`;
}
function parallelogramArea(){
    const base = document.getElementById("para-base").value;
    const height = document.getElementById("para-height").value;
    const area = base * height;
    result.innerHTML = `The area of Parallelogram is: ${area}cm²`;
}
function rhombusArea(){
    const diagon1 = document.getElementById("diagon").value;
    const diagon2 = document.getElementById("diagon-2").value;
    const area = (0.5 * diagon1 * diagon2);
    result.innerHTML = `The area of Rhombus is: ${area}cm²`;
}
function trapezoidArea(){
    const baseA = document.getElementById("base-a").value;
    const baseB = document.getElementById("base-b").value;
    const height = document.getElementById("theight").value;
    const area = (1/2 * (baseA + baseB) * height);
    result.innerHTML = `The area of Trapezoid is: ${area}cm²`;
}
function ellipseArea(){
    const major = document.getElementById("major").value;
    const minor = document.getElementById("minor").value;
    const area = (Math.PI * major * minor);
    result.innerHTML = `The area of Ellipse is: ${area}cm²`;
}
function cubeArea(){
    const arm = document.getElementById("carm").value;
    const area = 6 * arm ** 2;
    result.innerHTML = `The area of Cube is: ${area}cm²`;
}