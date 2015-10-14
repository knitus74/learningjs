//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function addition(str, index){
    return str.slice(0, index)+ '-' +str.slice(index); 
    }

function spinalCase(str) {
  str = str.replace(/([^a-zA-Z])/g, '-');
  
  while(str.search(/[a-z][A-Z]/) !== -1){
      str = addition(str, str.search(/[a-z][A-Z]/)+1);
      }
  str = str.toLowerCase();
  
  return str;
  
}

spinalCase('ThisIsSpinalTap');

