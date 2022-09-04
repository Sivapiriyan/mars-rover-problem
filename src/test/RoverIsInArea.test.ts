/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-04 10:33:15
 * @modify date 2022-09-04 10:33:15
 * @desc [description]
 */
import { roverIsInArea } from "../helpers/RoverIsInArea";

test("roverIsInArea check xAxies=2, yAxies=1  xAxiesMax=5, yAxiesMax=5 return TRUE", () => {
  expect(roverIsInArea(2, 1, 5, 5)).toBe(true);
});

test("roverIsInArea check xAxies=6, yAxies=1  xAxiesMax=5, yAxiesMax=5 return FALSE", () => {
  expect(roverIsInArea(6, 1, 5, 5)).toBe(false);
});
