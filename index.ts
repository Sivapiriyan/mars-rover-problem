/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-03 19:08:58
 * @modify date 2022-09-03 19:08:58
 * @desc [description]
 */
import { rover } from "./src/functions/rover/Rover";
import { validateArea } from "./src/helpers/ValidateArea";
import Logger from "./src/utils/Logger";
import fs from "fs";

async function moveRover(data: any) {
  try {
    console.log("Test Input:");
    console.log(data);

    let lines: string[] = data.trim().split("\n");

    lines = lines.map((line: string) => line.trim()); // align files data as like this [ '5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM' ]

    const { xAxiesMax, yAxiesMax } = await validateArea(lines[0]); // lines [0] means area's right top x axies and y axies values "5 5"

    lines.shift(); // remove first item from array ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM' ]

    console.log("Expected Output:");

    for (let i = 0; i < lines.length; i = i + 2) {
      // in this for loop cut 2 elements for each rover ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM' ]
      // '1 2 N', 'LMLMLMLMM',
      // '3 3 E', 'MMRMMRMRRM'
      const { x, y, direction } = rover(
        lines[i],
        lines[i + 1],
        xAxiesMax,
        yAxiesMax
      );
      console.log(`${x} ${y} ${direction}`);
    }
  } catch (error: any) {
    Logger.error(error.message);
  }
}

function readTextFile() {
  fs.readFile("./input.txt", "utf8", function (error: any, data: any) {
    // using fs to read input file and pass the data into moveRover function
    if (error) {
      Logger.error(error.message);
    } else {
      try {
        moveRover(data);
      } catch (error: any) {
        Logger.error(error.message);
      }
    }
  });
}
readTextFile();
