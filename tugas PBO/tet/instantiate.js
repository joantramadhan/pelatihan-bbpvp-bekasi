const Peserta = require('../parent');
const Web = require('../child1');
const Kontenvisual = require('../child2');

console.log("Objek Parent")

//objek parent
const objekParent = new Peserta("Ruby", 24, "Pengembangan Web", 78);

objekParent.cekNilai();

console.log("")
console.log("Objek Child 1")
//objek child1
const objekChild1 = new Web("July", 25, "Pengembangan Web", 78, 80, 56);

objekChild1.tampilData();


console.log("")
console.log("Objek Child 2")
//objek child 2
const objekChild2 = new Kontenvisual("Nazwa", 12, "Pengembangan Web", 89, 100);

objekChild2.tampilData();