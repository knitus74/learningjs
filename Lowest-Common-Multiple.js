//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//The range will be an array of two numbers that will not necessarily be in numerical order.

//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  for(var t = 1; t<=arr[1]; t++  ){
      arr.push(t);
      }
  arr.splice(0,2);
  for(var x = 0; x<arr.length; x++){
      for(var y = 0; y < x; y++){
          if(arr[x] % arr[y] === 0 && arr[y] !== 1){
              arr.splice(x, 1, arr[x]/arr[y]);
              }
          }
      }
  
  return arr.reduce(function(a,b){return a*b;});
}


smallestCommons([1,5]);
