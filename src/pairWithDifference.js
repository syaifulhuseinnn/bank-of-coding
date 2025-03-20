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

export default pairWithDifference;
