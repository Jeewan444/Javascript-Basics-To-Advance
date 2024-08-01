// print all the  even numbers from 0 to 100

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
}
}

// print all the  odd numbers from 0 to 100

for(let i=0; i<=100; i++){
    if(i%2!==0){
        console.log(i);
}
}

//print all the odd and even numbers using while loop 
let number = 2; 

while (number <= 100) {
  console.log(number);
  number += 2; 
}

//print all the odd and even numbers using do-while loop 

let number = 2;

do {
  console.log(number);
  number += 2; 
} while (number <= 100);

