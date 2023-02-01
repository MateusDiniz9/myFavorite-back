"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var animesRouter_1 = require("./routers/animesRouter");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app
    .use(express_1["default"].json())
    .use(cors_1["default"])
    .get("/status", function (req, res) {
    console.log("oi");
    res.send("OK!");
})
    .use("/animes", animesRouter_1.animesRouter);
app.listen(process.env.PORT, function () {
    console.log("Listening on port ".concat(process.env.PORT));
});
