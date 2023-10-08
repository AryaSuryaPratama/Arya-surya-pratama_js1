let kondisiCederaTangan = true;
let kondisiCederaKaki = true;

for (let tahun = 2018; tahun <= 2023; tahun++) {
    if (kondisiCederaTangan || kondisiCederaKaki) {
        console.log(`Tahun ${tahun}: Saya pensiun dari bermain bola karena cedera.`);
        break; // Keluar dari perulangan jika kondisi cedera terpenuhi
    } else {
        console.log(`Tahun ${tahun}: Saya masih bermain bola.`);
    }
}