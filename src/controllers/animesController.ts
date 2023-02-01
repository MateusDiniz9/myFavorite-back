import { Request, Response } from "express";
import animesService from "../services/animesService";

export async function animesList(req: Request, res: Response) {
  try {
    const animes = await animesService.getAnimes();
    return res.status(200).send(animes);
  } catch (error) {
    res.sendStatus(400);
  }
}
