const Cinema = require ("../models/cinema.models");

const getCinema = async (req, res) => {
    try {
      const allCinema = await Cinema.find().populate("pelicula"); 
      return res.status(200).json(allCinema); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const getCinemaById= async (req, res) => {
    try {
      const {id} = req.params;
      const elementos = await Cinema.findById(id).populate("pelicula") 
      if (!elementos) {
        return res.status(404).json({"message":"not found"}); 
      }
      return res.status(200).json(elementos)
    } catch (error) {
      return res.status(500).json(error);
    }
  };



  const postCinema = async (req, res,) => {
    try {
     
      const newCinema= new Cinema({
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        pelicula: req.body.pelicula
      });
  
      const createdCinema = await newCinema.save(); 
      return res.status(201).json(createdCinema);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
const putCinema = async (req, res) => {
    try {
     const {cinemaId} = req.body
     const {movieId}= req.body
     const updateCinema= await Cinema.findByIdAndUpdate(
        cinemaId,
        {$push:{movies:movieId}},
        {new:true}
     );
     return res.status(200).json(updateCinema)
    } catch (error) {
      return res.status(500).json(error);
    }
  };


  const deleteCinema = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteCinema = await Movie.findByIdAndDelete(id); 
      if(!deleteCinema) {  
      return res.status(404).json({ message: "cinema not found" });
      } 
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

  module.exports = { getCinema,postCinema, putCinema, deleteCinema,getCinemaById};
