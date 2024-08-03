// print all the squares of the number from the given array using for each loop 

let arr = [5,6,4,3];
arr.forEach((num) => {
    console.log(num*num);

});


// we can do this by callbackfunction as well

let n = [2,4,6,8,9];

let calculateSquare = (n) => {
    console.log(n**2);
}

n.forEach(calculateSquare);