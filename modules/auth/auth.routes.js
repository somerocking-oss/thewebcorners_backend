const express = require("express");

const auth = require("../../core/middleware/auth");
const controller = require("./auth.controller");

const router = express.Router();

router.post("/login", controller.login);
router.get("/me", auth, controller.me);

module.exports = router;
