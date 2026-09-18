var readBooksPromise = require('./promise.js');

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidras', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
];

// Lanjutkan code untuk menjalankan function readBooksPromise

readBooksPromise(10000,books[0])
.then(function(sisawaktu){
    console.log(`sisa waktu ${sisawaktu}`) 
    return readBooksPromise(sisawaktu,books[1])
})
.then(function(sisawaktu){
    console.log(`sisa waktu ${sisawaktu}`) 
    return readBooksPromise(sisawaktu,books[2])
})
.catch(function(error){
    console.log('ERROR:', error);
})


