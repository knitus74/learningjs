//Sum all the prime numbers up to and including the provided number.

//A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

//The provided number may not be a prime.

function sumPrimes(num) {
  var arr = [2];
  for(var x = 3; x<=num; x++){
      for(var y = 0; y<arr.length; y++){
          if(x % arr[y] === 0){
              break;
              }
          if(y=== arr.length-1 && x % arr[y] !== 0){
              arr.push(x);
              }
          }
      }
  var blar = arr.reduce(function(a,b){return a+b;});
  console.log(blar);
}

sumPrimes(10);
