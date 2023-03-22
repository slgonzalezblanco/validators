const express= require("express");
const router = express.Router();

const {getCharacter,postCharacter,putCharacter,deleteCharacter} = require ("../controllers/dragon.controllers")

router.get("/",getCharacter)
router.post("/",postCharacter)
router.put("/",putCharacter)
router.delete("/",deleteCharacter)

module.exports=router;