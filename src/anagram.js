/**
 * * Module: Frequency Counter Pattern
 * * O(n)
 * *
 * * Return TRUE if string2 rearrage is equal same with string1. Otherwise return FALSE
 * * Examples:
 * * validAnagram('aaz','zza') -> FALSE
 * * validAnagram('anagram','nagaram') -> TRUE
 * * validAnagram('car','rat') -> FALSE
 */

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const object1 = {};
  const object2 = {};

  for (let i = 0; i < string1.length; i++) {
    object1[string1[i]] = (object1[string1[i]] || 0) + 1;
    object2[string2[i]] = (object2[string2[i]] || 0) + 1;
  }

  for (let item in object1) {
    if (object1[item] !== object2[item]) {
      return false;
    }
  }

  return true;
}

export default validAnagram;
