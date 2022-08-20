
// function similarItemsExpenses(elementId) {
//   const similarField = document.getElementById(elementId);
//   const similarFieldString = similarField.value;
//   const similarFieldValue = parseInt(similarFieldString);
//   similarField.value = similarFieldValue;
//   return similarFieldValue;
// }

// function similarItemsExpensesTwo(elementId) {
//   const similarField = document.getElementById(elementId);
//   const similarFieldString = similarField.innerText;
//   const similarFieldValue = parseInt(similarFieldString);
//   similarField.value = similarFieldValue;
//   return similarFieldValue;
// }

document.getElementById('calculate-btn').addEventListener('click', function () {
  //Food Expanse
  const foodField = document.getElementById('food-field');
  const foodFieldString = foodField.value;
  const foodFieldValue = parseInt(foodFieldString);

  foodField.value = '';

  // foodField.value = foodFieldValue;
   
  //Rant Expanse
   const rantField = document.getElementById('rent-field');
  const rantFieldString = rantField.value;
  const rantFieldValue = parseInt(rantFieldString);
  rantField.value = '';
  //Set the value
  // rantField.value = rantFieldValue;
 
  //Clothes Expanse
   const clothField = document.getElementById('cloth-field');
  const clothFieldString = clothField.value;
  const clothFieldValue = parseInt(clothFieldString);
  clothField.value = '';
  // clothField.value = clothFieldValue;

  //Calculate Expanse Amount
  const newTotalExpense = foodFieldValue + rantFieldValue + clothFieldValue;
 

  //Total Expanse Section
  const totalExpenseAmount = document.getElementById('total-expense');
  const previousTotalExpenseString = totalExpenseAmount.innerText;
  const previousTotalExpense = parseFloat(previousTotalExpenseString);
  totalExpenseAmount.innerText = '';


  // Calculate Total Expense
  const totalExpenseValue = previousTotalExpense + newTotalExpense;
  //Set the value
  totalExpenseAmount.innerText = totalExpenseValue;


  //Income field
  const incomeFieldValue = document.getElementById('income-field');
  const incomeAmountString = incomeFieldValue.value;
  const newIncomeAmount = parseInt(incomeAmountString);

  incomeFieldValue.value = '';

  //Set the value
  incomeFieldValue.value = newIncomeAmount;
  incomeFieldValue.value = '';
 //Balance Section
  const balanceFieldValue = document.getElementById('total-balance');
  const balanceAmountString = balanceFieldValue.innerText;
  const previousBalanceAmount = parseInt(balanceAmountString);

  // calculate balance
  const newBalance = newIncomeAmount - totalExpenseValue;
  //Set the value
  balanceFieldValue.innerText = newBalance;
 
    //clear the deposit field
  /*
  incomeFieldValue.value= '';
  foodField.value= '';
  rantField.value= '';
  clothField.value= '';
  */
})

document.getElementById('save-btn').addEventListener('click', function () {


  //Income field
  const incomeFieldValue = document.getElementById('income-field');
  const incomeAmountString = incomeFieldValue.value;
  const newIncomeAmount = parseInt(incomeAmountString);

  //Set the value
  incomeFieldValue.value = newIncomeAmount;


  // // savings input
  // const savingsInputField = document.getElementById('saving-input');
  // const savingsInputValueString = savingsInputField.value;
  // const savingsInputValue = parseInt(savingsInputValueString);
  // savingsInputField.value = '';

  // // Set the savings value
  // savingsInputField.value = savingsInputValue;

   // ----------->

  //Food Expanse
   const foodField = document.getElementById('food-field');
  const foodFieldString = foodField.value;
  const foodFieldValue = parseInt(foodFieldString);
  foodField.value = foodFieldValue;
 

  //Rant Expanse  
   const rantField = document.getElementById('rent-field');
  const rantFieldString = rantField.value;
  const rantFieldValue = parseInt(rantFieldString);
  rantField.value = '';
  //Set the value
  rantField.value = rantFieldValue;

  //Clothes Expanse
   const clothField = document.getElementById('cloth-field');
  const clothFieldString = clothField.value;
  const clothFieldValue = parseInt(clothFieldString);

  clothField.value = '';

  clothField.value = clothFieldValue;

  //Calculate Expanse Amount
  const newTotalExpense = foodFieldValue + rantFieldValue + clothFieldValue;
  

  //Total Expanse Section
  const totalExpenseAmount = document.getElementById('total-expense');
  const previousTotalExpenseString = totalExpenseAmount.innerText;
  const previousTotalExpense = parseFloat(previousTotalExpenseString);

  // Calculate Total Expense
  const totalExpenseValue = previousTotalExpense + newTotalExpense
  // console.log(totalExpenseValue);
  //Set the value
  totalExpenseAmount.innerText = totalExpenseValue;


    //Balance Section
  const balanceFieldValue = document.getElementById('total-balance');
  const balanceAmountString = balanceFieldValue.innerText;
  const previousBalanceAmount = parseInt(balanceAmountString);
  console.log('Something')
  

  // calculate balance
  const newBalance = newIncomeAmount - totalExpenseValue;
  //Set the value
  balanceFieldValue.innerText = newBalance;

// ----------->


// savings input
  const savingsInputField = document.getElementById('saving-input');
  const savingsInputValueString = savingsInputField.value;
  const savingsInputValue = parseInt(savingsInputValueString);
  savingsInputField.value = '';

  // Set the savings value
  savingsInputField.value = savingsInputValue;

  // Total savings modulus
  const totalSavings = parseFloat(previousBalanceAmount / savingsInputValue);
  
  document.getElementById('savings-amount').innerHTML = totalSavings;

  const X = previousBalanceAmount - totalSavings;
  document.getElementById('remaining-amount').innerHTML = X;

  // const X =  newIncomeAmount - newTotalExpense;
  // const Z = X - totalSavings ;
  // document.getElementById('remaining-amount').innerHTML = Z;

  
})

