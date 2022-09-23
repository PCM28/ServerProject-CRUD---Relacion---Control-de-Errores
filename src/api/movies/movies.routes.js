const express = require('express');
const router = express.Router();
const {getAllMovies, getMovie, postMovie, putMovie, deleteMovie} = require('./movies.controller');

router.get('/', getAllMovies);
router.get('/:id', getMovie);
router.post('/new', postMovie);
router.put('/edit/:id', putMovie);
router.delete('/delete/:id', deleteMovie);

module.exports = router;