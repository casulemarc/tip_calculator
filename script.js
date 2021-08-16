//Grab all data from input box
let totalBill = document.getElementById("billAmount");
//event will be fired when bill activity is entered
totalBill.addEventListener("keypress", getBillAmount);

//Grab customer numbers
let numbOfCustomers = document.getElementById("emp_number");
//event will be fired when num of employees is entered
numbOfCustomers.addEventListener("keypress", getCustomerNumber);

let tipToken = document.getElementById("tipToken"); // tips
let totalPerPerson = document.getElementById("tipTotal"); // total fees
let customerNumber = document.getElementById("emp_number"); //access the number of customers

//BUTTONS
//FIVE BUTTON
const five = document.getElementById("five");
five.addEventListener("click", () => {
  //tips per person
  let tipValue = 0.05 * parseFloat(document.getElementById("billAmount").value);
  tipToken.innerText = Math.round(tipValue * 100) / 100;

  //check customer input
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
});
//TEN BUTTON
const ten = document.getElementById("ten");
ten.addEventListener("click", () => {
  let tipValue = 0.1 * parseFloat(document.getElementById("billAmount").value);
  tipToken.innerText = Math.round(tipValue * 100) / 100;

  //check customer input
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
});
//FIFTEEN BUTTON
const fifteen = document.getElementById("fifteen");
fifteen.addEventListener("click", () => {
  let tipValue = 0.15 * parseFloat(document.getElementById("billAmount").value);
  tipToken.innerText = Math.round(tipValue * 100) / 100;

  //check customer input
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
});
//TWENTY FIVE BUTTON
const twentyFive = document.getElementById("twentyFive");
twentyFive.addEventListener("click", () => {
  let tipValue = 0.25 * parseFloat(document.getElementById("billAmount").value);
  tipToken.innerText = Math.round(tipValue * 100) / 100;

  //check customer input
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
});
//FIFTY BUTTON
const fifty = document.getElementById("fifty");
fifty.addEventListener("click", () => {
  let tipValue = 0.5 * parseFloat(document.getElementById("billAmount").value);
  tipToken.innerText = Math.round(tipValue * 100) / 100;

  //check customer input
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
});
//CUSTOM TIP BUTTON
let customTip = document.getElementById("custom"); // custom tips values
const customTipButton = document.getElementById("customTip"); //custom tip button
customTip.addEventListener("keypress", (e) => {
  let customTipPercent = parseFloat(e.target.value) / 100; //store custom tip event
  //solve for the tip by pressing button
  customTipButton.addEventListener("click", () => {
    let tipValue =
      (document.getElementById("custom").value / 100) *
      parseFloat(document.getElementById("billAmount").value);
    tipToken.innerText = Math.round(tipValue * 100) / 100;

    //check customer input
    if (customerNumber.value !== "") {
      let tipTotalPerPerson =
        (parseFloat(document.getElementById("billAmount").value) + tipValue) /
        customerNumber.value;
      totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
    } else {
      tipTotalPerPerson =
        parseFloat(document.getElementById("billAmount").value) + tipValue;
      totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
    }
  });
});
//function event to return bill amount function
function getBillAmount(e) {
  totalBill = parseInt(e.target.value); //store the keypress data into total bill
}

//function event to handle number of customers
function getCustomerNumber(e) {
  numbOfCustomers = parseFloat(e.target.value); //store customer number to numbOfCustomers
}

//Check if customer number is not empty
const checkCustomerInput = () => {
  if (customerNumber.value !== "") {
    let tipTotalPerPerson =
      (parseFloat(document.getElementById("billAmount").value) + tipValue) /
      customerNumber.value;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  } else {
    tipTotalPerPerson =
      parseFloat(document.getElementById("billAmount").value) + tipValue;
    totalPerPerson.innerText = Math.round(tipTotalPerPerson * 100) / 100;
  }
};

//RESET BUTTON
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  document.getElementById("billAmount").value = "";
  document.getElementById("emp_number").value = "";
  tipToken.innerText = "0.00";
  totalPerPerson.innerText = "0.00";
});
