import { capitalize, reverseString, Calculator } from "./test-practice.js";

// CAPITALIZE

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

// REVERSE STRING

test("reverseString exists", () => {
  expect(reverseString("ab")).toBeDefined();
});

test("reverses string with one character", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverses string with two characters character", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("reverses string with more than two characters character", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("reverseString fails if no string is provided", () => {
  expect(() => reverseString([1])).toThrow(new Error("argument must be a string."));
});

// CALCULATOR

test("calculator exists", () => {
  expect(new Calculator()).toBeDefined();
  expect(new Calculator()).toBeInstanceOf(Calculator);
});

test("calculator has add, subtract, divide, multiply methods", () => {
  expect(typeof Calculator.add).toBe("function");
  expect(typeof Calculator.subtract).toBe("function");
  expect(typeof Calculator.divide).toBe("function");
  expect(typeof Calculator.multiply).toBe("function");
});

test("calculator add works", () => {
  expect(Calculator.add(1, 2)).toBe(3);
})

test("calculator subtract works", () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
}) 

test("calculator multiply works", () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
})

test("calculator divide works", () => {
  expect(Calculator.divide(1, 2)).toBe(0.5);
})

