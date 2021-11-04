const { Router } = require("express");
const router = Router();

const postService = require("../services/postService")

const isAuth = require("../middlewares/isAuth");

router.get("/", (req, res) => {
    res.send("it works");
})

router.post("/create", isAuth, async (req, res) => {
    try {
        let data = await postService.createHotel(req.body, res.locals.user.id);
        res.status(201).json({message: "Created", objectId: data._id});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

module.exports = router;