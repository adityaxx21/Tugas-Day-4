// Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

//     Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
//     Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
//     Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
//     Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
//     Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.

// Contoh:

// Input: 30
// Output: E

// Input: 75
// Output: C

function score(input) {
    if (input >= 90) {
        return ('A')
    } else if (input >= 80 && input <= 89) {
        return ('B')
    } else if (input >= 70 && input <= 79) {
        return ('C')
    } else if (input >= 60 && input <= 69) {
        return ('D')
    } else if (input <= 59) {
        return ('E')
    } else {
        return ('invalid number')
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Input the number : `, arr => {
    
    console.log(score(arr));     
    readline.close();
});