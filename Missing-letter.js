//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var result = '';
  for(var x = 0; x<str.length-1; x++){
      if(str.charCodeAt(x+1) - str.charCodeAt(x) === 2){
          result = String.fromCharCode(str.charCodeAt(x)+1);
          }
      }
  if (result === ''){
      return undefined;
      }
  else{
      return result;
      }
}

fearNotLetter('abce');
