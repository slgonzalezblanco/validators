const Character = require ("../models/dragon.models");

const getCharacter = async (req, res) => {
    try {
      const characters = await Character.find();
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  const postCharacter = async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        const createdCharacter= await newCharacter.save();
      return res.status(200).json(createdCharacter);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const putCharacter = async (req, res) => {
    try {
      
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const deleteCharacter = async (req, res) => {
    try {
  
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  module.exports={getCharacter,postCharacter,putCharacter,deleteCharacter}