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
  let cidTotal = 0;
  const output = {
    status: null,
    change: []
  }
  let change = cash - price;

  const calculateNumCoins = (change) => {
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

  const calculatecidTotal = (cid, cidTotal) => {
    for(let i = 0; i < cid.length; i++) {
      cidTotal += cid[i][1];
    }
    return cidTotal;
  }

  cidTotal = calculatecidTotal(cid, cidTotal).toFixed(2);
  console.log(cidTotal);

  if (cidTotal < change) {
    output.status = "INSUFFICIENT FUNDS";
    output.change = [];
  }

  calculateNumCoins(change, cid);

  return output;
}

console.log(
  checkCashRegister(8.11, 9, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));