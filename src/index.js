
exports.min = function min (array) {
    //if (array.isEmpty()){
        let min = array.length;
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    //} else {
    //    return 0;
    //}
}

exports.max = function max (array) {
    //if (array.isEmpty()){
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
    //}
    //else {
    //     return 0;
    //}
}

exports.avg = function avg (array) {
    //if (array.isEmpty()){
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    avg /= array.length;
    return avg;
    //}
    //else {
    //    return 0;
    //}
}

