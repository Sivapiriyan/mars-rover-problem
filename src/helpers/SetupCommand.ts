/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-03 19:29:33
 * @modify date 2022-09-03 19:29:33
 * @desc [description]
 */
import { TURNS } from "../constants/turn";
import { VALIDATIONS } from "../constants/validation";

// setupcommands function is validate commands return it and arranged it for the next process
// like this "MMRMMRMRRM" => ["M","M","R","M","M","R","M","R","R","M"]
export const setupCommands = (commands: string) => {
  return commands.split("").map((command: string) => {
    if (
      command === TURNS.LEFT ||
      command === TURNS.RIGHT ||
      command === TURNS.MOVE
    ) {
      return command;
    } else {
      throw new Error(
        `${VALIDATIONS.INVALID_MOVE} "${command}" in "${commands}"`
      );
    }
  });
};
