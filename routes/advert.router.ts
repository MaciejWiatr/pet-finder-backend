import express from "express";
import Advert from "../models/Advert";
const router = express.Router();

router.get("/", async (req, res) => {
	const adverts = await Advert.find({});
	res.json(adverts);
});

export default router;
