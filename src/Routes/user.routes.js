const { Router } = require("express");
const registerController = require("../Controllers/user/register.controllers");
const userRoutes = Router();

userRoutes.post("/register", registerController); //;registerController()

module.exports = userRoutes;
