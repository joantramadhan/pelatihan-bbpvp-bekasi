function filterbookpromise(colorfull, amountofpages) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 50, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ];
        if (amountofpages >= 40) {
            resolve(
                books.filter(x =>
                    x.totalPage == amountofpages &&
                    x.isColorful == colorfull)
                );
                
        } else {
            var reason = new Error(" maaf buku di bawah 40 halaman tidak tersedia")
            reject(reason);
        }

    });
}
module.exports = filterbookpromise