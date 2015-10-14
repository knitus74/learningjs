//Return the number of total permutations of the provided string that don't have repeated consecutive letters.

//For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

var factorial = function(number){
	var result = 1;
	while(number != 1){
		result *= number;
		number -= 1;
	}
	return result;
}

function permAlone(str) {
	var diffChars = {};
	for(var x = 0; x < str.length; x++){
		
		if(diffChars.hasOwnProperty(str[x])){
			diffChars[str[x]] += 1;
		}
		else{ 
			diffChars[str.slice(x, x+1)] = 1;}

		}

	var totPerm = factorial(str.length);
	var other = 1;

	for(var y in diffChars){
		other *= factorial(diffChars[y]);
	}

	var result = totPerm / other;

	console.log(diffChars);
  	console.log(str);
  	console.log(result);
}

permAlone('mississippi');
