function checkEvenOdd(num) {
    num = Math.floor(num); 
    if (isNaN(num)) {  
        return "Not a valid number";
    } else if (num % 2 === 0) {  
        return "even";
    } else {  
        return "odd";
    }
}
console.log(checkEvenOdd(9.9))