import { divide } from "../src/calculator.js";

test("Dividing 10 by 2 returns 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("First argument cannot be text", () => {
  expect(() => divide("hello", 2)).toThrow(TypeError);
});

test("Second argument cannot be text", () => {
  expect(() => divide(10, "hello")).toThrow(TypeError);
});

test("NaN is not allowed", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("Division by zero is not allowed", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});