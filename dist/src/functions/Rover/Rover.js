"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
function Rover(initialDirection, initalX, initailY, commandSet) {
    let direction = initialDirection;
    let x = initalX;
    let y = initailY;
    const directions = {
        N: {
            left: "west",
            right: "east",
            move: function () {
                y++;
            },
        },
        S: {
            left: "east",
            right: "west",
            move: function () {
                y--;
            },
        },
        E: {
            left: "north",
            right: "south",
            move: function () {
                x++;
            },
        },
        W: {
            left: "south",
            right: "north",
            move: function () {
                x--;
            },
        },
    };
    commandSet.map((commad) => {
        if (commad === "L") {
            direction = directions[direction].left;
        }
        if (commad === "R") {
            direction = directions[direction].right;
        }
        // if (commad === "M") {
        //   directions[direction].move.call();
        // }
    });
    console.log("direction", direction);
    console.log("x", x);
    console.log("y", y);
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map