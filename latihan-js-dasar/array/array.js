//array awal berisi nilai mahasiswa
let nilai = [75,88, 92];

console.log("1. nilai awal");
nilai.forEach((n, i) => {
    console.log(` siswa ${i + 1} : ${n}`);
});
console.log("");

// menambahkan nilai baru menggunakan push
nilai.push(60);
console.log("2. setelah nilai 60 di tambahkan(push)");
console.log(nilai);
console.log("");

//menghapus nilai terakhir menggunakan pop
let nilaiterakhir = nilai.pop();
console.log("3.setelah mennghapus nilai terakhir (pop)", nilaiterakhir);
console.log("nilai sekarang :",nilai);
console.log();

//menggunakan map untuk menambahkan 5 point ke seleuruh nilai
let nilaibonus = nilai.map((n) => n + 5);
console.log("4. nilai setelah di tambahkan bonus 5 poin (map):");
console.log(nilaibonus);
console.log();

//menampilkan nilai bonus menggunakan for each
console.log("5. cetak nilai terakhir siswa:");
nilaibonus.forEach((n, i) => {
    console.log(`siswa ${i + 1}: ${n}`);
});