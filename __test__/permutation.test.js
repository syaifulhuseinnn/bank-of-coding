import { isPermutation } from "../index";

describe("isPermutation function", () => {
  test("returns true for permutations", () => {
    expect(isPermutation([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(isPermutation([4, 5, 6], [6, 4, 5])).toBe(true);
  });

  test("returns false for non-permutations", () => {
    expect(isPermutation([1, 2, 3], [1, 2, 2])).toBe(false);
    expect(isPermutation([7, 8, 9], [9, 8])).toBe(false);
  });

  test("handles empty arrays", () => {
    expect(isPermutation([], [])).toBe(true);
    expect(isPermutation([1, 2, 3], [])).toBe(false);
  });

  test("handles different lengths", () => {
    expect(isPermutation([1, 2], [1, 2, 3])).toBe(false);
    expect(isPermutation([1, 2, 3], [1, 2])).toBe(false);
  });
});
