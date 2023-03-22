const express= require("express");
const router = express.Router();

const { getCinema,postCinema,putCinema,deleteCinema} =require("../controllers/cinema.controllers")

router.get("/", getCinema );
router.get("/:id", getCinema );
router.put("/:id", putCinema );
router.post("/",postCinema);
router.delete("/:id",deleteCinema);

module.exports= router;