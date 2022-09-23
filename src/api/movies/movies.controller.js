const Movie = require('./movies.model');

const getAllMovies = async (req, res, next) => {
    try{
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch(error){
        return next(error);
    }
}

const getMovie = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const movie = await Movie.findById(id);
        if(movie) return res.status(200).json(movie);
        else return res.status(404).json('Película no encontrada');
    }catch(error){
        return next(error);
    }
}
// Esto es crear
const postMovie = async(req,res,next)=>{
    try{
        const newMovie = new Movie(req.body);
        const createMovie = await newMovie.save();
        return res.status(201).json(createMovie);
    }catch(error){
        return next(error);
    }
}
// Esto es editar
const putMovie = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const movie = new Movie(req.body);
        movie._id=id;
        const updateMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(updateMovie);
    }catch(error){
        return next(error);
    }
}

const deleteMovie = async(req,res,next) => {
    try{
        const id = req.params.id;
        const movieDb = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieDb);
    } catch(error){
        return next(error);
    }
}

module.exports = {getAllMovies, getMovie, postMovie, putMovie, deleteMovie}