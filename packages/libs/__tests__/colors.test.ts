/// <reference types="vitest" />

import { test, describe, expect } from "vitest";

import { parseColor } from "../src/colors";

// Use describe to group your tests
describe("parseColor function", () => {
  test("should convert different color formats to hex", () => {
    expect(parseColor("rgb(255, 0, 0)")).toEqual("#FF0000");
    expect(parseColor("hsl(120, 100%, 50%)")).toEqual("#00FF00");
    expect(parseColor("blue")).toEqual("#0000FF");
  });
});
