import { pairWithDifference } from "../index";

describe("pairWithDifference function", () => {
  test("returns true when a pair with the target difference exists", () => {
    expect(pairWithDifference([1, 2, 3, 5, 7, 10], 2)).toBe(true);
    expect(pairWithDifference([1, 2, 3, 5, 7, 10], 6)).toBe(true);
    expect(pairWithDifference([1, 3, 5, 7], 4)).toBe(true);
    expect(pairWithDifference([1, 2, 3], 1)).toBe(true);
    expect(pairWithDifference([1, 2, 3, 10], 9)).toBe(true);
  });

  test("returns false when no pair has the target difference", () => {
    expect(pairWithDifference([1, 3, 5, 7], 8)).toBe(false);
    expect(pairWithDifference([], 5)).toBe(false);
    expect(pairWithDifference([5, 10, 15, 20], 3)).toBe(false);
  });

  test("handles edge cases", () => {
    expect(pairWithDifference([1, 4, 7, 10], 6)).toBe(true);
    expect(pairWithDifference([1], 1)).toBe(false); // Tidak cukup elemen
    expect(pairWithDifference([10, 20, 30, 40], 15)).toBe(false); // Tidak ada pasangan yang cocok
  });
});
