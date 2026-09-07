//array 1 dimensi

console .log("array 1 dimensi");

let buah = ["apel","mangga", "jeruk","anggur"]

//menampilkan array
console.log(buah[2]);
console.log(buah[0]);
console.log(buah[3]);
console.log(buah[1]);
console.log()



// array 2 dimensi

console.log("array object");
let mobil = [
    {merk: "toyota", warna: "merah", tipe: "sedan"},
    {merk: "honda", warna: "hitam", tipe: "suv"},
    {merk: "nissan", warna: "putih", tipe: "mpv"}
]
console.log(mobil[0].tipe);
console.log(mobil[1].merk);
console.log(mobil[2]);
console.log()

// array panjang
console.log("panjang array");
console.log(buah.length);
console.log()
//foreach
console.log("array foreach");
buah.forEach(function(item, index){
    console.log("index ke " + index + ": " + item);
})

//foreach object
console.log("array foreach object");
mobil.forEach(function(item, index){
    console.log("index ke " + (index + 1) + ":");
    console.log("merk:" + item.merk);
    console.log("warna: " + item.warna);
    console.log("tipe: " + item.tipe);
    console.log();
})

//map
console.log("array map");
let arraywarna = mobil.map(function(item){
    return item.warna;
})
console.log(arraywarna);
console.log()

//FITER
console.log("array filter");
let arraymobilfilter = mobile.filter(function(item){
    return item.tipe != "sedan";
})
console.log(arraymobilfilter);