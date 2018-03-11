const countSheeps = arr => {
    let sheepCount = 0;
    for (let sheep of arr) {
        if (sheep) {
            sheepCount++;
        }
    }
    return sheepCount;
};

