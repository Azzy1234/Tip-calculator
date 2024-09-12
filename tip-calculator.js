function calculateTip() {
    const foodAmount = parseFloat(document.getElementById('foodAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value);

    if (foodAmount > 0) {
        const tip = (foodAmount * tipPercent) / 100;
        const total = foodAmount + tip;

        document.getElementById('result').innerText = 
            `Tip: $${tip.toFixed(2)}, Total including Tip: $${total.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid food amount.';
    }
}
