import dotenv from "dotenv";
import pkg from "@prisma/client";

dotenv.config();

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;
