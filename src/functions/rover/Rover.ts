/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-03 19:08:49
 * @modify date 2022-09-03 19:08:49
 * @desc [description]
 */
import { DIRECTION } from "../../constants/direction";
import { TURNS } from "../../constants/turn";
import { VALIDATIONS } from "../../constants/validation";
import { roverIsInArea } from "../../helpers/RoverIsInArea";
import { setupCommands } from "../../helpers/SetupCommand";
import { setupInitialPosition } from "../../helpers/SetupInitialPosition";
import { DirectionType, ICalculationDirectionObject } from "./Rover.interface";

export function rover(
  initialPosition: string,
  commands: string,
  xAxiesMax: number,
  yAxiesMax: number
) {
  const { initalX, initailY, initialDirection } =
    setupInitialPosition(initialPosition);

  let x: number = initalX;
  let y: number = initailY;
  let direction: string = initialDirection;
  let tempX: number = initalX;
  let tempY: number = initailY;

  const calculationDirectionObject: ICalculationDirectionObject = {
    N: {
      left: DIRECTION.WEST,
      right: DIRECTION.EAST,
      move: () => {
        tempY++;
      },
    },
    S: {
      left: DIRECTION.EAST,
      right: DIRECTION.WEST,
      move: () => {
        tempY--;
      },
    },
    E: {
      left: DIRECTION.NORTH,
      right: DIRECTION.SOUTH,
      move: () => {
        tempX++;
      },
    },
    W: {
      left: DIRECTION.SOUTH,
      right: DIRECTION.NORTH,
      move: () => {
        tempX--;
      },
    },
  };

  const spreadCommands = setupCommands(commands); // commands are validate, spread and set into array "MMRMMRMRRM" => ["M","M","R","M","M","R","M","R","R","M"]

  spreadCommands.map((command: string) => {
    switch (command) {
      case TURNS.LEFT: // The command is "L" set direction based on current direction
        direction = calculationDirectionObject[direction as DirectionType].left;
        break;
      case TURNS.RIGHT: // The command is "R" set direction based on current direction
        direction =
          calculationDirectionObject[direction as DirectionType].right;
        break;
      case TURNS.MOVE: // The command is "M" below function set "x","y" values based on current "x", "y" values
        calculationDirectionObject[direction as DirectionType].move.call(null);
        if (roverIsInArea(tempX, tempY, xAxiesMax, yAxiesMax)) {
          x = tempX;
          y = tempY;
        } else {
          throw new Error(VALIDATIONS.INVALID_PLACE);
        }
        break;
    }
  });

  return { x, y, direction };
}
