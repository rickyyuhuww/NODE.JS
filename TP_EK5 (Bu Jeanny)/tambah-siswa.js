const fs = require ('fs');
const filePath = "siswa.json";
let daftar = [];

if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

//data siswa baru
let siswaBaru1 = {
    nama: "Wonwoo",
    kelas: "PeWeb Node.js",
    nilai: [93, 97, 83],
};

let siswaBaru2 = {
    nama: "Vernon",
    kelas: "PeWeb Node.js",
    nilai: [98, 77, 68],
};

//tambah ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

//simpen kembali ke file
fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2));
console.log("Data siswa berhasil ditambahkan ke siswa.json");


















