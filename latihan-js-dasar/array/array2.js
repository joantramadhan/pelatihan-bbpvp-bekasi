console.log("menambah elemen akhir");
let buah = ["apel", "jeruk"];
buah.push("anggur");
console.log(buah);
console.log()


console.log("menghapus elemen akhir");
let buah1 = ["apel", "jeruk", "anggur"];
buah1.pop();
console.log(buah1);
console.log();

console.log("menambah elemen awal array");
let buah2 = ["apel", "jeruk", "anggur"];
buah2.unshift("durian");
console.log(buah2);
console.log();

console.log("menambah elemen awal array");
let buah3 = ["apel", "jeruk", "anggur"];
buah3.shift();
console.log(buah3);
console.log();

console.log("mengubah variable di posisi tertentu");
let angka = [1,2,4,5];
angka.splice(2,0,3);
console.log(angka);

console.log("menghapus variable di posisi tertentu");
let angka1 = [1,2,3,4,5];
angka1.splice(2,1);
console.log(angka1);

console.log("mengambil sebagian array");
let angka2 = [1,2,3,4,5];
let potong = angka2.slice(1,4);
console.log(potong);