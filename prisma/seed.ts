import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
dotenv.config();

const prisma = new PrismaClient();

const options = {
  method: "GET",
  url: "https://anime-db.p.rapidapi.com/anime",
  params: { page: "1", size: "1000", sortBy: "ranking", sortOrder: "asc" },
  headers: {
    "X-RapidAPI-Key": "0464d7afb2msh80608a72267917ap12b560jsn55b51d65af3c",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

async function main() {
  let animes = await prisma.animes.findFirst();
  if (!animes) {
    const animesT = await axios
      .request(options)
      .then((response) => response.data.data)
      .catch(function (error) {
        console.error(error);
      });
    for (let i = 0; i < animesT.length; i++) {
      await prisma.animes.create({
        data: {
          title: animesT[i].title,
          ranking: animesT[i].ranking,
          genres: animesT[i].genres.toString(),
          image: animesT[i].image,
          link: animesT[i].link,
          thumb: animesT[i].thumb,
          Synopsis: animesT[i].synopsis,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
