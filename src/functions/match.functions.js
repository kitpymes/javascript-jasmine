function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return !isEven(number);
}

function sum(numbers) {
    if (!numbers) {
        throw new Error("Parameter [numbers] should be NULL.");
    }
    if (numbers.length) {
        var sum = 0;
        for (var idx = 0; idx < numbers.length; ++idx) {
            sum += numbers[idx];
        }
        return sum;
    }
    return 0;
}


module.exports = {
    isEven: isEven,
    isOdd: isOdd,
    sum: sum
};