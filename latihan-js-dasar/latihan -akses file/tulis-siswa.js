const fs = require("fs")

let siswa = [
    {
        nama: "lilly",
        kelas: "web",
        nilai:[78,92,87],
    },
];
//menyimpan data ke file siswa.json
fs.writeFileSync("siswa.json", JSON.stringify(siswa,null,2));
console.log("data siswa berhasil di tulis ke file siswa.json");