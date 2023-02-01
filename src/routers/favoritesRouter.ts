import { Router } from "express";
import {
  insertOrDeleteFavorite,
  getFavoritesByUser,
} from "../controllers/favoritesController";
import { authenticateToken } from "../middlewares/authenticationMiddlewate";

const favoritesRouter = Router();

favoritesRouter
  .get("/:userId", getFavoritesByUser)
  .post("", authenticateToken, insertOrDeleteFavorite);

export { favoritesRouter };
