import animesRepository from "../repository/animesRepository";
async function getAnimes() {
  const animes = await animesRepository.listAllAnimes();
  return animes;
}

const animesService = {
  getAnimes,
};

export default animesService;
