console.log("urutkan alfabet");

let nama = ["jamal", "rahma","joant","sulthan"];
nama.sort();
console.log(nama);
console.log();  

console.log("urut descending");
let angkadesc = [40,100,1,5,25,10];
angkadesc.sort(function(a,b){
    return b-a;
});
console.log(angkadesc);

console.log("urut ascending");
let angkaasc = [40,100,1,5,25,10];
angkaasc.sort(function(a,b){
    return a-b;
});
console.log(angkaasc);
console.log();

