// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.
// Contoh:

// Input: 1900
// Output: Bukan kabisat

// Input: 2000
// Output: Kabisat

// Input: 2001
// Output: Bukan kabisat

// Input: 2016
// Output: Kabisat



function kabisat(input) {
    if (input == 0) {
       return ('Angka Nol')
   } else if (isNaN(input%2)) {
       return ('invalid year')
   } else if (input%4 == 0) {
       return ('Kabisat')
   }   else if (input%4 != 0) {
       return ('Bukan Kabisat')
   }
}

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout,
});

readline.question(`Input the year : `, arr => {
   
   console.log(kabisat(arr));     
   readline.close();
});