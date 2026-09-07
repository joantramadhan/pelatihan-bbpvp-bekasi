const fs = require('fs');

//baca isi file data json
const isifile = fs.readFileSync('data.json','utf-8');

//ubah data json jadi array/ object
const data = JSON.parse(isifile);

// tampilkan data json ke terminal/konsol
console.log ("isi data.json:", data);

//tampilkan semua data
data.forEach((item) => {
    console.log('id : ${item.id}, nama: ${item.nama}, kota: ${item.kota}');
});