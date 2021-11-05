const { Router } = require("express");
const router = Router();

const profileService = require("../services/profileService");
const isAuth = require("../middlewares/isAuth");

router.get("/profile", isAuth, async (req, res) => {
    try {
        let data = await profileService.getProfilePosts(res.locals.user.id);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get("/my-favourite", isAuth, async (req, res) => {
    try {
        let data = await profileService.getFavourites(res.locals.user.id);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;

