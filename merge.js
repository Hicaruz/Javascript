function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.round((array.length / 2));
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    const sorted = [];
    while (left && left.length > 0 && right && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat(left, right);
}

console.log(mergesort([234, 526, 6, 3, 2, 5]));