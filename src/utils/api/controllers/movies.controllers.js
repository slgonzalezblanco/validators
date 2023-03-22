const Movie = require ("../models/movies.models");

const getMovie = async (req, res) => {
    try {
      const allMovies = await Movie.find(); 
      return res.status(200).json(allMovies); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const getMovieById= async (req, res) => {
    try {
      const {id} = req.params;
      const elementos = await Movie.findById(id) 
      if (!elementos) {
        return res.status(404).json({"message":"not found"}); 
      }
      return res.status(200).json(elementos)
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getMovieByTitle= async (req, res) => {
    try {
      const {title} = req.params;
    const movieByTitle = await Movie.find({title:title});
        return res.status(200).json(movieByTitle); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const getMovieByGender= async (req, res) => {
    try {
      const {genre} = req.params;
    const movieByGender = await Movie.find({genre:genre});
        return res.status(200).json(movieByGender); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const getMovieByYear= async (req, res) => {
    try {
      const {year} = req.params;
    const movieByYear = await Movie.find({year:{$gt:"2010"}});
        return res.status(200).json(movieByYear); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };



const postMovie = async (req, res,) => {
    try {
     
      const newMovies= new Movie({
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
        genre: req.body.genre
      });
  
      const createdMovie = await newMovies.save(); 
      return res.status(201).json(createdMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  };



    const putMovie = async (req, res) => {
        try {
          const {id} = req.params;
          const putMovie = new Movie(req.body);
          putMovie._id = id;
      
          const updateMovie = await Movie.findByIdAndUpdate(id, putMovie); 
          if(!updateMovie) {  
          return res.status(404).json({ message: "Movie not found" });
          } 
          return res.status(200).json(updateMovie);
        } catch (error) {
          return res.status(500).json(error);
        }
      };

    const deleteMovie = async (req, res) => {
        try {
          const {id} = req.params;
          const deleteMovie = await Movie.findByIdAndDelete(id); 
          if(!deleteMovie) {  
          return res.status(404).json({ message: "Movie not found" });
          } 
        } catch (error) {
          return res.status(500).json(error);
        }
      };

    
  
  module.exports = { getMovie, postMovie, putMovie, deleteMovie, getMovieById, getMovieByTitle,getMovieByGender,getMovieByYear};
