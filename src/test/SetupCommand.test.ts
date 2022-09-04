/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-04 10:33:08
 * @modify date 2022-09-04 10:33:08
 * @desc [description]
 */
import { setupCommands } from "../helpers/SetupCommand";

test("setupCommands", () => {
  expect(setupCommands("MMRMMRMRRM")).toEqual([
    "M",
    "M",
    "R",
    "M",
    "M",
    "R",
    "M",
    "R",
    "R",
    "M",
  ]);
});

test("invalid command given expect an error", () => {
  expect(() => setupCommands("MMR1MRMRRM")).toThrow();
});
