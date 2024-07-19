import {expect, test, describe} from "@jest/globals";
import {getDimensionality} from "../src/dimensionality";

describe("Basic Dimensionality", () => {
  test("meters per hour", () => {
    const unit = "meters per hour";
    const dimensionality = getDimensionality(unit);
    expect(dimensionality).toEqual({distance: 1, time: -1});
  });
});