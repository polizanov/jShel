const { Router } = require("express");
const router = Router();

const isAuth = require("../middlewares/isAuth");

router.get("/", (req, res) => {
    res.send("it works");
})

module.exports = router;