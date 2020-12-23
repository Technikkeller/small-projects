function calculateTipAmount() {
  let billAmount = Number(document.getElementById("billAmount").value);
  let percentage = Number(document.getElementById("percentage").value);

  // Bill amount must be more than 0. If it's 0, return error message
  if (billAmount === 0) {
    alert("You need to enter an amount");
  }

  // Take bill amount and percentage and do bill amount x percentage. The answer is the tipAmount.
  let tipAmount = billAmount * percentage;

  // We need to take tipAmount and have it appear on the page
  document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2);
}
