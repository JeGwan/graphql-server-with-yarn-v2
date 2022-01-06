import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(
    __dirname,
    // for dist folder access
    `../../src/config.env${
      process.env.NODE_ENV === "production" ? ".production" : ""
    }`
  ),
});
