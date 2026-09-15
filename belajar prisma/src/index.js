const express = require('express');
const cors = require ('cors');

const app = express();

const movieroutes = require('./routes/movieroutes');
const categoryRoutes = require('./routes/categoryRoutes');

//middleware global parsing json
app.use(express.json());

app.use(cors());


app.use('/api/movies', movieroutes);
app.use('/api/categories', categoryRoutes);


app.length('/', (req,res) => {
    res.send('api berjalan - silahkan gunakan /api/movies atau /api/categories');
})

const port = Process.inv.port || 3000;
app.listen(port => {
    console.log(`server berjalan${port}`);
})