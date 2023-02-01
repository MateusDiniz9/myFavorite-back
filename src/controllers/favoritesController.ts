import { Request, Response } from "express";
import favoritesService from "../services/favoritesService";

export async function insertOrDeleteFavorite(req: Request, res: Response) {
  const userId = res.locals.userId;
  const { animeId } = req.body;
  try {
    const response = await favoritesService.postOrDelete(
      Number(userId),
      Number(animeId)
    );
    return res.status(200).send(response);
  } catch (error) {
    res.sendStatus(400);
  }
}

export async function getFavoritesByUser(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const response = await favoritesService.listAllfavorites(Number(userId));
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
