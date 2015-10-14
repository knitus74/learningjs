//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

var Pairings = new Object();
Pairings.A = 'T';
Pairings.T = 'A';
Pairings.G = 'C';
Pairings.C = 'G';

function pair(str) {
 total_arr = [];
 RAM_arr = [];
 var x = 0;
 while(x<str.length){
     RAM_arr.push(str[x]);
     RAM_arr.push(Pairings[str[x]]);
     total_arr.push(RAM_arr);
     RAM_arr = [];
     x++;
     }
  return total_arr;
}

pair("GCG");
