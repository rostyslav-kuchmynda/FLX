// Your code goes here
let a_val = parseFloat(prompt("Enter value for A", ""));
let b_val = parseFloat(prompt("Enter value for B", ""));
let c_val = parseFloat(prompt("Enter value for C", ""));

let discriminant;
let x1;
let x2;

if (isNaN(a_val) || isNaN(b_val) || isNaN(c_val)) {
    alert("Invald input data");
} else {
    discriminant = b_val * b_val - 4 * (a_val * c_val);

    if (discriminant < 0) {
        alert("no solution");
    } else if (discriminant === 0) {
        x1 = -b_val / (2 * a_val);
        alert("x1 = " + x1);
    } else {
        x1 = -b_val + Math.sqrt(discriminant) / (2 * a_val);
        x2 = -b_val - Math.sqrt(discriminant) / (2 * a_val);
        alert('x1 = ' + x1 + ', x2 = ' + x2);
    }
}