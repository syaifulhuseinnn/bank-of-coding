// O(n)

function pairWithDifference(arr, target) {
  if (arr.length === 0) return false;

  let i = 0;
  let j = 1;

  while (j < arr.length && i < j) {
    if (arr[j] - arr[i] < target) {
      j++;
    }

    if (arr[j] - arr[i] > target) {
      i++;
    }

    if (arr[j] - arr[i] === target) {
      return true;
    }
  }

  return false;
}

console.log(pairWithDifference([1, 2, 3, 5, 7, 10], 2)); // true  (3 - 1 = 2)
console.log(pairWithDifference([1, 2, 3, 5, 7, 10], 6)); // true  (10 - 4 = 6)
console.log(pairWithDifference([1, 3, 5, 7], 4)); // true  (7 - 3 = 4)
console.log(pairWithDifference([1, 3, 5, 7], 8)); // false (tidak ada pasangan)
console.log(pairWithDifference([], 5)); // false
console.log(pairWithDifference([1, 2, 3], 1)); // true  (2 - 1 = 1)
console.log(pairWithDifference([1, 2, 3, 10], 9)); // true  (10 - 1 = 9)
console.log(pairWithDifference([5, 10, 15, 20], 3)); // false
console.log(pairWithDifference([1, 4, 7, 10], 6)); // true  (10 - 4 = 6)

export default pairWithDifference;
