import { Prisma } from "@prisma/client";
import prisma from "../database/database";

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function createSession(OauthToken: string, userId: number) {
  return prisma.session.create({
    data: {
      userId,
      token: OauthToken,
    },
  });
}

const sessionRepository = {
  create,
};

const userRepository = {
  findByEmail,
  create,
  createSession,
};

export default userRepository;
