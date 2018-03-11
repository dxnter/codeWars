const getMiddle = str => {
    let middle = str.length / 2;
    let newStr = '';
    if (str.length % 2 === 0) {
        newStr += str.charAt(middle - 1) + str.charAt(middle);
    } else {
        newStr += str.charAt(middle);
    }
    return newStr;
};

console.log(getMiddle('testing'));
