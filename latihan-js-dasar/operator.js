//aritmatika
console.log("aritmatika");
let a = 150;
let b = 40;

console.log("penjumblahan", a + b);
console.log("pengurangan", a - b);
console.log("perkalian", a * b)
console.log("pembagian", a / b);
console.log("modulus (sisa bagi)", a % b);

//assigment
console.log("assignment");
let x = 35;

x += 5; // x = x + 5
console.log("x +=5", x);

x -= 5; // x = x - 5
console.log("x -=5", x);

x *= 5;
console.log("x *=5", x);

x /= 5;
console.log("x /=5", x);

x %= 5;
console.log("x %=5", x);

let c = 10
let d = "10"

console.log("c == d", c == d); //true
console.log("c === d", c === d ); //false
console.log("c != d", c != d); //false
console.log("c !== d", c !== d); //true
console.log("c > 5", c > 5);
console.log("c < d", c < d);
console.log("c >= d", c >= d);
console.log("c <= 10", c <= 10);

//condisional

let umur = 20;
let punyaktp = true;


console.log("boleh buat sim?", umur >= 17 && punyaktp == true);
console.log("remaja atau dewasa?", umur >= 13 && umur < 30);
console.log("bukan anak anak", umur > 13 );