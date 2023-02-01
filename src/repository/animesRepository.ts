import prisma from "../database/database";
async function listAllAnimes() {
  return prisma.animes.findMany({
    orderBy: {
      ranking: "asc",
    },
  });
}

const animesRepository = {
  listAllAnimes,
};

export default animesRepository;
