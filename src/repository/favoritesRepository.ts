import prisma from "../database/database";
async function insertNewFavorite(userId: number, animeId: number) {
  return prisma.favorites.create({
    data: {
      userId,
      animeId,
    },
    include: {
      Anime: true,
    },
  });
}

async function deleteFavorite(favoriteId: number) {
  return prisma.favorites.delete({
    where: {
      id: favoriteId,
    },
  });
}

async function getAllFavorites(userId: number) {
  return prisma.favorites.findMany({
    where: {
      userId,
    },
    include: {
      Anime: true,
    },
  });
}

async function getFavoriteById(userId: number, animeId: number) {
  return prisma.favorites.findFirst({
    where: {
      userId,
      animeId,
    },
    include: {
      Anime: true,
    },
  });
}

const favoritesRepository = {
  insertNewFavorite,
  deleteFavorite,
  getFavoriteById,
  getAllFavorites,
};

export default favoritesRepository;
