// basic comparison 

console.log(2<5);
console.log(2<=5);
console.log(2!=5);
console.log(2>4);
console.log(2==5);

// string to number comparison 

// here the string is first converted to number automatically by javascrpt and then it compares them
console.log("2"<5);
console.log("2">=5);
console.log("2">5);

// but incase of null its different , because we know that null is like empty value with no values in it 
// sometimes the null converts into 0 , and sometimes converts into NaN and so on 


console.log(null==0);
console.log(null==0);
console.log(null<0);
console.log(null>0);
console.log(null>=0);


//lastly here comes the strict comparasion (===) triple equals to , it checks both datatypes 

console.log(2===5);
console.log("2"==5);

// so we should always note that , we should code in such a way that it dont gets confused 
