"use strict";
exports.__esModule = true;
exports.animesRouter = void 0;
var express_1 = require("express");
var animesController_1 = require("../controllers/animesController");
var animesRouter = (0, express_1.Router)();
exports.animesRouter = animesRouter;
animesRouter.get("", animesController_1.animesList);
