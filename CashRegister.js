/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

const checkCashRegister = (price, cash, cid) => {
  const denominations = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };
  
  const output = {
    status: "",
    change: []
  }

  const changeDue = parseFloat(cash - price).toFixed(2);
  
  // Calculate total change in drawer
  const cidTotal = (cid) => {
    let total = 0;
    for (let change of cid) {
      total += change[1];
    }
    return total.toFixed(2);
  };

  // Calculate change due
  const calculateChange = (changeDue) => {
    let changeArr = [];
    let numCoins = 0;

    for (let i = cid.length - 1; i >= 0; i--) {
      const coinName = cid[i][0];
      const coinValue = denominations[coinName];
      const cashInDrawer = cid[i][1];
      let coinAmount = (cashInDrawer / coinValue).toFixed(2);
      while (changeDue >= coinValue && coinAmount > 0) {
          changeDue -= coinValue;
          changeDue = changeDue.toFixed(2);
          coinAmount--;
          numCoins++;
      }
      if (numCoins > 0) {
        changeArr.push([coinName, numCoins * coinValue]);
        numCoins = 0;
      }
    }
    if (Number(cidTotal(changeArr)) < Number(changeDue)) {
      output.status = "INSUFFICIENT_FUNDS";
      return [];
    }
    return changeArr;
  }

  if (Number(cidTotal(cid)) < Number(changeDue)) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  } else if (cidTotal(cid) == changeDue) {
    output.status = "CLOSED";
    output.change = cid;
  } else {
    output.status = "OPEN";
    output.change = calculateChange(changeDue);
  }

  calculateChange(changeDue, cid);

  return output;
}

console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);