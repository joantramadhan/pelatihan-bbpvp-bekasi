const express = require('express');
const cors = require ('cors');

const app = express();

const movieroutes = require('./src/routes/movieroutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

//middleware global parsing json
app.use(express.json());

app.use(cors());


app.use('/api/movies', movieroutes);
app.use('/api/categories', categoryRoutes);


app.get('/', (req,res) => {
    res.send('api berjalan - silahkan gunakan /api/movies atau /api/categories');
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
})