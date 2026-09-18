const express = require('express');

const router = express.Router();

const moviecontroller = require('../controllers/movieController');

const{validationbodymovies} = require('../middleware/validation');
const { updateCategory } = require('../controllers/categoryController');

router.get('/', moviecontroller.getAllmovies);
router.get('/:id', moviecontroller.getmoviebyid);
router.post('/', validationbodymovies, moviecontroller.createmovie);
router.put('/:id',validationbodymovies, moviecontroller.updatemovie);
router.delete('/:id', moviecontroller.deletemovie);


module.exports = router;