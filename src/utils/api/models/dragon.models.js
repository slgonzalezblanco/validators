const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        name: {type: String, required: true},
        planet: {type: String, required: true},
        image: {type: String, required: true, default: "https://res.cloudinary.com/dpeadveub/image/upload/v1679482003/dragonBall/pegatina-bola-de-dragon-4-goku_qtqr41.jpg"},
        image2: {type: String, required: true, default: "https://res.cloudinary.com/dpeadveub/image/upload/v1679482003/dragonBall/pegatina-bola-de-dragon-4-goku_qtqr41.jpg"},
        ki: {type: Number, required: false},
        pdf: {type: String, required: false}
    },{
        timestamps: true
    }
)

const Character = mongoose.model('character', CharacterSchema);
module.exports = Character;
