/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-04 10:33:19
 * @modify date 2022-09-04 10:33:19
 * @desc [description]
 */
import { validateArea } from "../helpers/ValidateArea";

test("Validate rover in the correct area", () => {
  expect(validateArea("5 5")).toEqual({ xAxiesMax: 5, yAxiesMax: 5 });
});

test("invalid x axies give as input expect an error", () => {
  expect(() => validateArea("j 5")).toThrow();
});

test("invalid y axies give as input expect an error", () => {
  expect(() => validateArea("5 j")).toThrow();
});
