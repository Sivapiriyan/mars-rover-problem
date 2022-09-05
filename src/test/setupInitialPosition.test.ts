import { setupInitialPosition } from "../helpers/SetupInitialPosition";

test("Validate initialPositions are correct", () => {
  expect(setupInitialPosition("1 2 N")).toEqual({
    initalX: 1,
    initailY: 2,
    initialDirection: "N",
  });
});

test("Validate initialPositions length is 5", () => {
  expect(() => setupInitialPosition("12 N")).toThrow();
});

test("Validate initialPositions first value to be number", () => {
  expect(() => setupInitialPosition("B 2 N")).toThrow();
});

test("Validate initialPositions second value to be number", () => {
  expect(() => setupInitialPosition("1 N N")).toThrow();
});

test("Validate initialPositions third value to string", () => {
  expect(() => setupInitialPosition("1 1 1")).toThrow();
});
