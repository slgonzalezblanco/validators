const mongoose = require("mongoose");

// const DB_URL = "mongodb://127.0.0.1:27017/stephany";
const DB_URL = "mongodb+srv://stephany16:miguel13@cluster0.wtcjjtp.mongodb.net/movie?retryWrites=true&w=majority"
// const DB_URL = "mongodb+srv://root:AQUI MI PASSWORD@cluster0.hfsulbh.mongodb.net/AQUI NOMBRE BBDD?retryWrites=true&w=majority"


const connect = async () =>{
    try {

        //Aqui conectamos a la BBDD
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host : ${host}`)

    } catch (error) {
        console.log(`He tenido un erorr al conectar con mi BBDD ${error}`)
    }
};


module.exports = {connect};