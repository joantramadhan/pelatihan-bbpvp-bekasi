//membuat class dengan nama car
class car {
    //membbuat properti dari class
    constructor(brand)
    {
        this.brand = brand;
    }
}
//instantiat dari class car - object 1
var mobil1 = new car ('mitsubishi');
console.log(mobil1.brand);

var mobil2 = new car ('toyota');
console.log(mobil2.brand);



/*
latihan
membuat class dengan nama peserta (nama, umur, proglat)

output
nama:....
umur:....
proglat:....
*/

class peserta {
    constructor(nama, umur, proglat)
    {
        this.nama = nama;

        this.umur = umur;

        this.proglat = proglat;

    }
}

var peserta1 = new peserta ('joant ramadhan', 21, 'web pengembangan');
console.log("nama           : ",peserta1.nama);
console.log("umur           : ",peserta1.umur);
console.log("program latihan: ",peserta1.proglat);
