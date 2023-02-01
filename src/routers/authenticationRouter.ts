import { oAuthSchema } from "./../schemas/oAuthSchema";
import { singInWithOauth } from "../controllers/authenticationController";
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";

const authenticationRouter = Router();

authenticationRouter.post("/OAuth", validateBody(oAuthSchema), singInWithOauth);

export { authenticationRouter };
