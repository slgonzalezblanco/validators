const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cinemaSchema= new Schema({
nombre:{type: String, require : true},
ciudad:{type: String, require : true},
pelicula:[{type:Schema.Types.ObjectId, ref: "movie"}]

},
{
    timestamps: true
}
)

const Cinema= mongoose.model("cinema", cinemaSchema);

 module.exports = Cinema;
