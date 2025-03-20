import { validAnagram } from "../index";

describe("validAnagram function", () => {
  test("returns true for valid anagrams", () => {
    expect(validAnagram("", "")).toBe(true);
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("qwerty", "qeywrt")).toBe(true);
    expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });

  test("returns false for non-anagrams", () => {
    expect(validAnagram("aaz", "zza")).toBe(false);
    expect(validAnagram("car", "rat")).toBe(false);
    expect(validAnagram("awesome", "awesom")).toBe(false);
  });

  test("handles case sensitivity", () => {
    expect(validAnagram("Hello", "hello")).toBe(false);
    expect(validAnagram("abc", "CBA")).toBe(false);
  });

  test("handles different lengths", () => {
    expect(validAnagram("abcd", "abcde")).toBe(false);
    expect(validAnagram("test", "ttees")).toBe(false);
  });
});
