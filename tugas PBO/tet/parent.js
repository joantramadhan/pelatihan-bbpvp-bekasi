class Peserta{
    //membuat property class
    constructor(nama, umur, proglat, nilai)
    {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this._nilai = nilai;
    }

    //getter
     get nilai(){
        console.log("Mengambil nilai...");
        return this._nilai;
    }

    //settter
   set nilai(value){
    console.log('Mengubah nilai...');
        if (value < 0) {
            console.log("Nilai tidak valid! Tidak boleh lebih kecil dari 0");
        } else if (value > 100) {
            console.log("Nilai tidak valid! Tidak boleh lebih dari 100.");
        } else {
            this._nilai = value;
        }
    }

    cekNilai(){
        console.log(`Nama : ${this.nama}`);
        console.log(`Umur : ${this.umur}`);
        console.log(`Proglat : ${this.proglat}`);
        console.log(`Nilai : ${this._nilai}`);
        if (this._nilai > 90){
            console.log("Grade: Sangat Baik")
        } else if (this._nilai > 80){
            console.log("Grade: Baik")
        } else if (this._nilai > 70){
            console.log("Grade: Cukup")
        }  else if (this._nilai > 60){
            console.log("Grade: Kurang")
        } else {
            console.log("Grade: Tidak Lulus")
        }
    }

}
// objek dari class
// var objek1 = new Peserta('Ruby', 24, 'Pengembangan Web', 78);
// objek1.cekNilai();
// console.log("")
// objek1.nilai = 56;
// console.log(objek1.nilai)


module.exports = Peserta;