/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

const checkCashRegister = (price, cash, cid) => {
  const denominations = [
    ["onehundreddollars", 100],
    ["twentydollars", 20],
    ["tendollars", 10],
    ["fivedollars", 5],
    ["onedollar", 1],
    ["quarter", 0.25],
    ["dime", 0.1],
    ["nickel", 0.05],
    ["penny", 0.01]
  ];
  
  const output = {
    status: null,
    change: []
  }
  
  let change = (cash - price).toFixed(2);

  const cidTotal = (cid) => {
    let cidTotal = 0;
    for(let i = 0; i < cid.length; i++) {
      cidTotal += cid[i][1];
    }
    return cidTotal.toFixed(2);
  };

  const calculateChange = (change) => {
    for(let i = 0; i < denominations.length; i++) {
      if (change === 0) {
        
      };
      if (change / denominations[i][1] > 0) {
        while (change / denominations[i][1] >= 1) {
          change -= denominations[i][1];
          console.log(denominations[i][0]);
        }
      }
    }
  }

  console.log(cidTotal(cid));
  console.log(change);

  if (cidTotal(cid) < change) {
    output.status = "INSUFFICIENT FUNDS";
    output.change = [];
  } else if (cidTotal(cid) === change) {
    output.status = "CLOSED";
    output.change = cid;
  }

  calculateChange(change, cid);

  return output;
}

console.log(
  checkCashRegister(19.50, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0.4], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  );