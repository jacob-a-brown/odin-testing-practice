import { capitalize } from "./test-practice.js";

test("capitalize exists", () => {
  expect(capitalize("a")).toBeDefined();
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize string with lower case first letter", () => {
  expect(capitalize("ab")).toBe("Ab");
});

test("capitalize string with upper case first letter", () => {
  expect(capitalize("Ab")).toBe("Ab");
});

test("capitalize string that starts with a number", () => {
  expect(capitalize("1b")).toBe("1b");
});

test("capitalize string that starts with non-alphanumeric letter", () => {
  expect(capitalize("1b")).toBe("1b");
});

test("throws error if not string", () => {
  expect(() => capitalize([1, 2])).toThrow(new Error("argument must be a string"));
});