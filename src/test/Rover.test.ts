import { rover } from "../functions/rover/Rover";

test("Rover function return correct output value", () => {
  expect(rover("1 2 N", "LMLMLMLMM", 5, 5)).toEqual({
    x: 1,
    y: 3,
    direction: "N",
  });
});

test("Rover function return correct output value", () => {
  expect(rover("3 3 E", "MMRMMRMRRM", 5, 5)).toEqual({
    x: 5,
    y: 1,
    direction: "E",
  });
});

test("Rover function throw an error for invalid command set", () => {
  expect(() => rover("3 3 E", "MMMMMMMRMMRMRRM", 5, 5)).toThrow();
});
