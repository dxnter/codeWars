const getCount = str => {
    let vowels = /[aeiou]/gi, count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowels)) {
            count++;
        }
    }
    return count;
};