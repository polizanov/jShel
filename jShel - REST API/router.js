const { Router } = require("express");
const router = Router();

const postControler = require("./routeControlers/postControler");
const authControler = require("./routeControlers/authControler");
const profileControler = require("./routeControlers/profileControler");

const isAuth = require("./middlewares/isAuth")

router.use("/", postControler);
router.use("/auth", authControler);
router.use("/user", isAuth, profileControler);

module.exports = router;