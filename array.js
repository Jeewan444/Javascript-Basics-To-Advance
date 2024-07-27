let cities = ["blr", "ktm" , "pkr", "ltr" ,"jnk"];

for(city of cities){
    console.log(city);
}

// print the aaverage marks of entire class array of marks [87,78,92,93,88]

let marks = [87,78,92,93,88];
let sum = 0;
for(let i of marks){
    sum =sum + i;
    }
let average = (sum / marks.length);
console.log("average marks of student :",average);
console.log(`the average marks of the student is ${average}`);


// givena anarray of items [250, 450,300,240,340] provided with 10% offer dedect it and store in the final array

let items = [ 250, 450,300,240,340];
let final = [];
for(let i of items){
    let offer = (i/10);
    let finalprice = i - offer;
    final.push(finalprice);
    }
    console.log(final);
    // or

        let final1 = [];
        for(let i of items){
            let offer = (i/10);
            let finalprice = i - offer;
            final1.push(finalprice);
            }
            console.log(final1);
            // or
            let final2 = [];
            for(let i of items){
                let offer = (i*0.1);
                let finalprice = i - offer;
                final2.push(finalprice);
                }
                console.log(final2);

// do the same question using for loop
let items4 = [ 250, 450,300,240,340];
let final4 = [];
for(let i = 0; i<items4.length; i++){
    let offer = (items4[i]/10);
    let finalprice = items4[i] - offer;
    final4.push(offer);
    final4.push(finalprice);
    }
    console.log(final4);
    // or
    let final5 = [];
    for(let i = 0; i<items4.length; i++){
        let offer = (items4[i]*0.1);
        let finalprice = items4[i] - offer;
        final5.push(finalprice);
        }
        console.log(final5);


        // or

        //using for of loop again

        
        let items6 = [ 250, 450,300,240,340];
        for(let i =0; i<items6.length; i++){
            let offer =items6[i]/10;
            let finalprice = items6[i] - offer; 
            console.log(finalprice);
        }

        let items7 = [ 250, 450,300,240,340];
        for(let i =0; i<items7.length; i++){
            let offer =items6[i]/10;
            let fprice = items7[i] - offer; 
            
             console.log(fprice);  
        }
        
        

        let items8 = [ 250, 450,300,240,340];
        for(let i =0; i<items8.length; i++){
            let offer =items8[i]/10;
            items8[i] -= offer; 
            console.log(items8[i]);
        }
