import {expect, test} from "@jest/globals";

test("sample test", () => {
  expect(1 + 1).toBe(2);
});
test("sample failing test", () => {
  expect(1 + 1).toBe(3);
});