var read_book = require('./callback.js');

var books  = [
    {name: 'lotr', timespent:3000},
    {name:'fidas', timespent:2000},
    {name:'kalkulus', timespent:4000},
    {name:'komik', timespent:1000}
]



read_book(10000, books[0], function(sisa_waktu){
    read_book(sisa_waktu, books[1], function(sisa_waktu){
        read_book(sisa_waktu, books[2], function(sisa_waktu){
            read_book(sisa_waktu, books[3], function(sisa_waktu){
                console.log('semua buku selesai dibaca');
            })
        })
    })
});