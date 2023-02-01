import { NextFunction, Request, Response } from "express";
import prisma from "../database/database";

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    res.locals.userId = session.userId;
    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.sendStatus(403);
}
