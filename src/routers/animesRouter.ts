import { Router } from "express";
import { animesList } from "../controllers/animesController";

const animesRouter = Router();

animesRouter.get("", animesList);

export { animesRouter };
