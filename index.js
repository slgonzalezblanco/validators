const express= require ("express");
const dotenv = require("dotenv");
const {connect}= require ("./src/utils/database");
const cloudinary= require("cloudinary").v2;
const routerMovie= require("./src/utils/api/routes/movies.routes");
const routerCinema= require("./src/utils/api/routes/cinema.routes");
const routerUser= require ("./src/utils/api/routes/user.routes");
const routerDragon= require("./src/utils/api/routes/dragon.routes");

dotenv.config();
const PORT= process.env.PORT ||3000;

const app= express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/movies", routerMovie);
app.use("/cinema", routerCinema);
app.use("/user", routerUser);
app.use("/dragon", routerDragon);

app.listen(PORT,()=>console.log(`listening on: http://localhost:${PORT}`));