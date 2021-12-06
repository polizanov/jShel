const { Router } = require("express");
const router = Router();

const postService = require("../services/postService");

const isAuth = require("../middlewares/isAuth");

router.get("/", isAuth, async (req, res) => {
    try {
        let data = await postService.getAll();
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get("/gold-area", async (req, res) => {
    try {
        let data = await postService.getGoldenHotels();
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get("/details/:id", async (req, res) => {
    try {
        let data = await postService.getById(req.params.id);
        console.log(data)
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.post("/create-hotel", isAuth, async (req, res) => {
    try {
        let data = await postService.createHotel(req.body, res.locals.user.id);
        res.status(201).json({message: "Created", objectId: data._id});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.put("/edit-hotel/:hotelId", isAuth, async (req, res) => {
    try {
        let data = await postService.editHotel(req.body, res.locals.user.id, req.params.hotelId);
        res.status(201).json({message: "Created", objectId: data._id});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.delete("/delete-hotel/:hotelId", isAuth, async (req, res) => {
    try {
        let data = await postService.deleteHotel(res.locals.user.id, req.params.hotelId);
        res.status(201).json({message: "Deleted", objectId: data._id});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.post("/like-hotel/:hotelId", isAuth, async (req, res) => {
    try {
        let data = await postService.likeHotel(res.locals.user.id, req.params.hotelId);
        res.status(201).json({message: "Liked", objectId: data._id});
    } catch (err) {
        console.log(err);
        res.status(400).json({message: err.message});
    }
})

module.exports = router;