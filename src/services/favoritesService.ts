import favoritesRepository from "../repository/favoritesRepository";
async function postOrDelete(userId: number, animeId: number) {
  const isFavorite = await favoritesRepository.getFavoriteById(userId, animeId);
  if (!isFavorite) {
    return await favoritesRepository.insertNewFavorite(userId, animeId);
  }
  return await favoritesRepository.deleteFavorite(isFavorite.id);
}

async function listAllfavorites(userId: number) {
  const favorites = await favoritesRepository.getAllFavorites(userId);
  return favorites;
}

const favoritesService = {
  postOrDelete,
  listAllfavorites,
};

export default favoritesService;
