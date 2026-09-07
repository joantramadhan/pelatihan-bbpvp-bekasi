const fs = require ("fs");

let data = fs.readFileSync("siswa.json","utf8");
let siswaArray = JSON.parse(data);

console.log("===data seluruh siswa===");
siswaArray.forEach((siswa, i) => {
    console.log(`${i + 1}. nama: ${siswa.nama}`);
    console.log(` kelas : ${siswa.kelas}`);
    console.log(` nilai : ${siswa.nilai.join(", ")}`);
});