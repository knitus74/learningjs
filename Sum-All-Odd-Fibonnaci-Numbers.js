//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
    var number=1;
    var other_number = 1;
    var total = 2;
  for(var x=1; x<=num-2; x++){
      if(x%2 === 1){
      number+=other_number;
      if(number%2 === 1 && x!== 1 && number<=num){
          total+=number;
          }
      }
      else{
          other_number+=number;
          if(other_number%2 === 1 && x!==1 && other_number<=num){
          total+=other_number;
          }}
      if(other_number>num || number>num){
          break;
          }
  }
    
    return total;
      
}

sumFibs(4);
sumFibs(1000);
sumFibs(75024);
sumFibs(75025);
