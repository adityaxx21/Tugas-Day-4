// Film Rating

// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

//     Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
//     Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
//     Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
//     Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

// Contoh:

// Input: 15
// Output: Remaja

// Input: 32
// Output: Dewasa

function FilmRating(input) {
    if (input >= 21) {
        return ('DEWASA')
    } else if (input >= 13) {
        return ('REMAJA')
    } else if (input >= 9) {
        return ('BIMBINGAN ORANG TUA')
    } else if (input < 9) {
        return ('SEMUA USIA')
    }else {
        return ('invalid age')
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Input the age : `, arr => {
    
    console.log(FilmRating(arr));     
    readline.close();
});