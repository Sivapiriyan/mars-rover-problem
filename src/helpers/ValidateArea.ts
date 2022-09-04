/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-04 08:11:12
 * @modify date 2022-09-04 08:11:12
 * @desc [description]
 */
import { VALIDATIONS } from "../constants/validation";

export const validateArea = (areaData: string) => {
  const xyLength: string[] = areaData.split(" ");
  const xAxiesMax: number = parseInt(xyLength[0]);
  const yAxiesMax: number = parseInt(xyLength[1]);
  if (isNaN(xAxiesMax)) {
    throw new Error(VALIDATIONS.INVALID_AREA_X_AXIES_MAX);
  }
  if (isNaN(yAxiesMax)) {
    throw new Error(VALIDATIONS.INVALID_AREA_Y_AXIES_MAX);
  }
  return { xAxiesMax, yAxiesMax };
};
