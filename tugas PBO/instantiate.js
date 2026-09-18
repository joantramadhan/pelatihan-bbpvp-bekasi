const web = require("./child1");
const kontenVisual = require("./child2");

let pesertaWeb = new web(
    "Joant Ramadhan",
    21,
    80,
    85,
    90
);

let pesertaKonten = new kontenVisual(
    "Budi",
    20,
    85,
    90
);

console.log("===== PESERTA WEB =====");
pesertaWeb.grade();

console.log("\n===== PESERTA KONTEN VISUAL =====");
pesertaKonten.grade();

