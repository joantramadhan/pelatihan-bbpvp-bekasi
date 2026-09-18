const Peserta = require('../parent');

class Kontenvisual extends Peserta {
    constructor(nama, umur, proglat, nilai1, nilai2) {
        // Memanggil construct parent
        super(nama, umur, proglat, 0);

        // Property child
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }

    // method hitung rata - rata
    hitungRataRata(){
        const RataRata = (this.nilai1 + this.nilai2) / 2;

        return RataRata;
    }

    //method tentukan grade
    cekGrade(){
        const RataRata = this.hitungRataRata();
        if (RataRata > 90){
            return "Sangat Baik"
        } else if (RataRata > 80){
            return "Baik"
        } else if (RataRata > 70){
            return "Cukup"
        }  else if (RataRata > 60){
            return "Kurang"
        } else {
            return "Tidak Lulus"
        }
    }

    //Method tampilkan data
    tampilData(){
        console.log("=== Data 2 ===");

        console.log(`Nama : ${this.nama}`);
        console.log(`Umur : ${this.umur}`);
        console.log(`Proglat : ${this.proglat}`);

        console.log(`Nilai 1 : ${this.nilai1}`);
        console.log(`Nilai 2 : ${this.nilai2}`);

        // Menjalankan method dengan ()
        console.log(`Nilai Rata-rata : ${this.hitungRataRata()}`);

        // Menjalankan method dengan ()
        console.log(`Grade : ${this.cekGrade()}`);
    }
} 

module.exports = Kontenvisual;