// memory is of two types 
// stack and heap 

/* stack (Primitive)    in simple sense its like whenever you are getting stack memory it means 
    we are getting the copy of the memory .
*/

// example 
let name1 = "jeewan";
 let name2 = name1;
 name2 = "samir";

 console.log(name1);
 console.log(name2);



/*  Heap (Non-Primitive)  in simple sense , here we get the exact or say like original value through 
    through or like reference.
*/

// example
let user1 = {
    email: "jeewan@gmail.com",
    passWord: '1234'
}

let  user2 = user1;


user2.email = "samir@gmail.com";

console.log(user1);
console.log(user2);


/* summary , stack makes a copy for reference so that whenever any changes or modification is done 
    it don't affect the original value ,
        while in heap it refers the original value as a reference hence whenever the changes is done
        it affects the original value as well . run the code you will find out what i mean .*/