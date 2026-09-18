const peserta = require("./parent");

class kontenVisual extends peserta {
    constructor(nama, umur, nilai1, nilai2) {
        super(nama, umur, "konten visual", 0);

        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }

    grade() {
        let rataRata = (this.nilai1 + this.nilai2) / 2;

        console.log(`nama     : ${this.nama}`);
        console.log(`umur     : ${this.umur}`);
        console.log(`proglat  : ${this.proglat}`);
        console.log(`nilai 1  : ${this.nilai1}`);
        console.log(`nilai 2  : ${this.nilai2}`);
        console.log(`rata-rata: ${rataRata}`);

        if (rataRata > 90) {
            console.log(`lulus dengan nilai ${rataRata} (sangat baik)`);
        }

        else if (rataRata > 80) {
            console.log(`lulus dengan nilai ${rataRata} (baik)`);
        }

        else if (rataRata > 70) {
            console.log(`lulus dengan nilai ${rataRata} (cukup)`);
        }

        else if (rataRata > 60) {
            console.log(`lulus dengan nilai ${rataRata} (kurang)`);
        }

        else {
            console.log(`tidak lulus`);
        }
    }
}

module.exports = kontenVisual;