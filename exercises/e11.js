// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let result = [];
  for (let account in array) {
    let withDrawalData = array[account].withdrawals;
    if (withDrawalData) {
      let total = 0;
      for (let i = 0; i < withDrawalData.length; i++) {
        total += parseFloat(withDrawalData[i]);
      }
      result.push(total);
    } else {
      result.push(0);
    }
  }
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
