class car{
    sound(){
        return"vroomm"
    }
}

var mobil1 = new car();
console.log(mobil1.sound());




//metodh dengan parameteer 
class car1 {
    //method
    sound(x){
        return x + ", suara mobil saya vromm"
    }
}

//instamtiate
var mobil1 = new car1();
console.log(mobil1.sound('hai'));


class laptop{
    constructor(merk, batrai){
        this.merk = merk;
        this.batrai = batrai;
    }

    cekbatrai(){
        if (this.batrai >= 80) {
            console.log(`${this.merk} ; batrai penuh ${this.batrai}%`);
        }
        else if (this.batrai >= 30) {
            console.log(`${this.merk} ; batrai sedang ${this.batrai}%`); 
    }
    else  {
            console.log(`${this.merk} ; batrai lemah ${this.batrai}%`);
    }
}
}

//instantiate
var laptop1 = new laptop('asus',90);
laptop1.cekbatrai();

/*
latihan
*/
// class peserta {
//     constructor(nilai){
//         this.nilai = nilai;
//     }

//     ceknilai(){
//         if(this.nilai >90) {
//             console.log(`lulus dengan nilai ${this.nilai} (sangat baik)`);
//         }

//         else if(this.nilai >80) {
//             console.log(`lulus dengan nilai ${this.nilai} (baik)`);
//         }

//         else if(this.nilai >70) {
//             console.log(`lulus dengan nilai ${this.nilai} (cukup)`);
//         }

//         else if(this.nilai >60) {
//             console.log(`lulus dengan nilai ${this.nilai} (kurang)`);
//         }
//         else {
//             console.log(`tidak lulus`)
//         }

//     }
// }

// var peserta1 = new peserta(90);
// peserta1.ceknilai();
// var peserta2 = new peserta(50);
// peserta2.ceknilai();
// var peserta3 = new peserta(70);
// peserta3.ceknilai();

class peserta {
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;

        this.umur = umur;

        this.proglat = proglat;

        this.nilai = nilai;
    }

    grade() {
        console.log(`nama    : ${this.nama}`);
        console.log(`umur    : ${this.umur}`);
        console.log(`proglat : ${this.proglat}`);
        console.log(`nilai   : ${this.nilai}`);
        
        if (this.nilai > 90) {
            console.log(`lulus dengan nilai ${this.nilai} (sangat baik)`);
        }

        else if (this.nilai > 80) {
            console.log(`lulus dengan nilai ${this.nilai} (baik)`);
        }

        else if (this.nilai > 70) {
            console.log(`lulus dengan nilai ${this.nilai} (cukup)`);
        }

        else if (this.nilai > 60) {
            console.log(`lulus dengan nilai ${this.nilai} (kurang)`);
        }
        else {
            console.log(`tidak lulus`)
        }
    }
}

var peserta1 = new peserta('joant ramadhan', 21, 'web', 90);

peserta1.grade();
