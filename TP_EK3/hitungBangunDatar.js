// LK Persegi
function lp(sisi) {
    return sisi * sisi;
}
function kp(sisi) {
    return 4 * sisi;
}

//LK Persegi Panjang
function lpp(panjang, lebar) {
    return panjang * lebar;
}
function kpp(panjang, lebar) {
    return 2 * (panjang + lebar);
}

// LK Lingkaran
function ll(jarijari) {
    return (22/7 * (jarijari ** 2)).toFixed(2);
}
function kl(jarijari) {
    return ((22/7 * jarijari * 2)).toFixed(2);
}

// LK Segitiga sama Sisi
function lss(alas, tinggi) {
    return (alas * tinggi)/2;
}
function kss(sisi) {
    return 3 * sisi;
}

console.log("==== MENGHITUNG LUAS DAN KELILING BANGUN DATAR ====");
console.log(">> LUAS BANGUN DATAR <<");
console.log("Luas Persegi Dengan Sisi 8 Adalah ", lp(8));
console.log("Luas Persegi Panjang Dengan Panjang 9 Dan Lebar 3 Adalah ", lpp(9, 3));
console.log("Luas Lingkaran Dengan Jari - Jari 6 Adalah ", ll(6));
console.log("Luas Segitiga Dengan Alas 6 Dan Tinggi 4 Adalah ", lss(6, 4));

console.log(">> KELILING BANGUN DATAR <<");
console.log("Keliling Persegi Dengan Sisi 8 Adalah ", kp(8));
console.log("Keliling Persegi Panjang Dengan Panjang 9 Dan Lebar 3 Adalah ", kpp(9, 3));
console.log("Keliling Lingkaran Dengan Jari - Jari 6 Adalah ", kl(6));
console.log("Keliling Segitiga Dengan Alas 6 Dan Tinggi 4 Adalah ", kss(6, 4));
