function read_book(time, book, x) {
    console.log(`saya membaca ${book.name}`);
    setTimeout(() => {
        let sisa_waktu = 0
        if (time > book.timespent) {
            sisa_waktu = time - book.timespent
            console.log(`saya sudah membaca ${book.name} 
                sisa waktu dsaya ${sisa_waktu}`)
            x(sisa_waktu)

        } else {
            console.log('waktu saya habis');
            x(time)
        }
    }, book.timespent)
}

module.exports = read_book