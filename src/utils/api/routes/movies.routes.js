const express= require("express");
const router = express.Router();

const{getMovie,postMovie,putMovie,deleteMovie,getMovieById, getMovieByTitle,getMovieByGender,getMovieByYear} =require("../controllers/movies.controllers");

router.get("/",getMovie);
router.get("/year",getMovieByYear);
router.get("/:id",getMovieById);
router.get("/title/:title",getMovieByTitle);
router.get("/genre/:genre",getMovieByGender);

router.put("/:id",putMovie);
router.post("/",postMovie);
router.delete("/:id",deleteMovie);

module.exports= router;