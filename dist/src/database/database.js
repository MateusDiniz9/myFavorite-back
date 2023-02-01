"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var client_1 = __importDefault(require("@prisma/client"));
dotenv_1["default"].config();
var PrismaClient = client_1["default"].PrismaClient;
var prisma = new PrismaClient();
exports["default"] = prisma;
