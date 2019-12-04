// Enter the any number into a function 
let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 

// num = 60;
// num -= integer[i]
function conversion(num){
    let numeral = "";
        // Looping through the integer array, in order to compare the number in the array to our entered number so we can 
        // either move on to the next number or log the numeral equivalent in the console
        for(let i = 0; i < integer.length; i++) {
            // If the number in the integer array is less than the entered number in the function 
            if(integer[i] <= num){ 
                // numeral = numeral + numerals[i]
                numeral += numerals[i]
                // as the arrays are corresponding, we can use the index in the numerals arrary to grab the correct numeral
                // That is then sent to numeral
                num -= integer[i]
                //num = num - integer[i] <- This is the same
                // the i-- goes back and re-checks the previous entry in the array to see if that can be used to subtract from the num 
                // and log the result into the array. Without the i-- it would go down and subtract from the next entry in the arr
                i--;
            } 
        }
        console.log(numeral)
    };
// Function grabs the entered number 
// If the number is over 1000, return M, depending on how much over 1000 the number is 

conversion(420);