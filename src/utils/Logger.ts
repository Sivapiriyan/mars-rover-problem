/**
 * @author Sivapiriyan Lingeswaran
 * @email l.s.piriyan@gmail.com
 * @create date 2022-09-03 19:04:39
 * @modify date 2022-09-03 19:04:39
 * @desc [description]
 */
import winston from "winston";
import { ConsoleTransportInstance } from "winston/lib/winston/transports";

const transports: ConsoleTransportInstance[] = [];

transports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.cli(),
      winston.format.splat()
    ),
  })
);

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    http: 3,
    verbose: 4,
    debug: "orange",
    silly: "blue",
  },
};

const Logger = winston.createLogger({
  level: "silly",
  levels: myCustomLevels.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
      const { level, message } = info;
      return `[${level}]: ${message}`;
    })
  ),
  transports,
});

export default Logger;
