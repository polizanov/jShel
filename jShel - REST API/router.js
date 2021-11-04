const { Router } = require("express");
const router = Router();

const postControler = require("./routeControlers/posts");

router.use("/", postControler);

module.exports = router;