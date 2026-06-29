//data nilai
let nilai = [75, 88, 92]; //colom ke samping, baris ke bawah

//tampil array
console.log("1. Nilai awal: ");
nilai.forEach((nilai, index) => {
    console.log(`Siswa ${index + 1} : ${nilai}`);
});
console.log("");

// 1. Push (menambah nilai baru di akhir)
nilai.push(60);
console.log("2. Setelah nilai 60 ditambahkan (push):");
console.log(nilai);
console.log("");

// 2. Pop (menghapus nilai di akhir)
let nilaiTerakhir = nilai.pop();
console.log("3. Setelah menghapus nilai terakhir (pop)", nilaiTerakhir);
console.log("Nilai sekarang", nilai);
console.log("");

// 3. Map (tambah bonus 5 point ke semua nilai)
let nilaiBonus = nilai.map((nilai) => nilai + 5);
console.log("4. Nilai setelah ditambah bonus 5 point ke semua nilai (pop)");
console.log(nilaiBonus);
console.log("");

// Nilai bonus dengan forEach
console.log("5. Cetak nilai akhir siswa");
nilaiBonus.forEach((nilai, index) => {
    console.log(`Siswa ${index + 1} : ${nilai}`);
});














