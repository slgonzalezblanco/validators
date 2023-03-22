const express= require("express");
const router = express.Router();
const{login,checkSession,register}= require("../controllers/user.controllers");
const {isAuth,isAdmin} = require("../../middlewares/auth");


router.post("/checkSession",[isAuth],checkSession);
router.post("/login", login);
router.post("/register", register);


module.exports= router;