import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(
    __dirname,
    `./.env${process.env.NODE_ENV === "production" ? ".production" : ""}`
  ),
});
