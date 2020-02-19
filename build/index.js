"use strict";
// Binary Search
// O(log n)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var binarySearch = function (array, item) {
    var low = 0;
    var high = array.length - 1;
    while (low <= high) {
        var mid = Math.round((low + high) / 2);
        var guess = array[mid];
        if (guess === item) {
            return mid;
        }
        if (guess < item) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return null;
};
// Selection sort
var findSmallest = function (array) {
    var smallestNumber = array[0];
    var smallestIndex = 0;
    for (var i = 1; i < array.length; i++) {
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
var selectionSort = function (list) {
    var array = __spreadArrays(list);
    var newArr = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        newArr = __spreadArrays(newArr, array.splice(findSmallest(array), 1));
    }
    return newArr;
};
// Recursion
var countDown = function (i) {
    console.log(i);
    if (i <= 1) {
        return;
    }
    else {
        setTimeout(function () {
            countDown(i - 1);
        }, 1000);
    }
};
var factorial = function (i) {
    if (i === 1)
        return 1;
    else {
        return i * factorial(i - 1);
    }
};
// Exercises 4.1 - 4.4
var arraySum = function (array) {
    if (array.length === 1) {
        return array[0];
    }
    else {
        return array.shift() + arraySum(array); // !!!
    }
};
var itemsSum = function (array) {
    if (array[0] === undefined) {
        return 0;
    }
    else {
        array.shift();
        return 1 + itemsSum(array);
    }
};
var popArr = function (index, arr) {
    arr.splice(index, 1);
    return arr;
};
// Biggest number in the array (version 1)
var maxNumber = function (array) {
    if (array.length === 2) {
        return array[0] > array[1] ? array[0] : array[1];
    }
    else {
        return array[0] > array[1]
            ? maxNumber(popArr(1, array))
            : maxNumber(popArr(0, array));
    }
};
// Biggest number in the array (version 2)
var maxNumber2 = function (array) {
    if (array.length === 2) {
        return array[0] > array[1] ? array[0] : array[1];
    }
    else {
        var subMax = maxNumber(array);
        popArr(0, array);
        return array[0] > subMax ? array[0] : subMax;
    }
};
// Binary search with recursion
//Dropped array from the beginning
var droppedArray = function (list, n) {
    var array = __spreadArrays(list);
    array.splice(0, n);
    return array;
};
//Dropped array from the end
var droppedRightArray = function (list, n) {
    var array = __spreadArrays(list);
    array.splice(n);
    return array;
};
var rBinarySearch = function (list, item) {
    var array = __spreadArrays(list);
    var len = array.length - 1;
    var mid = Math.round(len / 2);
    if (array.length === 1) {
        if (array[0] !== item) {
            return -2;
        }
        return 0;
    }
    else {
        return item >= array[mid]
            ? mid + rBinarySearch(droppedArray(array, mid), item)
            : rBinarySearch(droppedRightArray(array, mid), item);
    }
};
var unsortedArray = [2, 12, 1, 33, 56, 21, 4, 6, -1, 0, -22, 100];
var numbers = [1, 2, 5, 9, 12, 15, 17, 22, 33, 45];
console.log(rBinarySearch(numbers, 15));
console.log(selectionSort(numbers).lastIndexOf(15));
// console.log(selectionSort(unsortedArray));
// const searchingIndex = binarySearch(numbers, 18);
// console.log(searchingIndex);
