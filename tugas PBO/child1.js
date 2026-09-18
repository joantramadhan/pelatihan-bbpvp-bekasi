const peserta = require("./parent");

class web extends peserta {
    constructor(nama, umur, nilai1, nilai2, nilai3) {
        super(nama, umur, "web", 0);

        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
        this.nilai3 = nilai3;
    }

    grade() {
        let rataRata = (this.nilai1 + this.nilai2 + this.nilai3) / 3;

        console.log(`nama     : ${this.nama}`);
        console.log(`umur     : ${this.umur}`);
        console.log(`proglat  : ${this.proglat}`);
        console.log(`nilai 1  : ${this.nilai1}`);
        console.log(`nilai 2  : ${this.nilai2}`);
        console.log(`nilai 3  : ${this.nilai3}`);
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

module.exports = web;