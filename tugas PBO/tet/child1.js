const Peserta = require('../parent');

class Web extends Peserta {
    constructor(nama, umur, proglat, nilai1, nilai2, nilai3) {
        // Memanggil construct parent
        super(nama, umur, proglat, 0);

        // Property child
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
        this.nilai3 = nilai3;
    }

    // method hitung rata - rata
    hitungRataRata(){
        const RataRata = (this.nilai1 + this.nilai2 + this.nilai3) / 3;

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
        console.log("=== Data 1 ===");

        console.log(`Nama : ${this.nama}`);
        console.log(`Umur : ${this.umur}`);
        console.log(`Proglat : ${this.proglat}`);

        console.log(`Nilai 1 : ${this.nilai1}`);
        console.log(`Nilai 2 : ${this.nilai2}`);
        console.log(`Nilai 3 : ${this.nilai3}`);

        console.log(`Nilai Rata - rata : ${this.hitungRataRata()}`);

        console.log(`Grade : ${this.cekGrade()}`);
    }
} 

module.exports = Web;