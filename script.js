//Grab all data from input box
//let dataBox = []
let totalBill = document.getElementById("billAmount");
//event will be fired when bill activity is entred
totalBill.addEventListener("keypress", getBillAmount);
let tipToken = document.getElementById("tipToken"); //sample code to store data

//Return bill amount function
function getBillAmount(e) {
  totalBill = parseInt(e.target.value); //store the keypress data into total bill
  //tipToken.textContent = numbOfCustomers; // sample code to test output into tip box
}

//Grab customer numbers
let numbOfCustomers = document.getElementById("emp_number");
//event will be fired when num of employees is entered
numbOfCustomers.addEventListener("keypress", getCustomerNumber);
//function to handle event
function getCustomerNumber(e) {
  numbOfCustomers = parseInt(e.target.value); //store customer number to numbOfCustomers
  tipToken.textContent = numbOfCustomers; // sample code to test output into tip box
}

// //Return number of customers present
// let numbCustomerResult = result;

// //tip Amount per customer
// const tipReward = (totalBillResult, numbOfCustomers) => {
//   return totalBillResult / numbCustomerResult;
// };

// //number of customers present error tracker
// let error_numOfPeople = document.getElementById(
//   "error_numOfPeopleID"
// ).innerText;
// //Check if number is entered
// const checkNumOfCustomers = () => {
//   if (numbOfCustomers === null && numbOfCustomers === 0) {
//     error_numOfPeopleID = 'Please enter "0" or more'; //remember to call this function
//   }
// };

// //calculate tips
// //select tips
// const five = document.getElementById("five");
// function pressedFiveTip() {
//   return "Pressed";
// }

// console.log(chooseTips);

const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twentyFive");
const fifty = document.getElementById("fifty");
const customTip = document.getElementById("customTip");
