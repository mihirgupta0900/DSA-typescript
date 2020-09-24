var unsortedArr = [5, 4, 90, 54, 6, 2, 32];
var bubbleSort = function (arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
};
var sortedArr = bubbleSort(unsortedArr);
console.log(sortedArr);
