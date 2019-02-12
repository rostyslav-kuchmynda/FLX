function reverseNumber (num) {
    let revNumb = parseInt(num.toString().split('').reverse().join(''));
    return revNumb * Math.sign(num);
}
reverseNumber(-123);