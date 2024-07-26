// for -in-loop

let student = {
    name: 'John',
    age: 30,
    isAdmin: true,
    };

    // to print the key only 
for(let i in student){
    console.log(i);
}

//to print the key along with the values
for(let i in student){
    console.log(i , student[i]);
    }
    