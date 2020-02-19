// Binary Search
// O(log n)

const binarySearch = (array: number[], item: number): null | number => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = array[mid];
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

// Selection sort

const findSmallest = (array: number[]): number => {
  let smallestNumber = array[0];
  let smallestIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (smallestNumber > array[i]) {
      smallestNumber = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (list: number[]): number[] => {
  let array = [...list];
  let newArr: number[] = [];
  const len = array.length;
  for (let i = 0; i < len; i++) {
    newArr = [...newArr, ...array.splice(findSmallest(array), 1)];
  }
  return newArr;
};

// Recursion

const countDown = (i: number): void => {
  console.log(i);
  if (i <= 1) {
    return;
  } else {
    setTimeout(() => {
      countDown(i - 1);
    }, 1000);
  }
};

const factorial = (i: number): number => {
  if (i === 1) return 1;
  else {
    return i * factorial(i - 1);
  }
};

// Exercises 4.1 - 4.4

const arraySum = (array: number[]): number => {
  if (array.length === 1) {
    return array[0];
  } else {
    return array.shift()! + arraySum(array); // !!!
  }
};

const itemsSum = (array: number[]): number => {
  if (array[0] === undefined) {
    return 0;
  } else {
    array.shift();
    return 1 + itemsSum(array);
  }
};

const popArr = (index: number, arr: number[]): number[] => {
  arr.splice(index, 1);
  return arr;
};

// Biggest number in the array (version 1)
const maxNumber = (array: number[]): number => {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  } else {
    return array[0] > array[1]
      ? maxNumber(popArr(1, array))
      : maxNumber(popArr(0, array));
  }
};

// Biggest number in the array (version 2)
const maxNumber2 = (array: number[]): number => {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  } else {
    const subMax = maxNumber(array);
    popArr(0, array);
    return array[0] > subMax ? array[0] : subMax;
  }
};

// Binary search with recursion

//Dropped array from the beginning
const droppedArray = (list: number[], n: number): number[] => {
  let array = [...list];
  array.splice(0, n);
  return array;
};
//Dropped array from the end
const droppedRightArray = (list: number[], n: number): number[] => {
  let array = [...list];
  array.splice(n);
  return array;
};

const rBinarySearch = (list: number[], item: number): number => {
  let array = [...list];
  const len = array.length - 1;
  const mid = Math.round(len / 2);
  if (array.length === 1) {
    if (array[0] !== item) {
      return -2;
    }
    return 0;
  } else {
    return item >= array[mid]
      ? mid + rBinarySearch(droppedArray(array, mid), item)
      : rBinarySearch(droppedRightArray(array, mid), item);
  }
};

let unsortedArray = [2, 12, 1, 33, 56, 21, 4, 6, -1, 0, -22, 100];
const numbers = [1, 2, 5, 9, 12, 15, 17, 22, 33, 45];
console.log(rBinarySearch(numbers, 15));
console.log(selectionSort(numbers).lastIndexOf(15));

// console.log(selectionSort(unsortedArray));
// const searchingIndex = binarySearch(numbers, 18);
// console.log(searchingIndex);
