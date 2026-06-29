const fs = require("fs");

let siswa = [
    {
        nama: "Rifqi",
        kelas: "PeWeb Node.js",
        nilai: [78, 92, 87],
    },
]

//simpan data ke siswa.json
fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2));
console.log("Data siswa berhasil ditambahkan ke siswa.json");








