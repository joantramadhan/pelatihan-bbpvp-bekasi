const fs = require("fs");
const { json } = require("stream/consumers");

const filepath = "Siswa.json";

//cek apakah file sudah ada
if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, "utf8");
    daftar = JSON.parse(content);
}

//data mahasiswa baru
let siswabaru1 = {
    nama : "sunflower",
    kelas: "web",
    nilai: [93,97,83],
};

let siswabaru2 = {
    nama : "magnolia",
    kelas : "web",
    nilai : [98,77,68],
};

//tambahkan ke array
daftar.push(siswabaru1);
daftar.push(siswabaru2);

//simpan kembali file
fs.writeFileSync(filepath, JSON.stringify(daftar,null,2));
console.log ("data mahasiswa berhasil di tembahkan ke siswa.json")