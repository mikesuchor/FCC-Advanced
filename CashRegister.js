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
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
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
    let changeArr = [];
    let numCoins = 0;
    for(let i = 0; i < denominations.length; i++) {
      if (change / denominations[i][1] >= 1) {
        while (change / denominations[i][1] >= 1) {
          numCoins++;
          change -= denominations[i][1];
        }
        changeArr.push([denominations[i][0], numCoins * denominations[i][1]]);
        console.log("numCoins * denominations", numCoins * denominations[i][1]);
        console.log("changeArr", changeArr);
      }
      numCoins = 0;
    }
  }

  console.log("cidTotal", cidTotal(cid));
  console.log("change", change);

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
  checkCashRegister(19.31, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0.4], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  );