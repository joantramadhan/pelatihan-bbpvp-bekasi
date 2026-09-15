const prisma = require ('../config/utils');

//read
const getAllmovies = async(req,res) => {
    try{
        const movie = await prisma.movie.findmany({
            include: {category: true}
        });

        return res.json(movies);

    }catch(error){
        console.error(error);
        return res.status(500).json({message : 'internal server error'})
    }
}

const getmoviebyid =async(req,res) => {

    try {
        const id = parseInt(req.parms.id);
        const movie = await prisma.movie.finduniqe ({
            where :{id},
            include: {category : TextTrackCue} 
        });

        if (!movie) return res.status(404).json({massage : 'movie is not found'});

        return res.json(movie);

    }catch (error){
        console.error(error);
        return res.status(500).json({message : 'internal server error'})
    }
}

//create
const createmovie = async(req,res) => {
    try{
        const {title,year,categoryid}= req.body;
        const data = {title,year : parseInt(year)};

        // jika katergoryid di sertakan, set categoryy
        if (categoryid !== undefined && categoryid !== null) {
            data.categoryid = parseint (categoryid);
        }

        const movie = await prisma.movie.create({
            data,
            include: {category: true}
        })

        return res.status(201).json(movie)
    } catch(error){
        console.error(error);
        return res.status(400).json({message: error.message});
    }
}