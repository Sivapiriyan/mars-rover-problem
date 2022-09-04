/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-04 08:11:22
 * @modify date 2022-09-04 08:11:22
 * @desc [description]
 */

// roverIsInArea function is when pass the move "M" command it will validate that move is valid move or NOT
// validate with area xAxiesMax and yAxiesMax these values are get from validateArea function
export const roverIsInArea = (
  xAxies: number,
  yAxies: number,
  xAxiesMax: number,
  yAxiesMax: number
) => {
  return (
    xAxies >= 0 && yAxies >= 0 && xAxies <= xAxiesMax && yAxies <= yAxiesMax // check xAxies,yAxies greater than 0 AND less than or equal with xAxiesMax,yAxiesMax
  );
};
