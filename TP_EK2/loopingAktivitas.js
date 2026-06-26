for (let angka = 1; angka <= 20; angka++) {
    if (angka % 2 !== 0 && angka % 3 !== 0){
       console.log(angka, "- Apel Pagi"); 
    }
    else if (angka % 2 == 0 && angka % 3 !== 0){
       console.log(angka, "- Mengikuti Pelathan"); 
    }
    else if (angka % 2 !== 0 && angka % 3 == 0){
       console.log(angka, "- Mengikuti Uji Kompetensi"); 
    }
    else {
       console.log(angka, "- Mendapatkan Sertifikat"); 
    }
    
}
