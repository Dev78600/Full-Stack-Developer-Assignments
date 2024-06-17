// FUNCTION FOR CALCULATING TAX
function calculateTax(income) {
    let taxRate;
    if (income < 20000) {
      taxRate = 0.1;
    } else if (income < 50000) {
      taxRate = 0.2;
    } else {
      taxRate = 0.3;
    }
    return income * taxRate;
  }
  console.log(calculateTax(15000));
  