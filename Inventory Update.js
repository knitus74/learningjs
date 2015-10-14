//Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

var findIndex = function(array, value){    //using NODEjs as my javascript engine, and google Chrome V8 doesn't support this function
for(var y = 0; y < array.length; y++){
    if(array[y][1] === value){
        return y
        break;
    } 
}}

function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(var x = 0; x < arr2.length ; x++){

        var newItem = arr2[x];
        
        if( arr1.some(function(element){ return element[1] === newItem[1]}) ){

            var update_index = findIndex(arr1, newItem[1]);

            arr1[update_index][0] += newItem[0] ;           
        }
        else{
            arr1.push(arr2[x]);
        }
    }
    arr1.sort(function(x , y){return x[1].charCodeAt(0) - y[1].charCodeAt(0)});
    console.log(arr1);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
