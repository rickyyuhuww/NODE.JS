let NasiGoreng = 25000;
let MieGoreng  = 22000;
let Capcay     = 32000;
let Pembayaran = 100000;
let Total = NasiGoreng + MieGoreng + Capcay;
let PotonganDiskon = Total * 0.10;
let Hargabayar =  Total - PotonganDiskon;
let Kembalian = Pembayaran - Hargabayar;


console.log("Harga Nasi Goreng: Rp. " + NasiGoreng);
console.log("Harga Mie Goreng: Rp. " + MieGoreng);
console.log("Harga Capcay: Rp. " + Capcay);
console.log("Harga Total: Rp. " + Total);
console.log("Diskon: 10%");
console.log("Harga Setelah Diskon: Rp. " + Hargabayar);
console.log("Pembayaran: Rp. " + Pembayaran);
console.log("Kembalian: Rp. " + Kembalian);




