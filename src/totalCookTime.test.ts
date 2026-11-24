import { describe, expect, test } from "vitest";
import { totalCookTime } from "./totalCookTime";

describe("totalCookTime", () => {
  test("returns 0 for no recipes", () => {
    expect(totalCookTime([])).toBe(0);
  });

  test("adds prep and cook time for published recipes only", () => {
    expect(
      totalCookTime([
        { status: "published", prepMinutes: 10, cookMinutes: 20 },
        { status: "draft", prepMinutes: 5, cookMinutes: 15 },
      ]),
    ).toBe(30);
  });
});
