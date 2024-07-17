import {expect, test, describe} from "@jest/globals";
import {convert} from "../src/conversions";

describe("Basic Conversions", () => {
  test("100 acres in square meters", () => {
    const results = convert("100 acres in square meters");
    expect(results.from).toBe("acre");
    expect(results.to).toBe("square meter");
    expect(results.converted).toBeCloseTo(404685.64224);
    expect(results.dimension).toBe("area");
    expect(results.input).toBe(100);
  });

  test("1 mile in meters", () => {
    const results = convert("1 mile in meters");
    expect(results.from).toBe("mile");
    expect(results.to).toBe("meter");
    expect(results.converted).toBeCloseTo(1609.34);
    expect(results.dimension).toBe("distance");
    expect(results.input).toBe(1);
  });

  test("1 pound in grams", () => {
    const results = convert("1 pound in grams");
    expect(results.from).toBe("pound");
    expect(results.to).toBe("gram");
    expect(results.converted).toBeCloseTo(453.592);
    expect(results.dimension).toBe("mass");
    expect(results.input).toBe(1);
  });

  test("4 degrees in radiands", () => {
    const results = convert("4 degrees in radians");
    expect(results.from).toBe("degree");
    expect(results.to).toBe("radian");
    expect(results.converted).toBeCloseTo(0.0698132);
    expect(results.dimension).toBe("angle");
    expect(results.input).toBe(4);
  });
});
