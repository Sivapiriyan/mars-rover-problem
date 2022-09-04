/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-03 19:08:44
 * @modify date 2022-09-03 19:08:44
 * @desc [description]
 */
import { VALIDATIONS } from "../constants/validation";

// setupInitialPosition function is get the initial postion validate and return a valid object for the next process
export const setupInitialPosition = (initialPosition: string) => {
  if (
    typeof initialPosition !== "string" ||
    initialPosition.length !== VALIDATIONS.INITIAL_POSITION_VALUE_LENGTH
  )
    throw new Error(VALIDATIONS.INVALID_INITIAL_POSITION);

  const TempInitialPosition = initialPosition.split(" "); // initialPosition are split and set into array "3 3 E" => ["3","3","E"]

  const initalX: number = parseInt(TempInitialPosition[0]); // convert string to number "3" => 3
  const initailY: number = parseInt(TempInitialPosition[1]); // convert string to number "3" => 3
  const initialDirection: string = TempInitialPosition[2];

  if (isNaN(initalX)) {
    // to check x axies value is NOT a number thorw error
    throw new Error(VALIDATIONS.INVLAID_X_AXIS);
  }
  if (isNaN(initailY)) {
    // to check y axies value is NOT a number thorw error
    throw new Error(VALIDATIONS.INVLAID_Y_AXIS);
  }
  if (typeof initialDirection !== "string") {
    // to check direction value is NOT a string thorw error
    throw new Error(VALIDATIONS.INVLAID_DIRECTION_VALUE);
  }
  return {
    initalX,
    initailY,
    initialDirection,
  };
};
