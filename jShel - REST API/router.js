const { Router } = require("express");
const router = Router();

const postControler = require("./routeControlers/postControler");
const authControler = require("./routeControlers/authControler");

router.use("/", postControler);
router.use("/auth", authControler);

module.exports = router;