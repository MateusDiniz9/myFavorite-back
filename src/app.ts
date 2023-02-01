import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {
  animesRouter,
  authenticationRouter,
  favoritesRouter,
} from "./routers/index";

dotenv.config();

const app = express();

app
  .use(express.json())
  .use(cors())
  .get("/status", (req, res) => {
    res.send("OK!");
  })
  .use("/animes", animesRouter)
  .use("/auth", authenticationRouter)
  .use("/favorites", favoritesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
