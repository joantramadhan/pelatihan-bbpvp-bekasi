// setTimeout(() => {
//     console.log('saya muncul setela 3 detik')
// }, 3000);

// console.log('saya di jalan kan pertama');


//latihan
//1.mencari driver
//2.mohon menunggu
//3.setelah 5 detik driver mwenuju lokasi

setTimeout(()=> {
    console.log('driver di temukan')
},5000);

console.log('mencari driver');
console.log('mohon tunggu');


// function sapa (nama) {
//     console.log(`sapa, ${nama}`);
// };

// function prosesnama(callback) {
//     let nama = 'joant';
//     callback(nama);
// }

// prosesnama(sapa);


// function tambah(a,b){
//     return a + b;
// }

// function kali(a,b){
//     return a * b;
// }

// function hitung(angka1, angka2, operasi) {
//     console.log(`proses menghitung ${angka1} dan ${angka2}`);

//     const hasil = operasi(angka1,angka2);
//     console.log(`hasilnya adalah ${hasil}`);
// }

// hitung(1,2, tambah);
// hitung(2,2,kali);



//latihan
// laus persegi dan luas segitiga

function luas_persegi(s,s){
      console.log('menghitung luas persegi');
    return s * s;
}

function luas_segitiga(a,t){
    console.log('menghitung luas segitiga');
    return 1/2 * a * t;
}

function hitung(angka1, angka2, operasi) {
  

    const hasil = operasi(angka1,angka2);
    console.log(`hasilnya adalah ${hasil}`);
}

hitung(7, 10, luas_segitiga);
hitung(2, 2, luas_persegi);