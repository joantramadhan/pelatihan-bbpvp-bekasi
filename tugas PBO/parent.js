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
        console.log(`nilai   : ${this._nilai}`);

        if (this.nilai > 90) {
            console.log(`lulus dengan nilai ${this.nilai} (sangat baik)`);
            console.log("lulus dengan nilai" + this.nilai + "(sangat baik)");
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
    get _nilai() {
        console.log("mengambil nilai..");
        return this.nilai;
    }

    set _nilai(value) {
        console.log("menmbah nilai");
        if (value > 100 || value < 0) {
            console.log("gagal menambah nilai, angka tidak boleh lebih dari 100 atau kurang dari 0");
            return;
        }
        else {
            this.nilai = value;
        }
    }

}

module.exports = peserta;