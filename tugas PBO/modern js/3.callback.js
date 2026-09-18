//call back antrian dokter

function persiksa_dokter(nomor_antri, callback) {
    if (nomor_antri < 10) {
        callback(false);
    }
    else {
        callback(true);

    }

}


persiksa_dokter(20, function (cek) {
    if (cek) {
        console.log(`saya menunggu di klinik`);
    } else {
        console.log(`saya akan menunggu di luar`);
    }
})


function periksaantriandokter(nomorantri, callback) {
    console.log(`sekarang antrian ke ${nomorantri}`);
    setTimeout(function () {
        if (nomorantri === 10) {
            console.log(`saya masuk ke ruangan dokter`)
            callback(0)
        } else {
            console.log(`masih menunggu`);
            callback(nomorantri + 1)
        }
    }, 1000)
}

periksaantriandokter(9, function (nomorantrianbaru) {
    periksaantriandokter(nomorantrianbaru, function (nomorantrianbaru1) {
        return nomorantrianbaru1
    })
});