//Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

//cid is a 2d array listing available currency.

//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

//Otherwise, return change in coin and bills, sorted in highest to lowest order.
// Write five console.log statements.
//Seems to be a bug which doesn't do change lower than a 5er?
bills_coins = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1.00,
    FIVE: 5.00,
    TEN: 10.00,
    TWENTY: 20.00,
    ONEHUNDRED: 100.00
    };

function drawer(price, cash, cid) {
  cid[cid.length-1][0] = 'ONEHUNDRED'; //get rid of space in order to access it as a property key
  var cid_length = cid.length-1;
  var difference = cash - price;
  var total_cash = cid.reduce(function(x,y){return x + y[1];}, cid[0][1]);
  var change = [[1,1]];
  var a_value = bills_coins[cid[cid_length][0]];
  var notes_left = cid[cid_length][1];
  
  if(total_cash < difference){
      return 'insufficient funds';
      }
    else{while(difference !== 0){
        if( cid[cid_length][1] != 0 && difference / bills_coins[cid[cid_length][0]] >= 1 ){
            difference -= bills_coins[cid[cid_length][0]];
            cid[cid_length][1] -= bills_coins[cid[cid_length][0]];

            if( change[change.length-1][0] === cid[cid_length][0]){

              change[change.length - 1][1] += bills_coins[cid[cid_length][0]];

            }
            
            else{
            change.push([cid[cid_length][0], bills_coins[cid[cid_length][0]]]);
              }

            }

        else{
            
            cid_length -= 1;
            
            }
        }
        change.shift();
    
        cid[cid.length-1][0] = 'ONE HUNDRED';
        if(change[0][0] === 'ONEHUNDRED'){
          change[0][0] = 'ONE HUNDRED';             // Reset the spacing in the 'ONE HUNDRED' for readability purposes
        }

        console.log(change);
        console.log(cid);
      }
    

    //SLOPPY LOOP STATEMENT. Will need to replace with an if statement in the while loop to truncate change
    console.log(cid[cid_length-2][1])

}


// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(15.45, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
//drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0.00], ['FIVE', 0.00], ['TEN', 0.00], ['TWENTY', 0.00], ['ONE HUNDRED', 0.00]]);