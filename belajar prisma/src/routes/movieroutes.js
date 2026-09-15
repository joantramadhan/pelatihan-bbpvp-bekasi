const express = require('express');

const router = express.Router();

const moviecontroller = require('../controllers/movieController');

const{validationbodymovies} = require('../middleware/validation');
const { updateCategory } = require('../controllers/categoryController');

router.get('/', moviecontroller.getallmovies);
router.get('/:id', moviecontroller.getallmoviebyid);
router.post('/', validationbodymovies, moviecontroller.createmovie);
router.put('/:id',validationbodymovies, updatemovie);
router.delete('/:id',validationbodymovies, deletemovie);


Module.exports = router;