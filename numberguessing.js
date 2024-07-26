// guessing game using for loop 
let number = 55;
let usernumber = prompt(" Enter Your guessing Number from 0 to 100 :");

for( let i=0; i <=100; i++){
  if(usernumber < number){
    usernumber = prompt(" The number you guessed is too small . Choose a larger number");
  }
  else if( usernumber > number  ){
    usernumber = prompt(" The number you guessed is too large . Choose a smaller number");
  }else if( usernumber = number){
    console.log(" The number you guessed is  correct. Thank you for playing the game .")
    break;

    }
}

// we can do by using while loop also 
let number1 = 55;
let usernumber1 = prompt(" Enter Your guessing Number from 0 to 100 :");
while( usernumber1 != number1){
    if(usernumber1 < number1){
        usernumber1 = prompt(" The number you guessed is too small . Choose a larger number");
      }
      else if( usernumber1 > number1  ){
          usernumber1 = prompt(" The number you guessed is too large . Choose a smaller number");
        }else if( usernumber1 = number1){
            break;
          }
        }
        console.log(" The number you guessed is  correct. Thank you for playing the game.");
