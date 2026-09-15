const validationbodymovies = (req,res,next) => {
    let {title, year} =req.body;

    if(title === undefined || year === undefined) {
        res.status(400).json({massage : "title and year is required"}); 
    } else {
        next();
    }
}

const validationbodycategories = (req,res,next) => {
    let {name} = req.body;

    if (name === undefined) {
        res.status(400).json({massage : 'name is required'});
    } else{
        next();
    }
}

module.exports = {
    validationbodycategories, validationbodymovies
}