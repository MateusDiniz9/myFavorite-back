import { Request, Response } from "express";
import authenticationService from "../services/authenticationService";

export async function singInWithOauth(req: Request, res: Response) {
  const { OauthToken, dataUser } = req.body;
  try {
    const result = await authenticationService.loginWithOauth(
      OauthToken,
      dataUser
    );
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(400).send({});
  }
}
