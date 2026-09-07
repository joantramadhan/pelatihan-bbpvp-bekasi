// zin akses agar js bisa baca dan membuat text di laptop
const fs = require('fs');
// mencari nama fie data.js
const teks = fs.readFileSync('data.json', 'utf-8');
// mengubah text jadi code yang di mengerti komputer
const data = JSON.parse(teks);

console.log("isi awal : ", data);
data.push({id: 1,nama : "jeanny", kota : "bekasi"});
fs.writeFileSync("data.json",JSON.stringify(data,null,2));
console.log("data berhasil ditambahkan");
