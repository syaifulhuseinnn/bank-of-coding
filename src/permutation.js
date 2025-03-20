/**
 * * Module: Frequency Counter Pattern
 * * O(n)
 * *
 * * Return TRUE if element in array2 is equal same with array1 even the sequence is different
 * * Examples:
 * * isPermutation([1, 2, 3], [3, 2, 1]) -> TRUE
 * * isPermutation([1, 2, 3], [1, 2, 2]) -> FALSE
 * * isPermutation([4, 5, 6], [6, 4, 5]) -> TRUE
 * * isPermutation([7, 8, 9], [9, 8]) -> FALSE
 */

function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const object1 = {};
  const object2 = {};

  for (let i = 0; i < arr1.length; i++) {
    object1[arr1[i]] = (object1[arr1[i]] || 0) + 1;
    object2[arr2[i]] = (object2[arr2[i]] || 0) + 1;
  }

  for (let item in object1) {
    if (object1[item] !== object2[item]) {
      return false;
    }
  }

  return true;
}

export default isPermutation;
