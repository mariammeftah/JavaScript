//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    let x = number%2;
    //console.log(x);
    if (x > 0){
       return number *9;
    } else return number*8;   
}

//simpleMultiplication(8);
console.log(simpleMultiplication(13));
