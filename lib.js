function sum(numbers) {
    /*
    let s = 0;
    for (let i = 0; i < numbers.length; i++){s += numbers[i];}
    return s;
    */
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
function max(numbers) {
    /*
    let s = numbers[0];
    for (let i = 1; i < numbers.length; i++){if (s < numbers[i]){s = numbers[i];}}
    return s;
    */
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

// exports.sum = sum; exports.avg = avg; exports.max = max;

module.exports = {
    sum,
    avg,
    max,
};
    