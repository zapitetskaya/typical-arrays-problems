exports.min = function min(array) {
    if (typeof array !== 'undefined') {
        let min = array.length;
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined') {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined') {
        if (array.length === 0) {
            return 0;
        }
        else {
        let avg = 0.0;
        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        avg /= array.length;
        return avg;
        }
    }
    return 0;
}

