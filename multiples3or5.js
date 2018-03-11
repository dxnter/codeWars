const multiples = num => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        } else if (i % 5 === 0) {
            sum += i;
        } else if (i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
};
