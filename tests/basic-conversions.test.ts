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

  test("4 miles per hour in kilometers per hour", () => {
    const results = convert("4 miles per hour in kilometers per hour");
    expect(results.from).toBe("mile per hour");
    expect(results.to).toBe("kilometer per hour");
    expect(results.converted).toBeCloseTo(6.43738);
    expect(results.dimension).toBe("speed");
    expect(results.input).toBe(4);
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

  test("100 celcius in fahrenheit", () => {
    const results = convert("100 celcius in fahrenheit");
    expect(results.from).toBe("°C");
    expect(results.to).toBe("°F");
    expect(results.converted).toBeCloseTo(212);
    expect(results.dimension).toBe("temperature");
    expect(results.input).toBe(100);
  });

  test("98.7 fahrenheit in celcius", () => {
    const results = convert("98.7 fahrenheit in celcius");
    expect(results.converted).toBeCloseTo(37.0556);
  });

  const cases: Array<[string, number]> = [
    ["1 mile in meters", 1609.34],
    ["1 mile in kilometers", 1.60934],
    ["1 mile in feet", 5280],
    ["1 mile in inches", 63360.053]
  ];
  cases.forEach(([input, expected]) => {
    test(input, () => {
      const results = convert(input);
      expect(results.converted).toBeCloseTo(expected);
    });
  });
});
