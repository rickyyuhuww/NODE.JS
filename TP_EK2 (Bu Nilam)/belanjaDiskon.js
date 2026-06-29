let headset  = 225000;
let mouse    = 150000;
let keyboard = 350000;
let total    = headset+mouse+keyboard;
let diskon = 0;
if (total >= 500000) {
    diskon = 10;
} else {
    diskon = 0;
}
let nilaidiskon = (total * diskon)/100;
let totaldiskon = total - nilaidiskon;
let pembayaran  = 800000;
let kembalian   = pembayaran - totaldiskon;

console.log("Headset: Rp. " + headset);
console.log("Mouse: Rp. " + mouse);
console.log("Kyborad: Rp. " + keyboard);s
console.log("Total Belanja: Rp. " + total);
console.log("Diskon: " + diskon + "%");
console.log("Total Setelah Diskon: Rp. " + totaldiskon);
console.log("Pembayaran: Rp. " + pembayaran);
console.log("Kembalian: Rp. " + kembalian);
