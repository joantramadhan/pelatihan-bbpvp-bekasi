function panggilpasien (nomor) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(nomor<10){
                resolve(`pasien nomor ${nomor} silahkan masuk`);
            }else{
                reject(`pasien nomor ${nomor} tidak ada di daftar antrian`);
            }
            
        }, 1000);
    });
}


panggilpasien(10)
.then((pesan) => {
    console.log('succes:',pesan);
    
})

.catch((error) => {
    console.log("reject:", error);
});