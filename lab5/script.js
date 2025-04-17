const billInput   = document.getElementById("billTotal");
const tipSlider   = document.getElementById("tipSlider");
const tipPercent  = document.getElementById("tipPercent");
const tipAmount   = document.getElementById("tipAmount");
const totalTax    = document.getElementById("totalWithTax");
const totalTipTax = document.getElementById("totalWithTipTax");
const errorMsg    = document.getElementById("errorMsg");
const currency    = document.getElementById("currency");
const rateInput   = document.getElementById("conversionRateDisplay");
const convTip     = document.getElementById("convertedTip");
const convTotal   = document.getElementById("convertedTotal");

let rates = { usd:1, inr:85, eur:0.95 };
const symbols = { usd:"USD", inr:"₹", eur:"€" };

document.getElementById("tipForm").addEventListener("input", calculate);
currency.addEventListener("change", calculate);

function calculate() {
  const bill = parseFloat(billInput.value);
  const pct  = parseInt(tipSlider.value, 10);

  if (!bill || bill <= 0) {
    errorMsg.textContent = billInput.value
      ? "Please enter a valid positive number."
      : "";
    clearAll();
    return;
  }

  errorMsg.textContent = "";
  tipPercent.value = pct + "%";

  const taxAmt   = bill * 0.11;
  const withTax  = bill + taxAmt;
  totalTax.value = withTax.toFixed(2);

  const tipAmt      = bill * (pct/100);
  tipAmount.value   = tipAmt.toFixed(2);

  const grandTotal  = withTax + tipAmt;
  totalTipTax.value = grandTotal.toFixed(2);

  const cur    = currency.value;
  const rate   = rates[cur] || 1;
  rateInput.value = rate.toFixed(4) + " " + symbols[cur];
  convTip.value   = (tipAmt * rate).toFixed(2) + " " + symbols[cur];
  convTotal.value = (grandTotal * rate).toFixed(2) + " " + symbols[cur];
}

function clearAll() {
  tipPercent.value    = "";
  totalTax.value      = "";
  tipAmount.value     = "";
  totalTipTax.value   = "";
  rateInput.value     = "";
  convTip.value       = "";
  convTotal.value     = "";
}
