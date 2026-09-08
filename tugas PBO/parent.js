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