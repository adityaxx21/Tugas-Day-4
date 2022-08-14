// Ganjil atau Genap?

// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.
// Contoh:

// Input: 43
// Output: Ganjil

// Input: 1032
// Output: Genap

function EvenOdd(input) {
     if (input == 0) {
        return ('Angka Nol')
    } else if (isNaN(input%2)) {
        return ('invalid number')
    } else if (input%2 == 0) {
        return ('Genap')
    }   else if (input%2 != 0) {
        return ('Ganjil')
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Input the number : `, arr => {
    
    console.log(EvenOdd(arr));     
    readline.close();
});